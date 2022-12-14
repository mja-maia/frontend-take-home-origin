import Main from 'pages/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyle';
import theme from 'styles/theme';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
}
