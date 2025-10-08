import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

interface UpgradePromptProps {
  open: boolean;
  onClose: () => void;
  feature?: string;
}

const UpgradePrompt = ({ open, onClose, feature }: UpgradePromptProps) => {
  const premiumFeatures = [
    'Unlimited AI Detection & Humanization',
    'Download as PDF, DOCX & TXT',
    'Analysis & Humanization History',
    'Advanced Humanization Options',
    'Priority Processing',
    'No Daily Limits',
    'Ad-Free Experience',
    'Email Support'
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <DialogTitle className="text-2xl">Upgrade to Premium</DialogTitle>
          </div>
          <DialogDescription>
            {feature 
              ? `${feature} is a premium feature. Unlock it and more with a premium account.`
              : 'Unlock all premium features and enjoy unlimited access to our AI tools.'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 my-4">
          <div className="bg-secondary/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-3">Premium includes:</p>
            <ul className="space-y-2">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Maybe Later
          </Button>
          <Button asChild className="flex-1">
            <Link to="/auth">Get Started Free</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradePrompt;
