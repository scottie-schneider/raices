import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ImageStyle = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  max-height: ${props => props.height};
  max-width: ${props => props.width};
  box-shadow: ${props => props.shadow ? `0px 10px 10px 0px rgba(172, 177, 192, 50)` : "none"};
  object-fit: cover;
  ${props => props.round && `
     border-radius: 8px;
     `
  };
  ${props => props.agent && `
     border-top-left-radius: 8px;
     border-top-right-radius: 8px;
     border-bottom-left-radius: 0px;
     border-bottom-right-radius: 0px;
     `
  };
  ${props => props.profile && `
    border-radius: 50%;
  `}
`

export default function Image({src, round, height, width, shadow, agent, profile}) {
  return (
    <ImageStyle 
      src={src}
      round={round}
      height={height}
      width={width}
      shadow={shadow}
      agent={agent}
      profile={profile}
    />
  );
}
