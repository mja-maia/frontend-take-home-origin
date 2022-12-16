import { getMonthLongName, getYear, monthDiff } from './dates';

describe('Dates Helper', () => {
  it('Should calculate the difference in months from todays date to a specific date', () => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2022, 11, 1));

    expect(monthDiff(new Date(2023, 11, 1))).toBe(12);
  });

  it('Should return the year of a specified date in long format', () => {
    expect(getYear(new Date(2023, 11, 1))).toBe('2023');
  });

  it('Should return the month of a specified date in long format', () => {
    expect(getMonthLongName(new Date(2023, 11, 1))).toBe('December');
  });
});
