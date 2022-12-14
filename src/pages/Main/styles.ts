import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CallToAction = styled.h5`
  font-size: ${(props) => props.theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.title.primary};
  line-height: 24px;
  font-weight: 400;

  span {
    font-weight: 600;
  }
`;
