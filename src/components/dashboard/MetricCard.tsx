import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent } from '@/components/ui/card';
import type { MetricInfo } from '../../types/schema';

interface MetricCardProps {
  metric: MetricInfo;
}

export function MetricCard({ metric }: MetricCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="bg-background-tertiary border-border-secondary hover:bg-background-card-hover transition-colors">
        <CollapsibleTrigger className="w-full">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="text-left">
                <h4 className="heading-sm mb-1">{metric.title}</h4>
                <p className="body-sm text-text-muted">{metric.subtitle}</p>
              </div>
              <button className="text-text-secondary hover:text-text-primary transition-colors">
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
          </CardContent>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0 px-4 pb-4">
            <div className="text-text-muted body-sm">
              {/* Placeholder for expanded content */}
              <p>Detailed metrics for {metric.title.toLowerCase()} will be displayed here.</p>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}