import styled from "styled-components";


const StyledSearchBar = styled.input`
  width: 16%;
  height: 60px;
  border-radius: var(--radius);
`;

function SearchBar() {

  return <StyledSearchBar />;
}

export default SearchBar;
