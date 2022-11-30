import React, { useState } from "react";
import { Scene } from "./Scene";

export function PlayButton() {
  const [scenes, setScenes] = useState([]);
  const handleClick = () => {
    // implementation details
    let scName = document.getElementById("sceneName").value;
    setScenes((scenes) => [...scenes, <Scene sceneName={scName}/>]);
  };

  //Load yt api script before creating tracks
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  console.log("first load in play button");

  return (
    <div>
      <form>
        <label for="sceneName">Scene Name:</label>
        <br></br>
        <input type="text" id="sceneName" name="sceneName"></input>
      </form>
      <button type="button" onClick={handleClick}>
        Create Scene
      </button>
      <div id={"scenes"}>
        {scenes.map((item, i) => (
          <div id={"scene"} key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

//,<Track id="DHv55PwhpbQ" name="Calm" scene="Ambient"/>
