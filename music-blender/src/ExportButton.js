import Button from "@mui/material/Button";

export function ExportButton() {
  const handleClick = () => {
    let scenes = [];
    let tempScenes = document.querySelectorAll(".tracklist");
    tempScenes.forEach((tempScene) => {
      let sceneName = tempScene.getAttribute("id");
      let tracks = [];
      let trackElements = document
        .getElementById(sceneName)
        .querySelectorAll(".track");
      trackElements.forEach((element) => {
        let trackId = element
          .querySelectorAll(".ytFrame")[0]
          .getAttribute("id")
          .slice(0, 11);
        let trackAlias = element.querySelectorAll("p")[0].innerHTML;
        let trackVolume = element
          .querySelectorAll(".MuiSlider-thumb")[0]
          .childNodes[0].getAttribute("aria-valuenow");
        tracks.push({ trackId, trackAlias, trackVolume });
      });
      scenes.push({ sceneName, tracks });
    });
    jsonToFile({ scenes: scenes });
  };

  const jsonToFile = (payload) => {
    const exportName = "music_blender_export";
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(payload));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        type="button"
        onClick={handleClick}
      >
        Export File
      </Button>
    </div>
  );
}
