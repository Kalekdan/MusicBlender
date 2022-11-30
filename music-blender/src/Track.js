import { ContinuousSlider } from "./VolumeSlider";
import PropTypes from "prop-types";
import React from "react";

// import classes from 'styles/YouTubeVideo.module.css';

class Track extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    scene: PropTypes.string.isRequired,
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
      events: {
        onReady: this.onPlayerReady,
      },
    });
  };

  onPlayerReady = (event) => {
    event.target.playVideo();
    // console.log(event.target);
  };

  render = () => {
    const { id } = this.props;
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div id={this.elem_id} />
        <ContinuousSlider trackId={this.elem_id}></ContinuousSlider>
      </div>
    );
  };
}

export default Track;