import React from "react";
import "../../../index.css";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Cutout,
  Panel
} from "react95";
import CloseIcon from "../../shared/closeicon";
import Draggable from "react-draggable";
import photoGallery from "./gallery";

const PhotoGalleryWindow = ({
  isOpen,
  onCloseWindow,
  isActive,
  onFocusWindow
}) => {
  return isOpen ? (
    <Draggable defaultPosition={{ x: 400, y: -300 }}>
      <Window
        style={{ zIndex: isActive ? 100 : 0 }}
        onClick={onFocusWindow}
        resizable
        className="window"
      >
        <WindowHeader className="window-header">
          <span>gallery</span>
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

        <WindowContent>
          <Cutout className="window-content">
            <div className="PhotoGallery">
              <p>{photoGallery}</p>

              {/* Add your text and pictures here */}
              <p>Hello World</p>
              <img src="/path/to/image.jpg" alt="1" />
              {/* Loop through content and render FolderIcon components */}
            </div>
          </Cutout>
        </WindowContent>
        <Panel variant="well" className="footer">
          4 Object(s)
        </Panel>
      </Window>
    </Draggable>
  ) : null;
};

export default PhotoGalleryWindow;
