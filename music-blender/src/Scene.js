import React, { useState } from "react";
import Track from "./Track";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

export function Scene(props) {
  const [tracks, setTracks] = useState([]);
  const sceneName = props.sceneName;
  const handleClick = () => {
    let tId = document.getElementById(sceneName).querySelectorAll("#trackId")[0].value;
    let tName = document.getElementById(sceneName).querySelectorAll("#trackName")[0].value;
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
      <h4 class={"sceneHeader"}>{sceneName}</h4>
      <FontAwesomeIcon icon={faPause} onClick={pauseScene} style={{margin: "0 5px"}}/>
      <FontAwesomeIcon icon={faPlay} onClick={playScene} style={{margin: "0 5px"}}/>
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
