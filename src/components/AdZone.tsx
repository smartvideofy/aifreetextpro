// Ad Placement Zones Component
// This component defines placeholder zones where ads will be placed once AdSense is approved
// DO NOT add actual ad code until AdSense approval is received

import { Card } from "@/components/ui/card";

interface AdZoneProps {
  position: "header" | "sidebar" | "in-content" | "footer";
  size?: "banner" | "square" | "leaderboard" | "skyscraper";
  className?: string;
}

export const AdZone = ({ position, size = "banner", className = "" }: AdZoneProps) => {
  // Ad zones are currently disabled for development
  // Enable only after AdSense approval
  const isAdEnabled = false;

  if (!isAdEnabled) {
    return null; // Don't render ad zones until approved
  }

  const adDimensions = {
    banner: "w-full h-24", // 728x90 or responsive
    square: "w-64 h-64", // 250x250
    leaderboard: "w-full h-20", // 728x90
    skyscraper: "w-40 h-[600px]", // 160x600
  };

  return (
    <div className={`ad-zone ad-zone--${position} ${className}`}>
      <Card className={`${adDimensions[size]} flex items-center justify-center bg-muted/30 border-dashed`}>
        <span className="text-xs text-muted-foreground">Ad Space ({position})</span>
      </Card>
    </div>
  );
};

// Ad placement guidelines for future implementation:
// 
// COMPLIANT PLACEMENT ZONES:
// 1. Header: Below navigation (728x90 leaderboard) - 50px from primary CTA
// 2. Sidebar: Right side on desktop (300x250 or 160x600)
// 3. In-Content: Between paragraphs in blog posts (responsive or 336x280)
// 4. Footer: Above footer content (728x90 leaderboard)
//
// IMPORTANT ADSENSE RULES:
// - Minimum 150px from primary action buttons (Try Now, Check Text, etc.)
// - No more than 3 ad units per page
// - Must not push content below the fold
// - Cannot be placed in sticky headers/footers
// - Must have clear separation from content
// - No accidental clicks encouraged
//
// RECOMMENDED PLACEMENTS BY PAGE:
// - Homepage: Header + Sidebar
// - Blog Posts: In-Content (after 2nd paragraph) + Sidebar
// - Tool Pages (AI Checker/Humanizer): Sidebar only (after results)
// - About/Contact: Footer only
