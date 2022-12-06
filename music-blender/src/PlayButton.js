import { Scene } from "./Scene";

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
        <label for="sceneName">Scene Name:</label>
        <br></br>
        <input type="text" id="sceneName" name="sceneName"></input>
        <button id="createSceneButton" type="submit">
          Create Scene
        </button>
      </form>
      <div class={"scenes"}>
        {scenes.map((item, i) => (
          <div class={"scene"} key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

//,<Track id="DHv55PwhpbQ" name="Calm" scene="Ambient"/>
