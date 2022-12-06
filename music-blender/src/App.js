import "./App.css";
import { PlayButton } from "./PlayButton";
import { ExportButton } from "./ExportButton";
import { LoadButton } from "./LoadButton";
import React, { useState } from "react";
import Coffee from "./Coffee";

function App() {
  const [scenes, setScenes] = useState([]);

  return (
    <div className="App">
      <div>
        <ExportButton></ExportButton>
        <LoadButton scenes={scenes} setScenes={setScenes}></LoadButton>
      </div>
      <header className="App-header">
        <PlayButton scenes={scenes} setScenes={setScenes}></PlayButton>
      </header>
      <Coffee></Coffee>
    </div>
  );
}

export default App;
