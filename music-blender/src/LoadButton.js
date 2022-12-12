import { Scene } from "./Scene";
import Track from "./Track";
import React, { useState } from "react";

export function LoadButton({ scenes, setScenes }) {
  const [file, setFile] = useState();
  const exampleFile = {
    scenes: [
      {
        sceneName: "Shop",
        tracks: [
          {
            trackId: "7T3SU4Ht1Yw",
            trackAlias: "Calm Music",
            trackVol: 10,
          },
          {
            trackId: "gaGrHUekGrc",
            trackAlias: "Cafe Ambience",
            trackVol: 15,
          },
        ],
      },
      {
        sceneName: "Exploration",
        tracks: [
          {
            trackId: "5-UWXylsgag",
            trackAlias: "Insect Noises",
            trackVol: 15,
          },
        ],
      },
    ],
  };

  const handleFileChange = (event) => {
    const fileInput = document.querySelector('input[type=file]');
    setFile(fileInput.files[0]);
  };

  function readFile(file) {                                                       
    var reader = new FileReader();
    reader.onload = readSuccess;                                            
    function readSuccess(evt) {     
        buildHTML(JSON.parse(evt.target.result));                                                   
    };
    reader.readAsText(file);        
}

  const handleClick = (event) => {
    if (file){
      readFile(file);
    } else {
      buildHTML(exampleFile);
    }
  };

  const buildHTML = (inputFile) => {
    // Clear existing scenes
    // setScenes((scenes) => [])
    let newScenes = [];
    inputFile.scenes.forEach((scene) => {
      let newTracks = [];
      scene.tracks.forEach((track) => {
        newTracks.push(
          <Track
            id={track.trackId}
            name={track.trackAlias}
            scene={scene.sceneName}
          />
        );
      });
      newScenes.push(<Scene sceneName={scene.sceneName} tracks={newTracks} />);
    });
    setScenes(newScenes);
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleFileChange} />
        <button type="button" onClick={handleClick}>
          Load Scenes
        </button>
      </form>
    </div>
  );
}
