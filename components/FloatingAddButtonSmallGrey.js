import React from 'react';
import styled from 'styled-components'

import PlusIcon from './icons/PlusIcon'

const FloatingAddButtonSmallGreyStyle = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #7F8C8D;
  color: #fff;
  border: none !important;
  box-shadow: 0px 2px 4px 0px #000 !important;
  outline: none;
  :active {
    background-color: #484A4A !important;
    box-shadow: 0px 0px 4px 0px #000 !important;    
  }
  :hover {
    background-color:#626465;
  }
  :focus {
    box-shadow: 0px 2px 4px 0px #000 !important;
    outline: none;
  }
`

export default function FloatingAddButtonSmallGrey() {
  return (
    <FloatingAddButtonSmallGreyStyle>
      <PlusIcon fill={"#fff"}/>
    </FloatingAddButtonSmallGreyStyle>
  );
}
