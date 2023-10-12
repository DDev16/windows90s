import React, { useState } from "react";
import "../index.css";
import DesktopIcons from "./DesktopIcons";
import MyComputerWindow from "./Windows/mycomputerwindow";
import UpdatesWindow from "./Windows/Updates/Updateswindow";
import AboutMeWindow from "./Windows/AboutMe/index.js";
import TrashWindow from "./Windows/Trash/index.js";
import PhotoGalleryWindow from "./Windows/photoupload/index.js";
import SnakeGameWindow from "./Programs/SnakeGame/snakegamewindow";
import startWebamp from "./Programs/WebAmp/startWebamp";
import Player from "./Programs/WebAmp/Player";
import BeakBotWindow from "./Programs/BeakBot";
//import { StoreContext } from "../utils/store";
//import { Button, List, ListItem, Divider } from "react95";
//import ClickAwayListener from "react-click-away-listener";
//import VisibilitySensor from "react-visibility-sensor";

function DesktopManager() {
  const [windowStates, setWindowStates] = useState({
    myComputer: false,
    paint: true
  });

  const [activeWindow, setActiveWindow] = useState("");

  const updateWindowState = (windowName, isOpen) => {
    return setWindowStates({ ...windowStates, [windowName]: isOpen });
  };

  const handleClick = (windowName, isOpen) => {
    // Your implementation logic here
    // For example, you can update the window state
    updateWindowState(windowName, isOpen);
  };

  // const _handleDoubleClick = () => {
  //   openPokemonModal();
  // };

  //const _handlekeyDown = (e) => {
  //  if (e.key === "Enter") {
  //     openPokemonModal();
  //   }
  // };

  return (
    <div tabIndex="0" style={{ display: "flex-wrap" }}>
      <DesktopIcons handleClick={updateWindowState} />,
      <MyComputerWindow
        isOpen={windowStates.myComputer}
        onCloseWindow={() => updateWindowState("myComputer", false)}
        isActive={activeWindow === "myComputer"}
        onFocusWindow={() => setActiveWindow("myComputer")}
      />
      <UpdatesWindow
        isOpen={windowStates.Updates2}
        onCloseWindow={() => updateWindowState("Updates2", false)}
        isActive={activeWindow === "Updates2"}
        onFocusWindow={() => setActiveWindow("Updates2")}
      />
      <TrashWindow
        isOpen={windowStates.Trash}
        onCloseWindow={() => updateWindowState("Trash", false)}
        isActive={activeWindow === "Trash"}
        onFocusWindow={() => setActiveWindow("Trash")}
      />
      <AboutMeWindow
        isOpen={windowStates.aboutMe}
        onCloseWindow={() => updateWindowState("aboutMe", false)}
        isActive={activeWindow === "aboutMe"}
        onFocusWindow={() => setActiveWindow("aboutMe")}
      />
      <BeakBotWindow
        isOpen={windowStates.beakBot}
        onCloseWindow={() => updateWindowState("beakBot", false)}
        isActive={activeWindow === "beakBot"}
        onFocusWindow={() => setActiveWindow("beakBot")}
      />
      <Player
        handleClick={handleClick}
        isOpen={windowStates.startWebamp}
        onClick={() => startWebamp()} // Use the startWebamp function in the onClick handler
        onCloseWindow={() => updateWindowState("Player", false)}
        isActive={activeWindow === "Player"}
        onFocusWindow={() => setActiveWindow("Player")}
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
    </div>
  );
}

export default DesktopManager;
