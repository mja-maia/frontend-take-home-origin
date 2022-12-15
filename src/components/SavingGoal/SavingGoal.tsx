import { Container } from './styles';

import SimulationType from 'components/SimulationType';
import SimulationFields from 'components/SimulationFields';
import MonthlyAmout from 'components/MonthlyAmout';

export default function SavingGoal(): JSX.Element {
  return (
    <Container>
      <SimulationType />
      <SimulationFields />
      <MonthlyAmout />
    </Container>
  );
}
