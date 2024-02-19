import styled from "styled-components";

const StyledSubtitles = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2.7vw;
  width: 100%;
  height: 15vh;
  font-weight: 800;
`;

function Subtitles() {
  return (
    <StyledSubtitles>
      Welcome Jane. <br /> What would you like to talk about ?
    </StyledSubtitles>
  );
}

export default Subtitles;
