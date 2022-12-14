import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  margin-left: 16px;
`;

export const Title = styled.div`
  font-family: 'Rubik', sans-serif;
  font-size: ${({ theme }) => theme.sizes.title};
  font-weight: 500;
`;

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.sizes.description};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.information};
  margin-top: 4px;
`;
