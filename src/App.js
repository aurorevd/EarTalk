import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TopicsContainer from "./components/TopicsContainer";
import Subtitles from "./components/Subtitles";
import SearchBar from "./components/SearchBar";
import Command from "./components/Command";
import Mouth from "./components/Mouth";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72vh;
`;

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((prevState) => !prevState);
  return [state, toggle];
};

function App() {
  const [play, togglePlay] = useToggle(false);
  const [volume, toggleVolume] = useToggle(false);
  const [mute, toggleMute] = useToggle(false);
  const [subtitles, toggleSubtitles] = useToggle(true);
  const [speed, toggleSpeed] = useToggle(false);
  const [noise, toggleNoise] = useToggle(false);

  return (
    <div className="App">
      <Header />
      <Subtitles subtitles={subtitles}/>
      <MainDiv>
        <SearchBar />
        <TopicsContainer />
        <Mouth play={play} setPlay={togglePlay} />
        <Command
          play={play}
          setPlay={togglePlay}
          volume={volume}
          setVolume={toggleVolume}
          mute={mute}
          setMute={toggleMute}
          subtitles={subtitles}
          setSubtitles={toggleSubtitles}
          speed={speed}
          setSpeed={toggleSpeed}
          noise={noise}
          setNoise={toggleNoise}
        />
      </MainDiv>
    </div>
  );
}

export default App;
