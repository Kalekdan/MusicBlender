import './App.css';
import {PlayButton} from './PlayButton';
import {ExportButton} from './ExportButton';
import {LoadButton} from './LoadButton';
import React, { useState } from "react";

function App() {
  const [scenes, setScenes] = useState([]);

  return (
    <div className="App">
      <ExportButton></ExportButton>
      <LoadButton scenes={scenes} setScenes={setScenes}></LoadButton>
      <header className="App-header">
        <PlayButton scenes={scenes} setScenes={setScenes}></PlayButton>
      </header>
      
    </div>
  );
}
 
export default App;