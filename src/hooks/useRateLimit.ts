import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface RateLimitStatus {
  remaining: number;
  limit: number;
  isLimited: boolean;
  resetTime: Date | null;
}

const LIMITS = {
  ai_check: { free: 5, premium: -1 }, // -1 means unlimited
  humanize: { free: 3, premium: -1 }
};

export const useRateLimit = (actionType: 'ai_check' | 'humanize') => {
  const { isAuthenticated, isPremium } = useAuth();
  const [status, setStatus] = useState<RateLimitStatus>({
    remaining: LIMITS[actionType].free,
    limit: LIMITS[actionType].free,
    isLimited: false,
    resetTime: null
  });
  const [loading, setLoading] = useState(true);

  const checkRateLimit = async () => {
    setLoading(true);

    // Premium users have unlimited access
    if (isPremium) {
      setStatus({
        remaining: -1,
        limit: -1,
        isLimited: false,
        resetTime: null
      });
      setLoading(false);
      return;
    }

    const limit = LIMITS[actionType].free;
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    let query = supabase
      .from('usage_logs')
      .select('*', { count: 'exact' })
      .eq('action_type', actionType)
      .gte('created_at', startOfDay.toISOString());

    if (isAuthenticated) {
      query = query.not('user_id', 'is', null);
    } else {
      // For anonymous users, we'd need IP tracking
      // For now, just use a simple limit
      query = query.is('user_id', null);
    }

    const { count, error } = await query;

    if (error) {
      console.error('Error checking rate limit:', error);
      setLoading(false);
      return;
    }

    const used = count || 0;
    const remaining = Math.max(0, limit - used);
    const isLimited = remaining === 0;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    setStatus({
      remaining,
      limit,
      isLimited,
      resetTime: tomorrow
    });
    setLoading(false);
  };

  const logUsage = async (wordCount: number) => {
    const { error } = await supabase
      .from('usage_logs')
      .insert({
        action_type: actionType,
        word_count: wordCount,
        ip_address: null // We'd need a backend endpoint to get real IP
      });

    if (error) {
      console.error('Error logging usage:', error);
    }

    // Refresh the rate limit status
    await checkRateLimit();
  };

  useEffect(() => {
    checkRateLimit();
  }, [isAuthenticated, isPremium, actionType]);

  return {
    ...status,
    loading,
    logUsage,
    refresh: checkRateLimit
  };
};
