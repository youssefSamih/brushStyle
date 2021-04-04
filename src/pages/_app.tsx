import { AppProps } from 'next/app';
import { Router } from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', () => nProgress.start());

Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
