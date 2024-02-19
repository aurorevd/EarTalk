import styled from "styled-components";

const StyledCommand = styled.div`
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

function Command() {
  return <StyledCommand />;
}

export default Command;
