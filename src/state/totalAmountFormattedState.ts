import { formatCurrency } from 'helpers/currency';
import { selector } from 'recoil';
import totalAmountState from './totalAmountState';

const totalAmountFormattedState = selector({
  key: 'totalAmountFormattedState',
  get: ({ get }) => {
    const totalAmount = get(totalAmountState);

    console.log('total amount', totalAmount);

    return formatCurrency(Number(totalAmount));
  },
});

export default totalAmountFormattedState;
