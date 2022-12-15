export const currencyFormatter = (value: number): string => {
  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   currencyDisplay: 'code',
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0,
  // });

  // const valueFormatted = formatter.format(value);
  // return valueFormatted.replace(/[a-z]{3}/i, '').trim();

  return value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
