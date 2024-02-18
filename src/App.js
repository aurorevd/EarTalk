import "./App.css";
import styled from "styled-components";
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  background-color: red;
  width: 100%;
  height: 10vh;
`;

const Subtitles = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  background-color: blue;
  width: 100%;
  height: 15vh;
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

const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  justify-content: space-between;
  
`;
const Button = styled.button`
  width: 7vw;
  height: 8vh;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: black;
  background-color: var(--purple);
  border: solid 1px var(--grey);
  border-radius: var(--radius);
`;

const CommandeLine = styled.div`
  width:30.5%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow:var(--shadow);
  background-color: var(--lightgrey);
  border: solid 1px var(--grey);
  border-radius: var(--radius);
`;


function App() {
  return (
    <div className="App">
      <Header />

      <Subtitles />
      <MainDiv>
        <SearchBar />

        <ButtonsContainer>
          <Button>Science</Button>
          <Button>History</Button>
          <Button>Sport</Button>
          <Button>Sport</Button>
          <Button>Sport</Button>
          <Button>Sport</Button>
        </ButtonsContainer>
        <CommandeLine/>
      </MainDiv>
    </div>
  );
}

export default App;
