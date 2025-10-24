import { ArrowUp, ArrowDown } from 'lucide-react';
import { TrendDirection } from '../../types/enums';

interface TrendIndicatorProps {
  direction: TrendDirection;
  percentage: number;
}

export function TrendIndicator({ direction, percentage }: TrendIndicatorProps) {
  const isUp = direction === TrendDirection.UP;
  
  return (
    <div className={`flex items-center gap-1 text-xs font-medium ${isUp ? 'text-success' : 'text-error'}`}>
      {isUp ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
      <span>{percentage.toFixed(2)}%</span>
    </div>
  );
}