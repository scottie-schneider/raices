import React from 'react';
import styled from 'styled-components'

import PlusIcon from './icons/PlusIcon'

const FloatingAddButtonLarge = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #3498DB;
  color: #fff;
  border: none !important;
  box-shadow: 0px 2px 4px 0px #000;
  outline: none;
  :active {
    background-color: #207AB6 !important;
    box-shadow: 0px 0px 4px 0px #000 !important;    
  }
  :hover {
    background-color: #3FAFFA;
  }
  :focus {
    box-shadow: 0px 2px 4px 0px #000 !important;
    border: none;
    outline: none;
  }
`

export default function PrimaryButton() {
  return (
    <FloatingAddButtonLarge>
      <PlusIcon fill={"#fff"}/>
    </FloatingAddButtonLarge>
  );
}
