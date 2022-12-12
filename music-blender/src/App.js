import "./App.css";
import { PlayButton } from "./PlayButton";
import { ExportButton } from "./ExportButton";
import { LoadButton } from "./LoadButton";
import React, { useState } from "react";
import Coffee from "./Coffee";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

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
          <Collapse  in={open}>
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
      <header className="App-header">
        <PlayButton scenes={scenes} setScenes={setScenes}></PlayButton>
      </header>
      <Coffee></Coffee>
    </div>
  );
}

export default App;
