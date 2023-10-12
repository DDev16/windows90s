import React from "react";
import myComputerIcon from "../Icons/computer.png";
import "../index.css";
import DesktopIcon from "./desktopicon";
import Notepad from "../Icons/Notepad.ico";
import SmileyFace from "../Icons/Smileyface.ico";
import Diskette from "../Icons/Diskette.ico";
import ControlsFolder from "../Icons/ControlsFolder.ico";
import bookdisk from "../Icons/BookDisc.ico";
import PropTypes from "prop-types";

DesktopIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  maxIconsPerColumn: PropTypes.number.isRequired
};

function DesktopIcons({ handleClick, maxIconsPerColumn }) {
  return (
    <div className="grid-container">
      {content.map((icon, index) => (
        <DesktopIcon
          handleClick={() => handleClick(icon.windowName, true)}
          maxIconsPerColumn={maxIconsPerColumn}
          id={icon.id}
          src={icon.src}
          alt={icon.alt}
          text={icon.text}
          className="icon"
          key={index}
        />
      ))}
    </div>
  );
}
let content = [
  {
    id: "UPDATES",
    src: myComputerIcon,
    alt: "MyComputer Icon",
    text: "UPDATES",
    windowName: "Updates2"
  },
  {
    id: "Beakosm.net",
    src: myComputerIcon,
    alt: "MyComputer Icon",
    text: "Beakosm.net",
    windowName: "myComputer"
  },
  {
    id: "Photo Gallery",
    src: SmileyFace,
    alt: "Photo Gallery",
    text: "Photo Gallery",
    windowName: "photoGallery"
  },
  {
    id: "My Pants",
    src: Notepad,
    alt: "About Me",
    text: "My Pants",
    windowName: "aboutMe"
  },
  {
    id: "Homies and Bros",
    src: ControlsFolder,
    alt: "About Me",
    text: "Homies and Bros",
    windowName: "aboutMe"
  },
  {
    id: "Snake Game",
    src: SmileyFace,
    alt: "Snake Game",
    text: "Snake Game",
    windowName: "snakeGame"
  },
  {
    id: "Music-broken atm",
    src: bookdisk,
    alt: "Webamp",
    text: "Music-broken atm",
    windowName: "startWebamp"
  },
  {
    id: "Trash",
    src: Diskette,
    alt: "Trash",
    text: "Trash",
    windowName: "Trash"
  },
  {
    id: "broken",
    src: Diskette,
    alt: "beakBot",
    text: "broken",
    windowName: "beakBot"
  }
];
export default DesktopIcons;
