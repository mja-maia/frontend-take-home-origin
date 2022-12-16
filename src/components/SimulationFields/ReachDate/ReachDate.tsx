import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { getMonthLongName, getYear } from 'helpers/dates/dates';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import reachDateState from 'state/reachDateState';
import { InputWrapper, Label, Container, Month, Year, Dates } from './styles';

export default function ReachDate(): JSX.Element {
  const [selectedDate, setSelectedDate] = useRecoilState(reachDateState);

  const handleDate = useCallback(
    (operator: 'increase' | 'decrease') => {
      const nextDate = new Date(selectedDate);
      nextDate.setMonth(
        operator === 'increase'
          ? nextDate.getMonth() + 1
          : nextDate.getMonth() - 1
      );

      if (nextDate > new Date()) {
        setSelectedDate(nextDate);
      }
    },
    [selectedDate, setSelectedDate]
  );

  useEffect(() => {
    const handleUserKeyPress = (event: KeyboardEvent) => {
      const { key } = event;

      if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;

      handleDate(key === 'ArrowLeft' ? 'decrease' : 'increase');
    };

    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleDate]);

  return (
    <Container>
      <Label>Reach goal by</Label>
      <InputWrapper>
        <ArrowLeft onClick={() => handleDate('decrease')} />
        <Dates>
          <Month>{getMonthLongName(selectedDate)}</Month>
          <Year>{getYear(selectedDate)}</Year>
        </Dates>
        <ArrowRight onClick={() => handleDate('increase')} />
      </InputWrapper>
    </Container>
  );
}
