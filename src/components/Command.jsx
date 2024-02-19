import styled from "styled-components";
import { Link } from "react-router-dom";
import CommandButton from "./CommandButton";
import PlayIcon from "../assets/play-solid.svg";
import PauseIcon from "../assets/pause-solid.svg";
import RabbitIcon from "../assets/image 4.png";
import BubbleIcon from "../assets/bubble.png";
import BubbleOffIcon from "../assets/bubbleOff.png";
import VolumeIcon from "../assets/volume-low-solid.svg";
import MuteIcon from "../assets/volume-xmark-solid.svg";
import StopIcon from "../assets/stop-solid.svg";
import NoiseIcon from "../assets/image 3.png";

const StyledCommand = styled.div`
  width: 32.7%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: var(--shadow);
  background-color: var(--lightgrey);
  border: solid 1px var(--grey);
  border-radius: var(--radius);
`;

function Command({
  play,
  setPlay,
  setSpeed,
  noise,
  setNoise,
  subtitles,
  setSubtitles,
  mute,
  setMute,
  volume,
  setVolume,
}) {
  return (
    <StyledCommand>
      <CommandButton src={RabbitIcon} onClick={setSpeed} />
      <CommandButton src={noise ? NoiseIcon : NoiseIcon} onClick={setNoise} />
      <CommandButton
        src={subtitles ? BubbleIcon : BubbleOffIcon}
        onClick={setSubtitles}
      />
      <CommandButton src={play ? PauseIcon : PlayIcon} onClick={setPlay} />
      <Link to="/">
        <CommandButton src={StopIcon} />
      </Link>
      <CommandButton src={mute ? MuteIcon : MuteIcon} onClick={setMute} />
      <CommandButton
        src={volume ? VolumeIcon : VolumeIcon}
        onClick={setVolume}
      />
    </StyledCommand>
  );
}

export default Command;
