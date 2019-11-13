import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import StarIcon from './icons/StarIcon';

const SmallInfoHolder = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  height: 18px;
  font-size: 12px;
  font-family: 'Fira Sans', sans-serif;    
  .baths {
    padding-left: 5px;
  }
  .sqft {
    padding-left: 6px;
  }
`

export default function SmallInfo() {
  return (
    <SmallInfoHolder>
      <div className="beds">
        2 bd |
      </div>
      <div className="baths">
        2 ba |
      </div>
      <div className="sqft">
        924 sqft
      </div>
    </SmallInfoHolder>    
  ); 
}
