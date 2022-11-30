import React, { useState } from "react";
import Track from "./Track";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PlayButton() {
  const [tracks, setTracks] = useState([]);
  const handleClick = () => {
    // implementation details
    setTracks(tracks => [...tracks, <Track id="H8n7K3jABhI" name="Battle Music" scene="Combat"/>,<Track id="DHv55PwhpbQ" name="Calm" scene="Ambient"/>]);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-play" />
        Click Me
      </button>
      {tracks.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}

//,<Track id="DHv55PwhpbQ" name="Calm" scene="Ambient"/>