import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import mediaQueries from 'helpers/mediaQueries';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${mediaQueries.phone} {
    margin-bottom: 16px;
  }
`;

export const Label = styled.div`
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 4px;
  padding-left: 14px;
  max-width: 272px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mediaQueries.phone} {
    max-width: 100%;
    justify-content: flex-start;
  }
`;

export const Input = styled(NumericFormat)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.sizes.title};
  font-family: 'Rubik', sans-serif;
  outline: none;
  border: none;
  max-width: calc(100% - 24px);
  height: 100%;
  padding: 0 10px;

  @media ${mediaQueries.phone} {
    width: 100%;
  }
`;
