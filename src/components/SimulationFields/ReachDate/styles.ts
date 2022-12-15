import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.div`
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 4px;
  padding: 20px;
  width: 192px;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Month = styled.div`
  font-size: ${({ theme }) => theme.sizes.description};
  color: ${({ theme }) => theme.colors.text.label};
  font-weight: 600;
`;

export const Year = styled.div`
  font-size: ${({ theme }) => theme.sizes.description};
  color: ${({ theme }) => theme.colors.text.information};
  margin-top: 5px;
`;
