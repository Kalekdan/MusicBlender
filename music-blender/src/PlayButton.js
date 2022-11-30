import React, { useState } from "react";
import Track from "./Track";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PlayButton() {
  const [tracks, setTracks] = useState([]);
  const handleClick = () => {
    // implementation details
    setTracks((tracks) => [
      ...tracks,
      <Track id="H8n7K3jABhI" name="Battle Music" scene="Combat" />,
      <Track id="DHv55PwhpbQ" name="Calm" scene="Ambient" />,
    ]);
  };

  //Load yt api script before creating tracks
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  console.log("first load in play button");

  return (
    <div>
      <button type="button" onClick={handleClick}>
        <FontAwesomeIcon icon="fa-sharp fa-solid fa-play" />
        Click Me
      </button>
      <div id={"scenes"}>
        <div id={"tracklist"}>
          {tracks.map((item, i) => (
            <div id={"track"} key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//,<Track id="DHv55PwhpbQ" name="Calm" scene="Ambient"/>
