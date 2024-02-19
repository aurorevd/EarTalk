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
`;
const Level = styled.img`
  height: 3.5vh;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 15vw;
  height: 5vh;
  background-color: white;
  border: solid 1px var(--grey);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
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
`;

function Header() {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <Level src={level} />
      <LoginButton>
        <InitialUser>JB</InitialUser>
        <Text>Jane Bayle</Text>
        <Icon src={hamburger}></Icon>
      </LoginButton>
    </StyledHeader>
  );
}

export default Header;
