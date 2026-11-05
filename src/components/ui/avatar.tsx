import * as React from "react";

import { cn } from "@/lib/utils";

// Same markup and classes as the Radix Avatar this replaces. Radix shows the
// fallback on its first (hydration) render and only swaps in the <img> once
// the image has loaded, so it never matched the prerendered snapshot, which
// already holds the loaded <img>. Here the image renders straight away and the
// fallback shows only when there is no image or it fails to load.
const AvatarContext = React.createContext<{ failed: boolean; setFailed: (failed: boolean) => void; hasImage: boolean }>({
  failed: false,
  setFailed: () => {},
  hasImage: false,
});

const Avatar = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => {
    const [failed, setFailed] = React.useState(false);
    const hasImage = React.Children.toArray(children).some(
      (child) => React.isValidElement<{ src?: string }>(child) && child.type === AvatarImage && !!child.props.src,
    );
    const context = React.useMemo(() => ({ failed, setFailed, hasImage }), [failed, hasImage]);
    return (
      <AvatarContext.Provider value={context}>
        <span
          ref={ref}
          className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
          {...props}
        >
          {children}
        </span>
      </AvatarContext.Provider>
    );
  },
);
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, onError, ...props }, forwardedRef) => {
    const { failed, setFailed } = React.useContext(AvatarContext);
    const imgRef = React.useRef<HTMLImageElement | null>(null);

    // A prerendered <img> may have failed before React attached onError.
    React.useEffect(() => {
      const img = imgRef.current;
      if (img?.complete && img.naturalWidth === 0) setFailed(true);
    }, [setFailed]);

    if (failed || !props.src) return null;
    return (
      <img
        ref={(node) => {
          imgRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        className={cn("aspect-square h-full w-full", className)}
        onError={(event) => {
          setFailed(true);
          onError?.(event);
        }}
        {...props}
      />
    );
  },
);
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    const { failed, hasImage } = React.useContext(AvatarContext);
    if (hasImage && !failed) return null;
    return (
      <span
        ref={ref}
        className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
        {...props}
      />
    );
  },
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
