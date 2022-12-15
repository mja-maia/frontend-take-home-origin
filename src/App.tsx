import Main from 'pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyle';
import theme from 'styles/theme';
import { RecoilRoot } from 'recoil';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
