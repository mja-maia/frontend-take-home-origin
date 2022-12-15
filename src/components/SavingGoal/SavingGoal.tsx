import { Container } from './styles';

import SimulationType from 'components/SimulationType';
import SimulationFields from 'components/SimulationFields';

export default function SavingGoal(): JSX.Element {
  return (
    <Container>
      <SimulationType />
      <SimulationFields />
    </Container>
  );
}
