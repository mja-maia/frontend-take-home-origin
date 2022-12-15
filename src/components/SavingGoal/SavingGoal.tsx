import { Actions, Container } from './styles';

import SimulationType from 'components/SimulationType';
import SimulationFields from 'components/SimulationFields';
import MonthlyAmout from 'components/MonthlyAmout';
import Button from 'components/Button';

export default function SavingGoal(): JSX.Element {
  return (
    <Container>
      <SimulationType />
      <SimulationFields />
      <MonthlyAmout />
      <Actions>
        <Button>Confirm</Button>
      </Actions>
    </Container>
  );
}
