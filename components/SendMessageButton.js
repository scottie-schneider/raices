import React from 'react';
import styled from 'styled-components'

import SendIcon from './icons/SendIcon'

const SendMessageButtonStyle = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #6EB43F;
  color: #fff;
  border: none !important;
  box-shadow: 0px 2px 4px 0px #000 !important;
  outline: none;
  svg {
    padding-top: 3px;
    padding-left: 1px;
  }
  :active {
    background-color: #3D7D13 !important;
    box-shadow: 0px 0px 4px 0px #000 !important;    
  }
  :hover {
    background-color: #4A8C1E;
  }
  :focus {
    box-shadow: 0px 2px 4px 0px #000 !important;
    outline: none;
  }
`

export default function SendMessageButton() {
  return (
    <SendMessageButtonStyle>
      <SendIcon height={22} width={22} fill={"#fff"}/>
    </SendMessageButtonStyle>
  );
}
