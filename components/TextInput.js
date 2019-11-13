import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TextInputStyle = styled.input`
  border: none;
  font-family: 'Fira Sans', sans-serif;    
  font-size: 17px;
  color: #1E2227;
  border-bottom: 2px solid ${props => !props.filled ? props.theme.grey : "transparent"};
  ${props => props.error && `
     border-bottom: 2px solid #E74C3C;
     color: #E74C3C
     `
  }
  ${props => props.disabled && `
     border-bottom: 2px solid #95A5A6;
     color: #95A5A6
     `
  }
  background: #FFFFFF;
  border-radius: 0px;
  padding: 0;
  width: 341px;
  height: 50px;
  outline: none !important;
  :focus {
    box-shadow: none;
    border-bottom: 2px solid #1E2227;
  }
`

export default function TextInput() {
  return (
    <div>
      <TextInputStyle filled={true} value="Filled input"/>
      <TextInputStyle filled={false} value="Unfilled input"/>
      <TextInputStyle filled={false} error={true} value="Error"/>
      <TextInputStyle filled={false} error={false} disabled={true} value="Disabled"/>
    </div>
  );
}
