import React, { useState } from "react";
import { Track } from "./Track";

export function PlayButton() {
  const [tracks, setTracks] = useState([]);
  const handleClick = () => {
    // implementation details
    setTracks(tracks => [...tracks, <Track id="H8n7K3jABhI" name="Battle Music" scene="Combat"/>]);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      {tracks.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}
