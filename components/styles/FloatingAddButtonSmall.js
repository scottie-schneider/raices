import styled from 'styled-components';

const FloatingAddButtonSmall = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${props => props.theme.floatingGreyButtonNormal};
  color: #fff;
  border: none !important;
  box-shadow: 0px 2px 4px 0px #000 !important;
  outline: none;
  :active {
    background-color: ${props => props.theme.floatingGreyButtonPressed} !important;
    box-shadow: 0px 0px 4px 0px #000 !important;    
  }
  :hover {
    background-color:${props => props.theme.floatingGreyButtonHover};
  }
  :focus {
    box-shadow: 0px 2px 4px 0px #000 !important;
    outline: none;
  }
`

export default FloatingAddButtonSmall;