//npm packages
import React, { useContext } from "react";
import DataContext from "../dataContext";
import { TaskBar, List, Button, ListItem, Divider } from "@react95/core";
import styled from "styled-components";
//project files
import { startWebamp } from "../Desktop/Programs/WebAmp/startWebamp";
import windowsLogo from "../Icons/logo.png";
import computercard from "../Icons/ComputerCard.ico";
import blueDisk from "../Icons/Diskette.ico";
import bookdisk from "../Icons/BookDisc.ico";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

function Taskbar() {
  const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();

  return (
    <>
      <TaskBar
        list={
          <List>
            <Link onClick={() => startWebamp()}>
              <List.Item className="pointer" icon="o">
                Media
              </List.Item>
            </Link>
            <List.Divider />
            <List.Item className="pointer" icon="o">
              <Link
                href={react95Repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Built with React95
              </Link>
            </List.Item>
            <List.Divider />
            <List.Item className="pointer" icon="0">
              <Link
                href={projectRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Link>
            </List.Item>
          </List>
        }
      />
      <Button
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          cursor: "pointer"
        }}
        onClick={() => startWebamp()}
      >
        this was clippy but its music now
      </Button>
    </>
  );
}

export default Taskbar;
