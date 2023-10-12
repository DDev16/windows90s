import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Hourglass,
  Button,
  Link,
  List,
  ListItem,
  Divider
} from "react95";
import windowsLogo from "../Icons/logo.png";
import computercard from "../Icons/ComputerCard.ico";
import blueDisk from "../Icons/Diskette.ico";
import bookdisk from "../Icons/BookDisc.ico";

const WindowsStartBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar style={{ position: "static" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={windowsLogo}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Beakosm93
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                top: "100%"
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                ALL THESE LINKS JUST REFRESH THE PAGE RN!
              </ListItem>
              <Divider />
              <ListItem>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Some links on the desktop do cool things
              </ListItem>
              <Divider />
              <ListItem>
                <a
                  href="/"
                  alt="link to github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={computercard}
                    alt="green computer card"
                    style={{ paddingTop: 10 }}
                  />
                  <span>Information</span>
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="/"
                  alt="CodeSandbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={blueDisk}
                    alt="blue computer floppy disk"
                    style={{ paddingRight: 5 }}
                  />
                  <span>Watch Tv</span>
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="/"
                  alt="Alex Wolff's Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={bookdisk}
                    alt="open book with cd disc behind it"
                    style={{ paddingRight: 5 }}
                  />
                  <span>Play Games</span>
                </a>
              </ListItem>

              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>
        {/* <TextField placeholder="Search..." width={150} /> */}
      </Toolbar>
    </AppBar>
  );
};

export default WindowsStartBar;
