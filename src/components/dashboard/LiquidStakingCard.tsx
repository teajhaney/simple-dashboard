import { Disc } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function LiquidStakingCard() {
  return (
    <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-accent-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent-primary/20 flex items-center justify-center">
              <Disc className="w-5 h-5 text-accent-primary" />
            </div>
            <span className="heading-sm">Stakeme</span>
          </div>
          <Badge className="bg-accent-primary text-white text-xs">New</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="heading-md mb-3">Liquid Staking Portfolio</h3>
        <p className="body-md text-text-secondary mb-6">
          All in one portfolio that helps you make smarter improvementsinto ethereum liquid staking
        </p>
        <Button className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white mb-3">
          Connect with wallet
        </Button>
        <button className="w-full text-center body-sm text-accent-primary hover:underline">
          Enter a wallet address
        </button>
      </CardContent>
    </Card>
  );
}