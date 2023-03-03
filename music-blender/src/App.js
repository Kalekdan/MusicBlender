import "./App.css";
import { PlayButton } from "./PlayButton";
import { ExportButton } from "./ExportButton";
import { LoadButton } from "./LoadButton";
import React, { useState } from "react";
import Coffee from "./Coffee";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function App() {
  const [scenes, setScenes] = useState([]);
  const [open, setInfoOpen] = React.useState(true);

  return (
    <div className="App">
      <div>
        <div class="headerbar">
          <LoadButton scenes={scenes} setScenes={setScenes}></LoadButton>
          <ExportButton></ExportButton>
        </div>
        <div class={"infoAlert"}>
          <Collapse in={open}>
            <Alert
              severity="info"
              onClose={() => {
                setInfoOpen(false);
              }}
            >
              Not sure where to start - try loading our example!
            </Alert>
          </Collapse>
        </div>
      </div>
      <img class={"logo"} src={require("./media/musicblenderlogo.png")} alt="Music Blender Logo"></img>
      <header className="App-header">
        <PlayButton scenes={scenes} setScenes={setScenes}></PlayButton>
      </header>
      <div class={"footerdiv"}>
        <a
          href="https://github.com/Kalekdan/MusicBlender"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            fontSize={"large"}
            sx={{
              m: 1,
            }}
          ></GitHubIcon>
        </a>
        <Coffee></Coffee>
        <a
          href="https://twitter.com/JoeRickardDev"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon
            fontSize={"large"}
            sx={{
              m: 1,
            }}
          ></TwitterIcon>
        </a>
      </div>
    </div>
  );
}

export default App;
