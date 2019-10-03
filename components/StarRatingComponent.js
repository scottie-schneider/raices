import React, { Component } from 'react'
import StarIcon from './icons/StarIcon';
import styled from 'styled-components'

const StyledRating = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  align-self: flex-end;
  svg {
   position: relative;
   bottom: 4px;
  }
  .rating {
    font-weight: bold;
    font-size: .8em;
    margin-bottom: 0; /* Important */ 
    align-items: flex-end;
    padding-left: .2em;
  }
  .ratings {
    font-size: .8em;
    margin-bottom: 0; /* Important */ 
    align-items: flex-end;
    padding-left: .2em;
  }
`
class StarRatingComponent extends Component {
  render() {
    return(
      <StyledRating>
        <StarIcon 
          height={14}
          width={14}
          secondaryFill={'#FF8C00'}
          fill={'#FF8C00'}  
        />
        <p className="rating">4.8</p>
        <p className="ratings">(12,333 ratings)</p>
      </StyledRating>
    )
  }
}

export default StarRatingComponent;