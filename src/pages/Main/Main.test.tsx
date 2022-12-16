import { getByRole, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Main from './Main';
import { RecoilRoot } from 'recoil';

const renderMain = () => {
  return render(
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </ThemeProvider>
  );
};

describe('Main Component', () => {
  it('Should render Main component correctly', () => {
    const { getByRole } = renderMain();

    expect(
      getByRole('heading', { name: /let's plan your saving goal\./i })
    ).toBeInTheDocument();
  });
});
