import { atom } from 'recoil';

const reachDateState = atom({
  key: 'reachDate',
  default: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
});

export default reachDateState;
