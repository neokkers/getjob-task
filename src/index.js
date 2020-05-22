import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./_redux/store";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./views/utils";
import { selectTheme } from "./_redux/slices/themeSlice";

const Root = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
