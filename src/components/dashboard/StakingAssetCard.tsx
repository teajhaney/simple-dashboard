import { ExternalLink } from 'lucide-react';
import { Diamond, Bitcoin, Hexagon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendIndicator } from '../common/TrendIndicator';
import { MiniLineChart } from '../common/MiniLineChart';
import type { StakingAsset } from '../../types/schema';
import { StakingAssetType } from '../../types/enums';
import { formatRewardRate, formatCurrency } from '../../utils/formatters';

interface StakingAssetCardProps {
  asset: StakingAsset;
}

const AssetIcon = ({ type, color }: { type: StakingAssetType; color: string }) => {
  const iconProps = { size: 24, style: { color } };
  
  switch (type) {
    case StakingAssetType.ETHEREUM:
      return <Diamond {...iconProps} />;
    case StakingAssetType.BNB_CHAIN:
      return <Bitcoin {...iconProps} />;
    case StakingAssetType.POLYGON:
      return <Hexagon {...iconProps} />;
    default:
      return <Diamond {...iconProps} />;
  }
};

export function StakingAssetCard({ asset }: StakingAssetCardProps) {
  const lastDataPoint = asset.chartData[asset.chartData.length - 1];
  
  return (
    <Card className="bg-background-card border-border-primary hover:bg-background-card-hover transition-colors">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-background-tertiary flex items-center justify-center">
              <AssetIcon type={asset.type} color={asset.iconColor} />
            </div>
            <div>
              <Badge variant="secondary" className="mb-1 text-xs">Proof of stake</Badge>
              <h3 className="heading-sm">{asset.name}</h3>
            </div>
          </div>
          <button className="text-text-secondary hover:text-text-primary transition-colors">
            <ExternalLink size={20} />
          </button>
        </div>

        {/* Reward Rate */}
        <div className="mb-4">
          <p className="body-sm text-text-muted mb-1">Reward Rate</p>
          <div className="flex items-center gap-2">
            <span className="heading-lg">{formatRewardRate(asset.rewardRate)}</span>
            <TrendIndicator 
              direction={asset.trendDirection} 
              percentage={asset.trendPercentage} 
            />
          </div>
        </div>

        {/* Chart */}
        <div className="h-24 mb-2">
          <MiniLineChart 
            data={asset.chartData} 
            color={asset.iconColor}
          />
        </div>

        {/* Last Value */}
        <div className="text-right">
          <span className="body-sm text-text-muted">{formatCurrency(lastDataPoint.value)}</span>
        </div>
      </CardContent>
    </Card>
  );
}