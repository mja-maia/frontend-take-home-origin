import mediaQueries from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid #e9eef2;
  height: 158px;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  font-weight: 400;
`;

export const MonthlySimulation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  padding: 0 30px;
`;

export const Value = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: ${({ theme }) => theme.sizes.banner};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Information = styled.div`
  font-size: ${({ theme }) => theme.sizes.information};
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 0 30px;
  height: 50%;
  display: flex;
  align-items: center;

  @media ${mediaQueries.phone} {
    text-align: center;
  }
`;
