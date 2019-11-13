import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const LargeTabStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 50px;
  border: 1px solid #95A5A6;
  p { 
    text-align: center;
    margin: auto;
  }
  ${props => props.left && `
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;     
    `
  };
  ${props => props.right && `
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    `
  };
`
const TabHolderLarge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: ${props => props.tabs* 170}px;
  background-color: #fff;
  color: #3498DB;
  .active {
    background-color: #3498DB;
    color: #fff;
  }
`

export default function LargeTab({activeTab}) {
  return (
    <TabHolderLarge tabs={2}>
      <LargeTabStyle 
        className={'active'} 
        left
        onClick={() => { this.toggle(1); }}
      >
        <p>I want to buy a property</p>
      </LargeTabStyle>
      <LargeTabStyle  
        className={null} 
        onClick={() => { this.toggle(2); }}
        right
      >
        <p>I want to sell a property</p>
      </LargeTabStyle>              
    </TabHolderLarge>    
  ); 
}
