import {
  Container,
  Information,
  MonthlySimulation,
  Subtitle,
  Value,
} from './styles';

export default function MonthlyAmout(): JSX.Element {
  return (
    <Container>
      <MonthlySimulation>
        <Subtitle>Monthly amout</Subtitle>
        <Value>$520.83</Value>
      </MonthlySimulation>
      <Information>
        <span>
          You’re planning <b>48 monthly deposits</b> to reach your
          <b> $25,000</b> goal by <b>October 2020</b>.
        </span>
      </Information>
    </Container>
  );
}
