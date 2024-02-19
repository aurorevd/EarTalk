import styled from "styled-components";

const StyledSubtitles = styled.div`
  width: 50%;
  height: 15vh;
`;

const StyledP = styled.h1`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  font-size: 2.7vw;
  width: 100%;
  height: 100%;
  font-weight: 800;
`;

function Subtitles({ subtitles }) {
  return (
    <StyledSubtitles>
      <StyledP visible={subtitles}>
        Welcome Jane. <br /> What would you like to talk about ?
      </StyledP>
    </StyledSubtitles>
  );
}

export default Subtitles;
