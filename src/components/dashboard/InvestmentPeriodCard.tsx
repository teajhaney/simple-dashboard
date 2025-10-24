import { Calendar, Clock, HelpCircle, Shuffle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import type { InvestmentPeriod } from '../../types/schema';
import { formatDuration } from '../../utils/formatters';

interface InvestmentPeriodCardProps {
  investmentPeriod: InvestmentPeriod;
}

export function InvestmentPeriodCard({ investmentPeriod }: InvestmentPeriodCardProps) {
  const percentage = (investmentPeriod.contributionMonths / investmentPeriod.totalMonths) * 100;

  return (
    <Card className="bg-background-card border-border-primary">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="heading-md">Investment Period</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <Calendar size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <Clock size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <HelpCircle size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
              <Shuffle size={18} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="body-sm text-text-muted">Contribution Period</span>
            <span className="body-sm text-text-primary font-medium">
              {formatDuration(investmentPeriod.totalMonths)}
            </span>
          </div>
          <div className="relative">
            <Slider 
              value={[percentage]} 
              max={100}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-text-muted">
              <span>0</span>
              <div className="absolute left-1/2 -translate-x-1/2 -top-8">
                <div className="bg-accent-primary text-white px-2 py-1 rounded text-xs font-medium">
                  {formatDuration(investmentPeriod.contributionMonths)}
                </div>
              </div>
              <span>{formatDuration(investmentPeriod.totalMonths)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}