import { ContinuousSlider } from "./VolumeSlider";
import PropTypes from "prop-types";
import React from "react";

// import classes from 'styles/YouTubeVideo.module.css';

class Track extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    scene: PropTypes.string.isRequired,
    volume: PropTypes.number
  };
  elem_id = this.props.id + "-" + this.props.scene; //make this unique to allow multiple concurrent

  componentDidMount = () => {
    // If script is already there, load the video directly
    this.loadVideo();
    console.log("already loaded");

    console.log("componentDidMount");
    console.log(window.YT);
  };

  loadVideo = () => {
    const { id } = this.props;
    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(this.elem_id, {
      height: "0",
      width: "0",
      videoId: id,
      playerVars: {
        'controls': 0, // hides player controls
        'disablekb': 1, // disables keyboard input
        'fs': 0, // prevents fullscreen
        'loop':1, // loops video
        'start':0 // plays from the start
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
    return (
      <div>
        <p>{this.props.name}</p>
        <div id={this.elem_id} class={'ytFrame'}/>
        <ContinuousSlider trackId={this.elem_id}></ContinuousSlider>
      </div>
    );
  };
}

export default Track;
