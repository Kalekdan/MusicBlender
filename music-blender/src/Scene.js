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
      <Track id={tId} name={tName} scene={sceneName} />
    ]);
  };

  return (
    <div id={"tracklist"}>
        <h2>{sceneName}</h2>
        <label for="trackId">Track Id:</label>
        <br></br>
        <input type="text" id="trackId" name="trackId"></input><br></br>
        <label for="trackName">Track Name:</label>
        <br></br>
        <input type="text" id="trackName" name="trackName"></input>
        <button type="button" onClick={handleClick}>
        Add Tracks
      </button>
      {tracks.map((item, i) => (
        <div id={"track"} key={i}>
          {item}
        </div>
      ))}
    </div>
  );
}
