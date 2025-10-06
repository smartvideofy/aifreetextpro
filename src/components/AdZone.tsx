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

  useEffect(() => {
    try {
      if (adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
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
