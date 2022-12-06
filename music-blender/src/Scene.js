import Track from "./Track";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';


export function Scene(props) {
  const [tracks, setTracks] = useState([]);
  const sceneName = props.sceneName;
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
  
  // When tracks are provided, add to scene
  useEffect(() => {
    if (props.tracks != null){
      setTracks(props.tracks);
    }
  }, [props.tracks])
   
  const handleClick = () => {
    let tURL = document
      .getElementById(sceneName)
      .querySelectorAll("#trackURL")[0].value;
    let tId = tURL.match(regex)[1];
    let tName = document
      .getElementById(sceneName)
      .querySelectorAll("#trackName")[0].value;
    // implementation details
    setTracks((tracks) => [
      ...tracks,
      <Track id={tId} name={tName} scene={sceneName} />,
    ]);
  };

  const pauseScene = () => {
    // fadeOutScene();
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
      fadeInScene();
      // Fade out other scenes
      // Get scenes
      let scenesArr = document.querySelectorAll(".tracklist");
      let scenesSubArr = Array.from(scenesArr).filter(function (x) {
        return x.getAttribute("id") !== sceneName;
      });
      scenesSubArr.forEach((element) => {
        fadeOutScene(element.getAttribute("id"));
      });
    });
  };

  const fadeOutScene = (scene = sceneName) => {
    console.log("Fading out scene: " + scene);
    const fadingInterval = setInterval(fadeOutInterval, 20); // set up an interval to call the fadeout method every 20ms
    function fadeOutInterval() {
      let allQuiet = true;
      let trackArr = document.getElementById(scene).querySelectorAll(".track");
      // For each track in the scene
      trackArr.forEach((track) => {
        let currentVol = track
          .querySelectorAll(".MuiSlider-thumb")[0]
          .childNodes[0].getAttribute("value");
        if (currentVol > 0) {
          allQuiet = false;
        }
        let newVol = currentVol - 1;
        // update value in slider
        track
          .querySelectorAll(".MuiSlider-thumb")[0]
          .childNodes[0].setAttribute("value", newVol);
        let iframe = track.querySelectorAll(".ytFrame")[0];
        let func = "setVolume";
        let args = [newVol];
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
      if (allQuiet) {
        clearInterval(fadingInterval);
      }
    }
  };

  const fadeInScene = (scene = sceneName) => {
    console.log("Fading in scene: " + scene);
    const fadingInterval = setInterval(fadeInInterval, 20); // set up an interval to call the fadein method every 20ms
    function fadeInInterval() {
      let allAtTarget = true;
      let trackArr = document.getElementById(scene).querySelectorAll(".track");
      // For each track in the scene
      trackArr.forEach((track) => {
        let currentVol = track
          .querySelectorAll(".MuiSlider-thumb")[0]
          .childNodes[0].getAttribute("value");
        let targetVol = track
        .querySelectorAll(".MuiSlider-thumb")[0]
        .childNodes[0].getAttribute("aria-valuenow");
        console.log(currentVol);
        let newVol = parseInt(currentVol) + 1;
        if(newVol > targetVol){
          newVol = targetVol;
        } else {
          allAtTarget = false;
        }
        // update value in slider
        track
          .querySelectorAll(".MuiSlider-thumb")[0]
          .childNodes[0].setAttribute("value", newVol);
        let iframe = track.querySelectorAll(".ytFrame")[0];
        let func = "setVolume";
        let args = [newVol];
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
      if (allAtTarget) {
        clearInterval(fadingInterval);
      }
    }
  };

  return (
    <div class={"tracklist"} id={sceneName}>
      <h4 class={"sceneHeader"}>{sceneName}</h4>
      <FontAwesomeIcon
        icon={faPause}
        onClick={pauseScene}
        style={{ margin: "0 5px" }}
      />
      <FontAwesomeIcon
        icon={faPlay}
        onClick={playScene}
        style={{ margin: "0 5px" }}
      />
      <label for="trackURL">Track URL:</label>
      <br></br>
      <input type="text" id="trackURL" name="trackURL"></input>
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
