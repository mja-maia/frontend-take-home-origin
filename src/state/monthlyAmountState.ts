import { formatCurrency } from 'helpers/currency';
import { monthDiff } from 'helpers/dates';
import { selector } from 'recoil';
import reachDateState from './reachDateState';
import totalAmountState from './totalAmountState';

const monthlyAmountState = selector({
  key: 'monthlyAmount',
  get: ({ get }) => {
    const totalAmount = get(totalAmountState);
    const reachDate = get(reachDateState);
    const months = monthDiff(reachDate);

    if (!totalAmount.length) return '$0';

    return formatCurrency(parseFloat(totalAmount.replace(/,/g, '')) / months);
  },
});

export default monthlyAmountState;
