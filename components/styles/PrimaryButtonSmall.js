import styled from 'styled-components';

const PrimaryButtonSmall = styled.button`
  height: 50px;
  width: 96px;
  border-radius: 8px;
  background-color: #6EB43F;
  color: #fff;
  border: none !important;
  box-shadow: none !important;
  outline: none;
  :active {
    background-color: #3D7D13 !important;    
    outline: none !important;
  }
  :hover {
    background-color: #4A8C1E;
    border: none;
    outline: none;
  }
  :focus {
    outline: none !important;
  }
`

export default PrimaryButtonSmall;