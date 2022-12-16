import styled from 'styled-components';
import mediaQueries from 'helpers/mediaQueries';

export const Container = styled.div`
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  width: 560px;
  padding: 40px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.background.card};
  border: none;

  @media ${mediaQueries.phone} {
    padding: 40px 24px;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
`;
