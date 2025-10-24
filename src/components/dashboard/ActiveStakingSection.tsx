import { Link2, Share2, Eye, Info } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MetricCard } from './MetricCard';
import type { ActiveStaking } from '../../types/schema';
import { formatBalance, formatTimeAgo } from '../../utils/formatters';

interface ActiveStakingSectionProps {
  activeStaking: ActiveStaking;
}

export function ActiveStakingSection({ activeStaking }: ActiveStakingSectionProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="heading-lg">Your active stakings</h2>
      </div>

      {/* Main Card */}
      <Card className="bg-background-card border-border-primary">
        <CardHeader className="pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="body-sm text-text-muted">Last Update - {formatTimeAgo(activeStaking.lastUpdateMinutes)}</span>
                <Info size={16} className="text-text-muted" />
              </div>
              <h3 className="heading-md">Stake Avalance ({activeStaking.asset})</h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="ghost" size="sm" className="text-accent-primary">
                <Link2 size={16} className="mr-1" />
                Link
              </Button>
              <Button variant="ghost" size="sm" className="text-accent-primary">
                <Share2 size={16} className="mr-1" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="text-accent-primary">
                <Eye size={16} className="mr-1" />
                View Profile
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="body-sm text-text-muted mb-2">Current Reward Balance, {activeStaking.asset}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-2xl md:text-4xl font-bold text-text-primary">{formatBalance(activeStaking.currentBalance)}</span>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-accent-primary hover:bg-accent-primary/90 text-white">
                  Upgrade
                </Button>
                <Button variant="outline" className="border-border-secondary text-text-secondary hover:text-text-primary">
                  Unstake
                </Button>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeStaking.metrics.map((metric) => (
              <MetricCard key={metric.category} metric={metric} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}