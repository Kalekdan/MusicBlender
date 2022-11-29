import { ContinuousSlider } from "./VolumeSlider";

export function Track(props) {
  const name = props.name;
  const volume = props.volume;
  const scene = props.scene;
  let id = props.id + "-" + props.scene;
  return (
    <div>
    <h2>{props.name}</h2>
    <iframe
      id={id}
      width="0"
      height="0"
      src={"https://www.youtube.com/embed/" + props.id + "?autoplay=1"}//temp disable autoplay
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <ContinuousSlider trackId={id}></ContinuousSlider>
    </div>
  );
}
