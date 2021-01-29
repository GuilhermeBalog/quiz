import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { theme, bg, title, description } from '../../db.json';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content={description} />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={bg} />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://guilhermebalog.ga" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={bg} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={bg} />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
