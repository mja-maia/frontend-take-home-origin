import { getMonthLongName, monthDiff } from 'helpers/dates';
import { useRecoilValue } from 'recoil';
import monthlyAmountState from 'state/monthlyAmountState';
import reachDateState from 'state/reachDateState';
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
  const reachDate = useRecoilValue(reachDateState);
  const monthlyAmount = useRecoilValue(monthlyAmountState);

  return (
    <Container>
      <MonthlySimulation>
        <Subtitle>Monthly amout</Subtitle>
        <Value>{monthlyAmount.length ? monthlyAmount : '$0'}</Value>
      </MonthlySimulation>
      <Information>
        <span>
          You’re planning <b>{monthDiff(reachDate)} monthly deposits</b> to
          reach your
          <b> ${totalAmount.length ? totalAmount : 0}</b> goal by{' '}
          <b>
            {getMonthLongName(reachDate)} {reachDate.getFullYear()}
          </b>
          .
        </span>
      </Information>
    </Container>
  );
}
