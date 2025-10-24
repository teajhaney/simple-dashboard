import { Info } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { StakingAssetCard } from './StakingAssetCard';
import { ActiveStakingSection } from './ActiveStakingSection';
import { LiquidStakingCard } from './LiquidStakingCard';
// import { InvestmentPeriodCard } from './InvestmentPeriodCard';
import { Badge } from '@/components/ui/badge';
import type { DashboardProps } from '../../types/schema';

export function Dashboard({
  user,
  topStakingAssets,
  activeStaking,
}: //   investmentPeriod,
DashboardProps) {
  return (
    <div className="text-white flex h-screen overflow-hidden bg-background-primary">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <Header user={user} />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 lg:p-8 mt-16 lg:mt-0">
            {/* Left Column */}
            <div className="flex-1 space-y-6 min-w-0">
              {/* Top Staking Assets Section */}
              <div>
                <div className="flex flex-col  justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      {' '}
                      <div className="flex items-center gap-2">
                        <span className="body-sm text-text-muted hidden md:inline">
                          Recommend coins for 24 hours
                        </span>
                        <Info size={16} className="text-text-muted" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-accent-primary/10 text-accent-primary"
                      >
                        3 Assets
                      </Badge>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 body-sm text-text-muted">
                      <Badge
                        variant="secondary"
                        className="bg-accent-primary/10 text-accent-primary py-1 px-2 "
                      >
                        24 hr
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-accent-primary/10 text-accent-primary py-1 px-2 "
                      >
                        Price of stake
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-accent-primary/10 text-accent-primary py-1 px-2 "
                      >
                        Desc
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <h2 className="heading-lg">Top Staking Assets</h2>
                  </div>
                </div>

                {/* Asset Cards Grid */}
                <div className="grid grid-cols-1   xl:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-6">
                  {topStakingAssets.map(asset => (
                    <StakingAssetCard key={asset.id} asset={asset} />
                  ))}
                  <LiquidStakingCard />
                </div>
              </div>

              {/* Active Staking Section */}
              <ActiveStakingSection activeStaking={activeStaking} />
            </div>

            {/* Right Sidebar */}
            {/* <div className="w-full lg:w-80 space-y-6 shrink-0">
              <LiquidStakingCard />
              <InvestmentPeriodCard investmentPeriod={investmentPeriod} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
