// Helpers that make the Puppeteer prerender snapshot hydratable.
//
// The prerendered HTML is a snapshot of a client render (see vite.config.ts),
// not renderToString output, so it lacks two things hydrateRoot relies on:
//  1. <!--$--> ... <!--/$--> around every <Suspense> boundary's content.
//  2. <!-- --> between adjacent text nodes. React renders `a {b}` as two text
//     nodes; serialized and re-parsed they become one, and hydration can't
//     match the second.
// Without them every page threw React #418 then #423 and React threw away the
// prerendered DOM. finalizeSnapshot() adds both right before the snapshot.

export const SUSPENSE_MARKER_ATTR = "data-suspense-marker";

/** True inside the build-time Puppeteer prerender, never for real visitors. */
export const isPrerendering = () =>
  typeof window !== "undefined" &&
  !!(window as Window & { __PRERENDER_INJECT__?: unknown }).__PRERENDER_INJECT__;

// Elements whose text children must not be split with comments.
const RAW_TEXT_TAGS = new Set(["SCRIPT", "STYLE", "TEXTAREA", "TITLE", "NOSCRIPT"]);

const separateAdjacentText = (parent: Node) => {
  let prev: ChildNode | null = null;
  for (let node = parent.firstChild; node; node = node.nextSibling) {
    if (node.nodeType === Node.TEXT_NODE && prev?.nodeType === Node.TEXT_NODE) {
      parent.insertBefore(document.createComment(" "), node);
    } else if (node.nodeType === Node.ELEMENT_NODE && !RAW_TEXT_TAGS.has(node.nodeName)) {
      separateAdjacentText(node);
    }
    prev = node;
  }
};

/**
 * Run once, just before the prerenderer snapshots the page. It only inserts
 * comment nodes; the <template> markers themselves are stripped from the
 * saved HTML in vite.config.ts postProcess.
 */
export const finalizeSnapshot = (root: HTMLElement) => {
  root.querySelectorAll<HTMLTemplateElement>(`template[${SUSPENSE_MARKER_ATTR}]`).forEach((marker) => {
    const edge = marker.getAttribute(SUSPENSE_MARKER_ATTR);
    if (edge === "start") {
      marker.before(document.createComment("$"));
    } else if (edge === "fallback") {
      // Still loading at snapshot time: React client-renders this boundary.
      marker.before(document.createComment("$!"));
    } else {
      marker.after(document.createComment("/$"));
    }
  });
  separateAdjacentText(root);
};
