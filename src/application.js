/*
https://github.com/react95-io/React95/tree/master/src/common/themes
import theme from "react95/dist/themes/candy";

//import { getAllPokemons } from "./pokeapi";

//import PokemonModal from './components/PokemonModal';
//import AboutModal from './components/AboutModal';
//import Menu from './components/Menu';
//import Pokemon from './components/Pokemon';
//import AboutModalButton from './components/AboutModalButton';
//import PokemonModalButton from './components/PokemonModalButton';
//import { useInput, useBoolean } from "react-hanger";
*/

//libs
import React, { useEffect } from "react";
import { styleReset, Hourglass } from "react95";

//style
import "./index.css";
import theme from "./Themes/testtheme.ts";
import { createGlobalStyle, ThemeProvider } from "styled-components";
//fonts
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

//components
import DesktopManager from "./Desktop/DesktopManager";
import StartBarManager from "./Desktop/startbarmanager";
import { startupSound } from "./utils";
//import DataService from "./DataServicee";
//import DataContext from "./dataContext";

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
function Application() {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StartBarManager />
        <div className="desktop">
          <DesktopManager />
        </div>
      </ThemeProvider>
    </div>
  );
}
export default Application;
