import styled from 'styled-components'

const SearchBar = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 1 1 300px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 1rem 0 1rem;
  input  {
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    flex: 1;
    padding: .5rem;
  }
  input:focus {
    border: 1px solid lightgrey;
    outline: none;
  }
  svg {
    height: 20px;
    width: 20px;
    z-index: 25;
    margin-left: .5rem;
  }
  &:focus-within svg {
    display: none;
  }
  &:focus-within {
    border: none;
  }
  button {
    /* display: ${props => props.button ? "block" : "none"};     */
    display: block;
    display: none;
  }
  @media(min-width: 746px) {
    max-width: 678px;
  }
`;

export default SearchBar;