import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

interface RateLimitBadgeProps {
  remaining: number;
  limit: number;
  resetTime: Date | null;
  actionType: 'checks' | 'humanizations';
}

const RateLimitBadge = ({ remaining, limit, resetTime, actionType }: RateLimitBadgeProps) => {
  if (limit === -1) {
    return (
      <Badge variant="default" className="gap-1">
        <span className="text-xs">Unlimited {actionType}</span>
      </Badge>
    );
  }

  const isLow = remaining <= 1;
  
  return (
    <Badge variant={isLow ? 'destructive' : 'secondary'} className="gap-1">
      <Clock className="h-3 w-3" />
      <span className="text-xs">
        {remaining} of {limit} {actionType} remaining today
      </span>
    </Badge>
  );
};

export default RateLimitBadge;
