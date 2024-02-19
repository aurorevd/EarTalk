import "./App.css";
import styled from "styled-components";
import Header from './components/Header'
import TopicsContainer from "./components/TopicsContainer"

const Subtitles = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.7vw;
  width: 100%;
  height: 15vh;
  font-weight: 800;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 72vh;
`;
const SearchBar = styled.input`
  width: 250px;
  height: 40px;
  border-radius: var(--radius);
`;

const CommandeLine = styled.div`
  width: 32.7%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: var(--shadow);
  background-color: var(--lightgrey);
  border: solid 1px var(--grey);
  border-radius: var(--radius);
`;

function App() {
  return (
    <div className="App">
      <Header/>
      <Subtitles>
        Welcome Jane. <br /> What would you like to talk about ?
      </Subtitles>

      <MainDiv>
        <SearchBar />
        <TopicsContainer/>
        <CommandeLine />
      </MainDiv>
     
    </div>
  );
}

export default App;
