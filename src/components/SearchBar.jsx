import styled from "styled-components";
import React, { useState } from "react";
import loupe from "../assets//loupe.png";

const StyledForm = styled.form`
  padding: 0px 10px;
  background-color: var(--lightgrey);
  width: 16%;
  height: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 1px 1px 2px;
  box-sizing: border-box;
  border: 2px solid var(--lightgrey);
  border-color: ${(props) => props.theme.borderColor};
  border-radius: var(--radius);
  &:hover {
    border: black 3px solid;
  }
  &:focus {
    border: black 3px solid;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  min-height: 35px;
  padding: 0 1px;
  appearance: none;
  background: transparent;
  border: none;
  font-size: 27px;
  &:hover {
    border: none;
    appearance: none;
    outline: none;
  }
  &:focus {
    border: none;
    appearance: none;
    outline: none;
  }
`;

const StyledButton = styled.button`
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid var(--grey);
  &:hover {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function SearchBar({ handleSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        id="name"
        type="text"
        placeholder="Search a topic ..."
        value={keyword}
        onChange={handleInputChange}
      />
      <StyledButton type="submit">
        <img alt="Search" src={loupe} />
      </StyledButton>
    </StyledForm>
  );
}

export default SearchBar;
