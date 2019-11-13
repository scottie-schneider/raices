import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SmallButtonStyle = styled.button`
  background: #6EB43F;
  border-radius: 8px;
  width: 96px;
  height: 50px;
  outline: none;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;    
  font-size: 20px;
  font-weight: bold;
  :hover {
    background: #4A8C1E;
  }
  :active {
    background: #3D7D13;
  }
`

export default function SmallButton() {
  return (
    <SmallButtonStyle>
      ADD
    </SmallButtonStyle>
  );
}

SmallButton.propTypes = {
  text: PropTypes.string.isRequired,
}