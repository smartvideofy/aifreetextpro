import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, FileText, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface AnalysisHistoryItem {
  id: string;
  text_sample: string;
  result: any;
  word_count: number;
  created_at: string;
}

interface HumanizationHistoryItem {
  id: string;
  original_text: string;
  humanized_text: string;
  settings: any;
  word_count: number;
  created_at: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, profile } = useAuth();
  const [analysisHistory, setAnalysisHistory] = useState<AnalysisHistoryItem[]>([]);
  const [humanizationHistory, setHumanizationHistory] = useState<HumanizationHistoryItem[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchHistory();
    }
  }, [isAuthenticated]);

  const fetchHistory = async () => {
    setLoadingHistory(true);

    const [analysisRes, humanizationRes] = await Promise.all([
      supabase
        .from('analysis_history')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20),
      supabase
        .from('humanization_history')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)
    ]);

    if (analysisRes.data) setAnalysisHistory(analysisRes.data);
    if (humanizationRes.data) setHumanizationHistory(humanizationRes.data);

    setLoadingHistory(false);
  };

  const deleteAnalysis = async (id: string) => {
    const { error } = await supabase
      .from('analysis_history')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete analysis');
    } else {
      toast.success('Analysis deleted');
      setAnalysisHistory(prev => prev.filter(item => item.id !== id));
    }
  };

  const deleteHumanization = async (id: string) => {
    const { error } = await supabase
      .from('humanization_history')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete humanization');
    } else {
      toast.success('Humanization deleted');
      setHumanizationHistory(prev => prev.filter(item => item.id !== id));
    }
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | AI Detection & Humanization Tools</title>
        <meta name="description" content="View your AI detection and text humanization history, manage saved analyses, and track your usage." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {profile?.email}
            {profile && (
              <Badge variant={profile.subscription_tier === 'premium' ? 'default' : 'secondary'} className="ml-2">
                {profile.subscription_tier}
              </Badge>
            )}
          </p>
        </div>

        <Tabs defaultValue="analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="analysis">AI Checks ({analysisHistory.length})</TabsTrigger>
            <TabsTrigger value="humanization">Humanizations ({humanizationHistory.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="mt-6">
            {loadingHistory ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              </div>
            ) : analysisHistory.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No analysis history yet</p>
                  <Button onClick={() => navigate('/ai-checker')} className="mt-4">
                    Start Checking
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {analysisHistory.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">
                            AI Probability: {Math.round(item.result.aiProbability * 100)}%
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3" />
                            {format(new Date(item.created_at), 'PPp')}
                            <span>• {item.word_count} words</span>
                          </CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteAnalysis(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.text_sample}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="humanization" className="mt-6">
            {loadingHistory ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              </div>
            ) : humanizationHistory.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No humanization history yet</p>
                  <Button onClick={() => navigate('/humanizer')} className="mt-4">
                    Start Humanizing
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {humanizationHistory.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-base">
                            {item.settings.style || 'Professional'} Style
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3" />
                            {format(new Date(item.created_at), 'PPp')}
                            <span>• {item.word_count} words</span>
                          </CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteHumanization(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.original_text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
