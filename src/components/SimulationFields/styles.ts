import mediaQueries from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 28px;

  display: flex;
  justify-content: space-between;

  @media ${mediaQueries.phone} {
    flex-direction: column;
  }
`;
