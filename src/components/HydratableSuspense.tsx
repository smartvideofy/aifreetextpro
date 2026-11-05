import { Suspense, type ReactNode } from "react";
import { isPrerendering, SUSPENSE_MARKER_ATTR } from "@/lib/prerender";

// <Suspense> for anything that ends up in a prerendered page. During the
// prerender it brackets its content (or its fallback, if still loading) with
// inert <template> markers, which finalizeSnapshot() turns into the
// <!--$--> / <!--$!--> ... <!--/$--> comments hydrateRoot expects. Real
// visitors render a plain <Suspense>; while a lazy chunk is still loading,
// React keeps the prerendered HTML on screen.
const prerendering = isPrerendering();

const Marker = ({ edge }: { edge: "start" | "fallback" | "end" }) =>
  prerendering ? <template {...{ [SUSPENSE_MARKER_ATTR]: edge }} /> : null;

const HydratableSuspense = ({ fallback, children }: { fallback?: ReactNode; children: ReactNode }) => (
  <Suspense
    fallback={
      <>
        <Marker edge="fallback" />
        {fallback}
        <Marker edge="end" />
      </>
    }
  >
    <Marker edge="start" />
    {children}
    <Marker edge="end" />
  </Suspense>
);

export default HydratableSuspense;
