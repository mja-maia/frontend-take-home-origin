import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { getMonthLongName, getYear } from 'helpers/dates';
import { useCallback, useEffect, useState } from 'react';
import { InputWrapper, Label, Container, Month, Year, Dates } from './styles';

export default function ReachDate(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDate = useCallback(
    (operator: 'increase' | 'decrease') => {
      const nextDate = new Date(selectedDate);
      nextDate.setMonth(
        operator === 'increase'
          ? nextDate.getMonth() + 1
          : nextDate.getMonth() - 1
      );

      if (nextDate.setHours(0, 0, 0) >= new Date().setHours(0, 0, 0)) {
        setSelectedDate(nextDate);
      }
    },
    [selectedDate]
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
