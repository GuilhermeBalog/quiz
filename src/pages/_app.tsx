import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import { theme } from "../../db.json";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
