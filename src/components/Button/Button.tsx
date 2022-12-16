import { Container } from './styles';

type Props = {
  children: string;
  onChange?: () => void;
};

export default function MonthlyAmout({ children }: Props): JSX.Element {
  return <Container>{children}</Container>;
}
