import mediaQueries from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.buttons.active};
  color: ${({ theme }) => theme.colors.text.light};
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.description};
  margin-top: 32px;
  width: 320px;
  cursor: pointer;

  @media ${mediaQueries.phone} {
    height: 586px;
    padding: 40px 24px;
    width: 100%;
    max-height: 56px;
  }
`;
