// Mock data for the staking dashboard

import { StakingAssetType, TrendDirection, MetricCategory } from '../types/enums';

export const mockRootProps = {
  user: {
    username: "afolabi" as const,
    displayName: "Afolabi hameed" as const,
    avatarUrl: "https://i.pravatar.cc/150?img=12" as const,
    isPro: true
  },
  topStakingAssets: [
    {
      id: "eth-1" as const,
      type: StakingAssetType.ETHEREUM,
      name: "Ethereum" as const,
      rewardRate: 36.23,
      trendDirection: TrendDirection.UP,
      trendPercentage: 6.25,
      chartData: [
        { value: 2400, timestamp: 1704067200000 },
        { value: 2650, timestamp: 1704153600000 },
        { value: 2768, timestamp: 1704240000000 },
        { value: 2500, timestamp: 1704326400000 },
        { value: 2650, timestamp: 1704412800000 }
      ],
      iconColor: "#627EEA" as const
    },
    {
      id: "bnb-1" as const,
      type: StakingAssetType.BNB_CHAIN,
      name: "BNB chain" as const,
      rewardRate: 12.23,
      trendDirection: TrendDirection.DOWN,
      trendPercentage: 0.26,
      chartData: [
        { value: 2200, timestamp: 1704067200000 },
        { value: 2500, timestamp: 1704153600000 },
        { value: 2768, timestamp: 1704240000000 },
        { value: 2400, timestamp: 1704326400000 },
        { value: 2300, timestamp: 1704412800000 }
      ],
      iconColor: "#F3BA2F" as const
    },
    {
      id: "poly-1" as const,
      type: StakingAssetType.POLYGON,
      name: "Polygon" as const,
      rewardRate: 6.29,
      trendDirection: TrendDirection.DOWN,
      trendPercentage: 6.25,
      chartData: [
        { value: 1200, timestamp: 1704067200000 },
        { value: 900, timestamp: 1704153600000 },
        { value: 850, timestamp: 1704240000000 },
        { value: 1000, timestamp: 1704326400000 },
        { value: 897, timestamp: 1704412800000 }
      ],
      iconColor: "#8247E5" as const
    }
  ],
  activeStaking: {
    asset: "AVAX" as const,
    lastUpdateMinutes: 45,
    currentBalance: 31.39686,
    metrics: [
      {
        category: MetricCategory.MOMENTUM,
        title: "Momentum" as const,
        subtitle: "Growth dynamics" as const
      },
      {
        category: MetricCategory.GENERAL,
        title: "General" as const,
        subtitle: "Overview" as const
      },
      {
        category: MetricCategory.RISK,
        title: "Risk" as const,
        subtitle: "Risk management" as const
      },
      {
        category: MetricCategory.REWARD,
        title: "Reward" as const,
        subtitle: "Expected Profit" as const
      }
    ]
  },
  investmentPeriod: {
    totalMonths: 6,
    contributionMonths: 4
  }
}
