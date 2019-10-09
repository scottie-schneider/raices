import styled from 'styled-components';

const FloatingAddButtonLarge = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.floatingBlueButtonNormal};
  color: #fff;
  border: none !important;
  box-shadow: 0px 2px 4px 0px #000;
  outline: none;
  :active {
    background-color: ${props => props.theme.floatingBlueButtonPressed} !important;
    box-shadow: 0px 0px 4px 0px #000 !important;    
  }
  :hover {
    background-color: ${props => props.theme.floatingBlueButtonHover};
  }
  :focus {
    box-shadow: 0px 2px 4px 0px #000 !important;
    border: none;
    outline: none;
  }
`

export default FloatingAddButtonLarge;