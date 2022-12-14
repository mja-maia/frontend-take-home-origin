import { ReactComponent as HouseIcon } from 'assets/icons/buy-a-house.svg';
import { Container, Text, Subtitle, Title } from './styles';

export default function SimulationType(): JSX.Element {
  return (
    <Container>
      <HouseIcon />
      <Text>
        <Title>Buy a house</Title>
        <Subtitle>Saving goal</Subtitle>
      </Text>
    </Container>
  );
}
