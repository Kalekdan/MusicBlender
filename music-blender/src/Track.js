import { ContinuousSlider } from "./VolumeSlider";
import PropTypes from "prop-types";
import React from "react";

// import classes from 'styles/YouTubeVideo.module.css';

class Track extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    scene: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
  };
  elem_id = this.props.id + "-" + this.props.scene; //make this unique to allow multiple concurrent
  componentDidMount = () => {
    // If script is already there, load the video directly
    this.loadVideo();
  };

  loadVideo = () => {
    const { id } = this.props;
    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(this.elem_id, {
      height: "0",
      width: "0",
      videoId: id,
      playerVars: {
        controls: 0, // hides player controls
        disablekb: 1, // disables keyboard input
        fs: 0, // prevents fullscreen
        loop: 1, // loops video
        start: 0, // plays from the start
        playlist: id,
      },
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady = (event) => {
    //event.target.playVideo();
    // console.log(event.target);
  };

  render = () => {
    if (this.props.volume === undefined) {
      this.props.volume = 50;
    }
    return (
      <div>
        <a
          class="trackName"
          href={"https://www.youtube.com/watch?v=" + this.props.id}
          target="_blank"
          rel="noreferrer"
        >
          <p>{this.props.name}</p>
        </a>
        <div id={this.elem_id} class={"ytFrame"} />
        <ContinuousSlider
          trackId={this.elem_id}
          volume={this.props.volume}
        ></ContinuousSlider>
      </div>
    );
  };
}

export default Track;
