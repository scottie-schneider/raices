import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SmallTabStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 32px;
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

const TabHolderSmall = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: ${props => props.tabs* 100}px;
  background-color: #fff;
  color: #3498DB;
  .active {
    background-color: #3498DB;
    color: #fff;
  }
`

export default function SmallTab({activeTab}) {
  return (
    <TabHolderSmall tabs={3}>
      <SmallTabStyle 
        className={'active'}
        left
        onClick={() => { this.toggle(1); }}
      >
        <p>Agent</p>
      </SmallTabStyle>
      <SmallTabStyle 
        className={null} 
        onClick={() => { this.toggle(2); }}
      >
        <p>Owner</p>
      </SmallTabStyle>
      <SmallTabStyle 
        className={null} 
        right
        onClick={() => { this.toggle(3); }}
      >
        <p>Constructor</p>
      </SmallTabStyle>
    </TabHolderSmall> 
  ); 
}
