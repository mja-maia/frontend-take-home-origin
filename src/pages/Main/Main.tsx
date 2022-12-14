import Header from 'components/Header';
import SavingGoal from 'components/SavingGoal';
import { Container, CallToAction } from './styles';

export default function Main(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <CallToAction>
          Let&apos;s plan your <span>saving goal.</span>
        </CallToAction>
        <SavingGoal />
      </Container>
    </>
  );
}
