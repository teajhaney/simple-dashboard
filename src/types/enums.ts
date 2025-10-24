// Enums for the staking dashboard (using const objects instead of enums for erasableSyntaxOnly)

export const StakingAssetType = {
  ETHEREUM: "ethereum",
  BNB_CHAIN: "bnb_chain",
  POLYGON: "polygon"
} as const;

export type StakingAssetType = typeof StakingAssetType[keyof typeof StakingAssetType];

export const TrendDirection = {
  UP: "up",
  DOWN: "down"
} as const;

export type TrendDirection = typeof TrendDirection[keyof typeof TrendDirection];

export const MetricCategory = {
  MOMENTUM: "momentum",
  GENERAL: "general",
  RISK: "risk",
  REWARD: "reward"
} as const;

export type MetricCategory = typeof MetricCategory[keyof typeof MetricCategory];

export const TimeFilter = {
  HOUR_24: "24hr",
  WEEK: "week",
  MONTH: "month"
} as const;

export type TimeFilter = typeof TimeFilter[keyof typeof TimeFilter];