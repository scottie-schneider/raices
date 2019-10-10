import styled from 'styled-components';

const TabHolderSmall = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: ${props => props.tabs* 100}px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.blue};
  .active {
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }
`

export default TabHolderSmall;