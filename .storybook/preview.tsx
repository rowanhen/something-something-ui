import { Preview } from "@storybook/react";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../src/theme";

const GlobalStyle = createGlobalStyle`
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
  }
`;

const withThemeProvider = (Story, context) => {
  const isDark = useDarkMode();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  );
};

const decorators = [withThemeProvider];

const preview: Preview = {
  decorators,
};

export default preview;
