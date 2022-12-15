export const getMonthLongName = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long' });
};

export const getYear = (date: Date): string => {
  return date.toLocaleDateString('en-US', { year: 'numeric' });
};
