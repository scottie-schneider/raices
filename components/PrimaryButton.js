import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const PrimaryButtonStyle = styled.button`
  background: #6EB43F;
  border-radius: 8px;
  width: 341px;
  height: 50px;
  outline: none;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;    
  font-size: 20px;
  font-weight: bold;
  :hover {
    background: #4A8C1E;
    border: none;
  }
  :active {
    background: #3D7D13;
    outline: none;
  }
`

export default function PrimaryButton({text}) {
  return (
    <PrimaryButtonStyle>
      {text}
    </PrimaryButtonStyle>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
}