import Head from "next/head";

// material-ui
import { StylesProvider, createGenerateClassName } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

// third-party
import { CacheProvider } from "@emotion/react";

// project-import
import createEmotionCache from 'createEmotionCache';
import theme from 'theme';
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StylesProvider>
  );
}

export default MyApp;
