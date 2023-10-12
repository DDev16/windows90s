//npm packages
import React from "react";
import styled from "styled-components";
import "../index.css";

//programs and windows
import { startWebamp } from "./Programs/WebAmp/startWebamp";
import MyComputerWindow from "./Windows/mycomputerwindow";
import AboutMeWindow from "./Windows/AboutMe/index.js";
import PhotoGalleryWindow from "./Windows/photoupload/index.js";
import SnakeGameWindow from "./Programs/SnakeGame/snakegamewindow";

//icons
import myComputerIcon from "../Icons/computer.png";
import DesktopIcon from "./desktopicon";
import Notepad from "../Icons/Notepad.ico";
import SmileyFace from "../Icons/Smileyface.ico";
import Diskette from "../Icons/Diskette.ico";
import ControlsFolder from "../Icons/ControlsFolder.ico";
import bookdisk from "../Icons/BookDisc.ico";

//import DesktopIcons from "./DesktopIcons";

const StyledShorcut = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  align-items: center;
`;

function Shortcuts({ openExplorer }) {
  return (
    <div>
      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={myComputerIcon}
          alt="blank"
          onClick={() => openExplorer()}
        />
        <div>
          <small onClick={() => openExplorer()} style={{ cursor: "pointer" }}>
            Explorer
          </small>
        </div>
      </StyledShorcut>

      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={bookdisk}
          alt="audio"
          onClick={() => startWebamp()}
        />
        <div>
          <small style={{ cursor: "pointer" }} onClick={() => startWebamp()}>
            Media
          </small>
        </div>
      </StyledShorcut>

      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={SmileyFace}
          alt="audio"
          onClick={() => SnakeGameWindow()}
        />
        <div>
          <small
            style={{ cursor: "pointer" }}
            onClick={() => SnakeGameWindow()}
          >
            Snake
          </small>
        </div>
      </StyledShorcut>

      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={Notepad}
          alt="audio"
          onClick={() => MyComputerWindow()}
        />
        <div>
          <small
            style={{ cursor: "pointer" }}
            onClick={() => MyComputerWindow()}
          >
            Snake
          </small>
        </div>
      </StyledShorcut>

      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={Diskette}
          alt="audio"
          onClick={() => PhotoGalleryWindow()}
        />
        <div>
          <small
            style={{ cursor: "pointer" }}
            onClick={() => PhotoGalleryWindow()}
          >
            Snake
          </small>
        </div>
      </StyledShorcut>

      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={DesktopIcon}
          alt="audio"
          onClick={() => SnakeGameWindow()}
        />
        <div>
          <small
            style={{ cursor: "pointer" }}
            onClick={() => SnakeGameWindow()}
          >
            Snake
          </small>
        </div>
      </StyledShorcut>

      <StyledShorcut>
        <img
          style={{ cursor: "pointer" }}
          src={ControlsFolder}
          alt="audio"
          onClick={() => AboutMeWindow()}
        />
        <div>
          <small style={{ cursor: "pointer" }} onClick={() => AboutMeWindow()}>
            Snake
          </small>
        </div>
      </StyledShorcut>
    </div>
  );
}

export default Shortcuts;
