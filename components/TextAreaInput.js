import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const TextAreaInputStyle = styled.textarea`
  border: none;
  resize: none;
  font-family: 'Fira Sans', sans-serif;    
  font-size: 14px;
  color: #1E2227;
  border: 2px solid ${props => !props.filled ? "#95A5A6" : "transparent"};
  ${props => props.error && `
     border: 2px solid #E74C3C;
     color: #E74C3C;
     `
  }
  ${props => props.disabled && `
     border: 2px solid #95A5A6;
     color: #95A5A6
     `
  }
  border-radius: 0px;
  padding: 0;
  width: 341px;
  height: 124px;
  outline: none !important;
  :focus {
    box-shadow: none;
    border: 2px solid #1E2227;
  }
`

export default function TextAreaInput() {
  return (
    <div>
      <TextAreaInputStyle filled={true} value="Reviews are a very important part of our experience. How was working with Jim?
Is there anything you would improve?"/>
      <TextAreaInputStyle filled={false} value="Unfilled input"/>
      <TextAreaInputStyle filled={false} error={true} value="Error"/>
      <TextAreaInputStyle filled={false} error={false} disabled={true} value="Disabled"/>
    </div>
  );
}
