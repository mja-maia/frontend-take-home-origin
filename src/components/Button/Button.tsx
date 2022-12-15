import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  onChange?: () => void;
};

export default function MonthlyAmout({ children }: Props): JSX.Element {
  return <Container>{children}</Container>;
}
