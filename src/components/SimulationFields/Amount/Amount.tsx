import { ReactComponent as MoneyIcon } from 'assets/icons/money-icon.svg';
import { useRecoilState } from 'recoil';
import totalAmountState from 'state/totalAmountState';
import { Input, InputWrapper, Label, Container } from './styles';

export default function Amount(): JSX.Element {
  const [amount, setAmount] = useRecoilState(totalAmountState);

  return (
    <Container>
      <Label>Total amount</Label>
      <InputWrapper>
        <MoneyIcon />
        <Input
          type="text"
          name="amount"
          value={amount}
          thousandSeparator
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
        />
      </InputWrapper>
    </Container>
  );
}
