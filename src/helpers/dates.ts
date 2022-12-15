export const getMonthLongName = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'long' });
};

export const getYear = (date: Date): string => {
  return date.toLocaleDateString('en-US', { year: 'numeric' });
};

export const monthDiff = (to: Date): number => {
  let months;
  const currentDate = new Date();
  months = (to.getFullYear() - currentDate.getFullYear()) * 12;
  months -= currentDate.getMonth();
  months += to.getMonth();
  return months <= 0 ? 0 : months;
};
