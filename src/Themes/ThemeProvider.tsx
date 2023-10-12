// Import necessary modules
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Define the type for the theme prop
type ThemeProps = {
  theme: Theme; // Assuming Theme is the type for your theme object
};

// Define the component with the theme prop using React.FC
const ThemeProvider: React.FC<ThemeProps> = ({ theme, children }) => {
  // Use the StyledThemeProvider from styled-components, passing the theme prop
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
