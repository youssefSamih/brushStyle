import 'theme/fonts.css';
import theme from 'theme/config';
import GlobalStyle from 'theme/global-style';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from 'lib/auth';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
