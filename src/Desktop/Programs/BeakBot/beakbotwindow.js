import React from "react";
import "../../../index.css";
import { Window, WindowHeader, Button, Toolbar, Cutout, Panel } from "react95";
import CloseIcon from "../../shared/closeicon";
import Draggable from "react-draggable";
import beakBot from "./beakbot";
import beakbotChat from "./beakbot";

const BeakBotWindow = ({ isOpen, onCloseWindow, isActive, onFocusWindow }) => {
  return isOpen ? (
    <Draggable defaultPosition={{ x: 400, y: -300 }}>
      <Window
        style={{ zIndex: isActive ? 100 : 0 }}
        onClick={onFocusWindow}
        resizable
        className="window"
      >
        <WindowHeader className="window-header">
          <span>Beak-Bot</span>
          <Button onClick={onCloseWindow}>
            <span className="close-icon">
              <CloseIcon />
            </span>
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm" disabled>
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            View
          </Button>
          <Button variant="menu" size="sm" disabled>
            Insert
          </Button>
          <Button variant="menu" size="sm" disabled>
            Format
          </Button>
          <Button variant="menu" size="sm" disabled>
            Help
          </Button>
        </Toolbar>
        <Cutout className="window-content-chat">
          <div className="beakbot">
            <p>{beakBot}</p>
            <div className="beakbotchat">
              <p>{beakbotChat}</p>
            </div>
          </div>
        </Cutout>
        <Panel variant="well" className="footer">
          69 Object(s)
        </Panel>
      </Window>
    </Draggable>
  ) : null;
};

export default BeakBotWindow;
