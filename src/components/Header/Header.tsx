import { ReactComponent as Logo } from 'assets/logo.svg';
import { Container } from './styles';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
