// String formatting functions

export const formatRewardRate = (rate: number): string => {
  return `${rate.toFixed(2)}%`;
};

export const formatBalance = (balance: number): string => {
  return balance.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 6 });
};

export const formatCurrency = (amount: number): string => {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const formatTimeAgo = (minutes: number): string => {
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

export const formatDuration = (months: number): string => {
  return `${months} month${months > 1 ? 's' : ''}`;
};