import { useRecoilValue } from 'recoil';
import totalAmountState from 'state/totalAmountState';
import {
  Container,
  Information,
  MonthlySimulation,
  Subtitle,
  Value,
} from './styles';

export default function MonthlyAmout(): JSX.Element {
  const totalAmount = useRecoilValue(totalAmountState);

  return (
    <Container>
      <MonthlySimulation>
        <Subtitle>Monthly amout</Subtitle>
        <Value>$520.83</Value>
      </MonthlySimulation>
      <Information>
        <span>
          You’re planning <b>48 monthly deposits</b> to reach your
          <b> ${totalAmount}</b> goal by <b>October 2020</b>.
        </span>
      </Information>
    </Container>
  );
}
