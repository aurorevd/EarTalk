import styled from "styled-components";
import logo from "../assets/EarTalk1.png";
import level from "../assets/UserLevel.png";
import hamburger from "../assets/bars-solid.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 10vh;
`;
const Logo = styled.img`
  width: 15vw;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  &:hover {
    scale: 1.1;
  }
`;
const Level = styled.img`
 width: 13vw;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 15vw;
  height: 5vh;
  background-color: white;
  border: solid 1px var(--grey);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.1s ease-in-out 0s;
  &:active {
    background-color: var(--lightgrey);
    outline: 0;
  }
  &:hover {
    background-color: var(--lightgrey);
    outline: 0;
  }
`;
const InitialUser = styled.p`
  width: 2vw;
  height: 2vw;
  background-color: var(--purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1vw;
  font-weight: 600;
`;
const Icon = styled.img`
  height: 2.5vh;
`;
const Text = styled.p`
  font-weight: 700;
  font-size: 1vw;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <Logo src={logo} />
      </a>
      <Level src={level} />
      <LoginButton>
        <FlexDiv>
          <InitialUser>JB</InitialUser>
          <Text>Jane Bayle</Text>
        </FlexDiv>
        <Icon src={hamburger}></Icon>
      </LoginButton>
    </StyledHeader>
  );
}

export default Header;
