//npm packages
import React from "react";
//import React, { useEffect } from "react";
import { styleReset, Hourglass } from "react95";

//Project files
import Taskbar from "./Desktop/Taskbar";
import Desktop from "./Desktop/Desktop";
import DataService from "./DataService";
import DataContext from "./dataContext";

//style
import "./index.css";
import theme from "./Themes/test1";
import { ThemeProvider, createGlobalStyle } from "styled-components";
//fonts
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

//components
//import DesktopManager from "./Desktop/DesktopManager";
//import StartBarManager from "./Desktop/startbarmanager";
//import { startupSound } from "./utils";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const dataService = new DataService();

const App = () => {
  return (
    <DataContext.Provider value={dataService}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Desktop />
        <Taskbar />
      </ThemeProvider>
    </DataContext.Provider>
  );
};

export default App;
