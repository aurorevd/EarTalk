import styled from "styled-components";

const StyledCommandButton = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: var(--shadow);
  background-color: var(--black);
  border: solid 1px var(--darkgrey);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 2vw;
  max-height: 1.8vw;
  color: white;
  object-fit: contain;
`;

function CommandButton({ src, onClick }) {
  return (
    <StyledCommandButton>
      <StyledImg src={src} alt="" onClick={onClick} />
    </StyledCommandButton>
  );
}

export default CommandButton;
