import styled from "styled-components";
import mouthClosed from "../assets/mouth.png";
import mouthOpened from "../assets/mouth.gif";

const StyledMouthContainer = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMouth = styled.img`
  height: 80%;
  object-fit: contain;
  cursor: pointer;
`;

function Mouth({ play, setPlay }) {
  return (
    <StyledMouthContainer>
      <StyledMouth src={play ? mouthOpened : mouthClosed} onClick={setPlay} />
    </StyledMouthContainer>
  );
}

export default Mouth;
