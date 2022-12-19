import { atom } from 'recoil';

const totalAmountState = atom({
  key: 'totalAmount',
  default: '25,000',
});

export default totalAmountState;
