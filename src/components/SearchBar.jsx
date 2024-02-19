import "./App.css";
import styled from "styled-components";


const StyledSearchBar = styled.input`
  width: 250px;
  height: 40px;
  border-radius: var(--radius);
`;

function SearchBar() {

  return <StyledSearchBar />;
}

export default SearchBar;
