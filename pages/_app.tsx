import type { AppProps } from 'next/app';
import Head from 'next/head';
import { IntlProvider } from 'Providers';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <IntlProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
