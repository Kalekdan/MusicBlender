import { Scene } from "./Scene";
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

export function PlayButton({ scenes, setScenes }) {
  const handleSubmit = (event) => {
    // prevent the form reloading the page
    event.preventDefault();
    // implementation details
    let scName = document.getElementById("sceneName").value;
    if (scName === "") {
      alert("Scene Name must be provided");
      return;
    }
    document.getElementById("sceneName").value = "";
    setScenes((scenes) => [...scenes, <Scene sceneName={scName} />]);
  };

  //Load yt api script before creating tracks
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="sceneName">Scene Name: </label>
        <input type="text" id="sceneName" name="sceneName" placeholder="e.g Jungle Exploration"></input>
        <br></br>
        <Button variant='contained' id="createSceneButton" type="submit">
          Create Scene
        </Button>
      </form>
      <div class={"scenes"}>
        {scenes.map((item, i) => (
          <div class={"scene"} key={uuidv4()}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

//,<Track id="DHv55PwhpbQ" name="Calm" scene="Ambient"/>
