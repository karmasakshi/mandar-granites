import '@page-styles/global.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FunctionComponent, ReactElement } from 'react';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps): ReactElement => (

  <>

    <Head>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
    </Head>

    <Component {...pageProps} />

  </>

);

export default MyApp;
