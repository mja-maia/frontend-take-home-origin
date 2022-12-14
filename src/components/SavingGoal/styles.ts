import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  height: 511px;
  width: 560px;
  padding: 40px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.background.card};
`;
