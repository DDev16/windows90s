//npm packages
import React, { useState, useContext, useEffect } from "react";

//project files
import Explorer from "./Explorer";
import Notepad from "./Programs/Notepad/Notepad";
import DataContext from "../dataContext";
import Shortcuts from "./shortcuts";
import Player from "./Programs/WebAmp/Player";

function Desktop() {
  const isMobile = window.innerWidth < 850;

  const data = useContext(DataContext);
  const [isExplorerOpened, setIsExplorerOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [notepadOpened, toggleNotepad] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const files = data.getItems();
    setItems(files);
    setIsExplorerOpened(true);
    setSelectedItem(files[0]);
    toggleNotepad(!isMobile);
  }, [data, isMobile]);

  const closeExplorer = () => {
    setIsExplorerOpened(false);
  };

  const openExplorer = () => {
    setIsExplorerOpened(true);
  };

  const closeNotepad = () => {
    toggleNotepad(false);
  };

  const openNotepad = (item) => {
    setSelectedItem(item);
    toggleNotepad(true);
  };

  return (
    <React.Fragment>
      <Shortcuts openExplorer={openExplorer} />
      {isExplorerOpened && (
        <Explorer
          items={items}
          closeExplorer={closeExplorer}
          openNotepad={openNotepad}
          isMobile={isMobile}
        />
      )}
      {notepadOpened && (
        <Notepad
          closeNotepad={closeNotepad}
          selectedItem={selectedItem}
          isMobile={isMobile}
        />
      )}
      <Player />
    </React.Fragment>
  );
}

export default Desktop;
