import Amount from './Amount';
import ReachDate from './ReachDate';
import { Container } from './styles';

export default function SimulationFields(): JSX.Element {
  return (
    <Container>
      <Amount />
      <ReachDate />
    </Container>
  );
}
