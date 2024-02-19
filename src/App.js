import "./App.css";
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

function App() {
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(false);
  const [mute, setMute] = useState(false);
  const [stop, setStop] = useState(false);
  const [subtitles, setSubtitles] = useState(false);
  const [speed, setSpeed] = useState(false);
  const [noise, setNoise] = useState(false);

  return (
    <div className="App">
      <Header />
      <Subtitles />
      <MainDiv>
        <SearchBar />
        <TopicsContainer />
        <Mouth />
        <Command />
      </MainDiv>
    </div>
  );
}

export default App;
