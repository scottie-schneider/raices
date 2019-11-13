import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

export default function Video() {
  return (
    <iframe 
      width="342" 
      height="200" 
      src="https://www.youtube.com/embed/NHcJ8zTnaG4" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
    />
  );
}
