import { Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { ChartDataPoint } from '../../types/schema';

interface MiniLineChartProps {
  data: ChartDataPoint[];
  color: string;
  showPoints?: boolean;
}

export function MiniLineChart({ data, color, showPoints = true }: MiniLineChartProps) {
  const chartConfig = {
    value: {
      label: 'Value',
      color: color,
    },
  };

  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <LineChart data={data}>
        <XAxis dataKey="timestamp" hide />
        <YAxis hide domain={['auto', 'auto']} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={showPoints ? { fill: color, r: 4 } : false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ChartContainer>
  );
}