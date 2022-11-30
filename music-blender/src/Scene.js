import React, { useState } from "react";
import Track from "./Track";

export function Scene(props) {
  const [tracks, setTracks] = useState([]);
  const sceneName = props.sceneName;
  const handleClick = () => {
    let tId = document.getElementById("trackId").value;
    let tName = document.getElementById("trackName").value;
    // implementation details
    setTracks((tracks) => [
      ...tracks,
      <Track id={tId} name={tName} scene={sceneName} />,
    ]);
  };

  const pauseScene = () => {
    let iframes = document
      .getElementById(sceneName)
      .querySelectorAll(".ytFrame");
    let func = "pauseVideo";
    let args = [];
    iframes.forEach((iframe) => {
      if (iframe.src.indexOf("youtube.com/embed") !== -1) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: func,
            args: args || [],
          }),
          "*"
        );
      }
    });
  };

  const playScene = () => {
    let iframes = document
      .getElementById(sceneName)
      .querySelectorAll(".ytFrame");
    let func = "playVideo";
    let args = [];
    iframes.forEach((iframe) => {
      if (iframe.src.indexOf("youtube.com/embed") !== -1) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: func,
            args: args || [],
          }),
          "*"
        );
      }
    });
  };

  return (
    <div class={"tracklist"} id={sceneName}>
      <h2>{sceneName}</h2>
      <button type="button" onClick={pauseScene}>
        Pause Scene
      </button>
      <button type="button" onClick={playScene}>
        Play Scene
      </button>
      <label for="trackId">Track Id:</label>
      <br></br>
      <input type="text" id="trackId" name="trackId"></input>
      <br></br>
      <label for="trackName">Track Name:</label>
      <br></br>
      <input type="text" id="trackName" name="trackName"></input>
      <button type="button" onClick={handleClick}>
        Add Tracks
      </button>
      {tracks.map((item, i) => (
        <div class={"track"} key={i}>
          {item}
        </div>
      ))}
    </div>
  );
}
