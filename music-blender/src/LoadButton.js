import { Scene } from "./Scene";
import Track from "./Track";
import React from "react";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export function LoadButton({ scenes, setScenes }) {
  const exampleFile = {
    scenes: [
      {
        sceneName: "Shop",
        tracks: [
          {
            trackId: "7T3SU4Ht1Yw",
            trackAlias: "Calm Music",
            trackVolume: 40,
          },
          {
            trackId: "gaGrHUekGrc",
            trackAlias: "Cafe Ambience",
            trackVolume: 15,
          },
        ],
      },
      {
        sceneName: "Exploration",
        tracks: [
          {
            trackId: "bLZApMsorjA",
            trackAlias: "Exploration Music",
            trackVolume: 45,
          },
          {
            trackId: "5-UWXylsgag",
            trackAlias: "Insect Noises",
            trackVolume: 15,
          },
        ],
      },
      {
        sceneName: "Combat",
        tracks: [
          {
            trackId: "_YpKEpF0oxo",
            trackAlias: "Duel Music",
            trackVolume: 65,
          },
          {
            trackId: "oBsHWwmXbcM",
            trackAlias: "Sword ambience",
            trackVolume: 10,
          },
        ],
      },
      {
        sceneName: "City",
        tracks: [
          {
            trackId: "ddMSMwKQkKI",
            trackAlias: "Large City Music",
            trackVolume: 65,
          },
        ],
      },
    ],
  };

  const handleFileChange = (event) => {
    const fileInput = document.querySelector("input[type=file]");
    let currentFile = fileInput.files[0];
    readFile(currentFile);
    event.target.value = null;
  };

  function readFile(file) {
    var reader = new FileReader();
    reader.onload = readSuccess;
    function readSuccess(evt) {
      buildHTML(JSON.parse(evt.target.result));
    }
    reader.readAsText(file);
  }

  const handleClick = (event) => {
    buildHTML(exampleFile);
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
            volume={track.trackVolume}
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
        <Button
          sx={{ m: 1 }}
          variant="contained"
          component="label"
          startIcon={<UploadFileIcon />}
        >
          Import File
          <input
            type="file"
            accept=".json"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        <Button
          sx={{ m: 1 }}
          variant="contained"
          type="button"
          onClick={handleClick}
        >
          Load Example
        </Button>
      </form>
    </div>
  );
}
