import React from "react";
import "../../../index.css";
import {
  Window,
  WindowHeader,
  WindowContent,
  Button,
  Toolbar,
  Cutout,
  Panel
} from "react95";
import CloseIcon from "../../shared/closeicon";
import Draggable from "react-draggable";
import folder from "../../../Icons/Folder.ico";
import FolderIcon from "../../shared/foldericon";

const TrashWindow = ({ isOpen, onCloseWindow, isActive, onFocusWindow }) => {
  return isOpen ? (
    <Draggable defaultPosition={{ x: 400, y: -600 }}>
      <Window
        style={{ zIndex: isActive ? 100 : 0 }}
        onClick={onFocusWindow}
        resizable
        className="window"
      >
        <WindowHeader className="window-header">
          <span>Trash</span>
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
            Help
          </Button>
        </Toolbar>
        <WindowContent>
          <Cutout className="window-content-stuff">
            <div className="trash">
              {content.map((file) => (
                <FolderIcon
                  src={file.src}
                  altText={file.alt}
                  text={file.text}
                  href={file.href}
                />
              ))}
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
let content = [
  {
    src: folder,
    alt: "The original concept for the Jorden Law Firm website",
    text: "These Just",
    href: "/"
  },
  {
    src: folder,
    alt: "Leo's' Website aka my dog's site",
    text: "Refresh",
    href: "/"
  },
  {
    src: folder,
    alt: "The first website I made",
    text: "Right Now",
    href: "/"
  }
];

export default TrashWindow;
