// Professional AdSense Implementation
// Follows Google AdSense policies for visitor-friendly ad placement

import { useEffect, useRef } from "react";

interface AdZoneProps {
  slot: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdZone = ({ 
  slot, 
  format = "auto", 
  responsive = true,
  className = "",
  style = {}
}: AdZoneProps) => {
  const adRef = useRef<HTMLModElement>(null);
  const isVisible = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Lazy load ads using Intersection Observer
    if (!adRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (error) {
              console.error('AdSense error:', error);
            }
          }
        });
      },
      {
        rootMargin: '200px', // Load ad 200px before it enters viewport
        threshold: 0.01
      }
    );

    observerRef.current.observe(adRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-9996862426063829"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

// Predefined ad components for common placements
export const SidebarAd = ({ className = "" }: { className?: string }) => (
  <div className={`mb-8 ${className}`}>
    <p className="text-xs text-muted-foreground mb-2 text-center">Advertisement</p>
    <AdZone 
      slot="1234567890" // Replace with actual ad slot ID from AdSense
      format="auto"
      responsive={true}
      className="min-h-[250px]"
    />
  </div>
);

export const InContentAd = ({ className = "" }: { className?: string }) => (
  <div className={`my-8 flex flex-col items-center ${className}`}>
    <p className="text-xs text-muted-foreground mb-2">Advertisement</p>
    <AdZone 
      slot="2345678901" // Replace with actual ad slot ID from AdSense
      format="auto"
      responsive={true}
      className="w-full max-w-3xl"
    />
  </div>
);

export const FooterAd = ({ className = "" }: { className?: string }) => (
  <div className={`py-6 ${className}`}>
    <p className="text-xs text-muted-foreground mb-2 text-center">Advertisement</p>
    <AdZone 
      slot="3456789012" // Replace with actual ad slot ID from AdSense
      format="horizontal"
      responsive={true}
      className="w-full"
    />
  </div>
);
