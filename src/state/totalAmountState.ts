import { atom } from 'recoil';

const totalAmountState = atom({
  key: 'totalAmount',
  default: '25000',
});

export default totalAmountState;
