import { Scene } from "./Scene";
import Track from "./Track";
import React from "react";

export function LoadButton({ scenes, setScenes }) {
  const tempFile = {
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

  const handleClick = () => {
    buildHTML();
  };

  const buildHTML = () => {
    // Clear existing scenes
    // setScenes((scenes) => [])
    let newScenes = [];
    tempFile.scenes.forEach((scene) => {
      let newTracks = [];
      scene.tracks.forEach((track) => {
        newTracks.push(<Track id={track.trackId} name={track.trackAlias} scene={scene.sceneName}/>)
      });
      newScenes.push(
        <Scene
          sceneName={scene.sceneName}
          tracks={newTracks}
        />
      );
    });
    // setScenes((scenes) => [...scenes, <Scene sceneName={scene.sceneName}/>])
    setScenes(newScenes);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Load Scenes
      </button>
    </div>
  );
}
