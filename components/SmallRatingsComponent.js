import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import StarIcon from './icons/StarIcon';

const LargeRatingsComponentHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 18px;
  font-size: 12px;
  font-family: 'Fira Sans', sans-serif;    
  svg {
    padding-bottom: 3px;
  }
  .rating {
    padding-left: 5px;
  }
  .ratings {
    padding-left: 6px;
  }
`

export default function SmallRatingsComponent() {
  return (
    <LargeRatingsComponentHolder>
      <StarIcon 
        height={'13px'}
        width={'13px'}
        color={'#E67E22'}
      />
      <div className="rating">
        4.8
      </div>
    </LargeRatingsComponentHolder>    
  ); 
}
