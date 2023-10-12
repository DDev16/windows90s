import React, { useState, useContext } from "react";
import "../index.css";
import DesktopIcons from "./DesktopIcons";
import MyComputerWindow from "./Windows/mycomputerwindow";
import AboutMeWindow from "./Windows/AboutMe/index.js";
import PhotoGalleryWindow from "./Windows/photoupload/index.js";
import SnakeGameWindow from "./Programs/SnakeGame/snakegamewindow";
//import StartWebampWindow from "./Programs/WebAmp/startWebamp";
import Player from "./Programs/WebAmp/Player";
import { useClippy } from "@react95/clippy";
import DataContext from "../DataContext";

function StartBarManager() {
  const [windowStates, setWindowStates] = useState({
    myComputer: false,
    paint: true
  });

  const [activeWindow, setActiveWindow] = useState("");

  const updateWindowState = (windowName, isOpen) => {
    return setWindowStates({ ...windowStates, [windowName]: isOpen });
  };
  const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
  const { clippy } = useClippy();
  return (
    <>
      <DesktopIcons handleClick={updateWindowState} />,
      <MyComputerWindow
        isOpen={windowStates.myComputer}
        onCloseWindow={() => updateWindowState("myComputer", false)}
        isActive={activeWindow === "myComputer"}
        onFocusWindow={() => setActiveWindow("myComputer")}
      />
      <AboutMeWindow
        isOpen={windowStates.aboutMe}
        onCloseWindow={() => updateWindowState("aboutMe", false)}
        isActive={activeWindow === "aboutMe"}
        onFocusWindow={() => setActiveWindow("aboutMe")}
      />
      <PhotoGalleryWindow
        isOpen={windowStates.photoGallery}
        onCloseWindow={() => updateWindowState("photoGallery", false)}
        isActive={activeWindow === "photoGallery"}
        onFocusWindow={() => setActiveWindow("photoGallery")}
      />
      <SnakeGameWindow
        isOpen={windowStates.snakeGame}
        onCloseWindow={() => updateWindowState("snakeGame", false)}
        isActive={activeWindow === "snakeGame"}
        onFocusWindow={() => setActiveWindow("snakeGame")}
      />
      <Player />
    </>
  );
}

export default StartBarManager;
