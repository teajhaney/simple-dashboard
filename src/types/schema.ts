// Type definitions for the staking dashboard

import type { StakingAssetType, TrendDirection, MetricCategory } from './enums';

// Props types
export interface DashboardProps {
  user: UserProfile;
  topStakingAssets: StakingAsset[];
  activeStaking: ActiveStaking;
  investmentPeriod: InvestmentPeriod;
}

export interface UserProfile {
  username: string;
  displayName: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface ChartDataPoint {
  value: number;
  timestamp: number;
}

export interface StakingAsset {
  id: string;
  type: StakingAssetType;
  name: string;
  rewardRate: number;
  trendDirection: TrendDirection;
  trendPercentage: number;
  chartData: ChartDataPoint[];
  iconColor: string;
}

export interface MetricInfo {
  category: MetricCategory;
  title: string;
  subtitle: string;
}

export interface ActiveStaking {
  asset: string;
  lastUpdateMinutes: number;
  currentBalance: number;
  metrics: MetricInfo[];
}

export interface InvestmentPeriod {
  totalMonths: number;
  contributionMonths: number;
}