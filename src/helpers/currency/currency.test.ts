import { formatCurrency } from './currency';

describe('Currency Formatter', () => {
  it('Should format 5000 to $5,000', () => {
    const mockInputValue = 5000;
    const mockFormattedValue = '$5,000';
    expect(formatCurrency(mockInputValue)).toBe(mockFormattedValue);
  });

  it('Should format 8050.3 to $8,050.30', () => {
    const mockInputValue = 8050.3;
    const mockFormattedValue = '$8,050.3';
    expect(formatCurrency(mockInputValue)).toBe(mockFormattedValue);
  });
});
