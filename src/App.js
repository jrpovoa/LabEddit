import { StylesProvider, ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./constants/theme";
import Router from "./routes/Router";

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
