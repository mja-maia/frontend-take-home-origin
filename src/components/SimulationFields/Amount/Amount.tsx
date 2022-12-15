import { ReactComponent as MoneyIcon } from 'assets/icons/money-icon.svg';
import { useState } from 'react';
import { Input, InputWrapper, Label, Container } from './styles';

export default function Amount(): JSX.Element {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Label>Total amount</Label>
      <InputWrapper>
        <MoneyIcon />
        <Input
          type="text"
          value={value}
          thousandSeparator
          onChange={(e) => setValue(e.target.value)}
        />
      </InputWrapper>
    </Container>
  );
}
