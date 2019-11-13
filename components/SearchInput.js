import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import SearchIcon from './icons/SearchIcon';

const SearchInputHolder = styled.div`
  width: 343px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  svg {
    padding-left: 10px;
  }
`

const SearchInputStyle = styled.input`
  border: none;
  font-family: 'Fira Sans', sans-serif;    
  font-size: 25px;
  color: #1E2227;
  border-bottom: 2px solid ${props => !props.filled ? props.theme.grey : "transparent"};
  ${props => props.error && `
     border-bottom: 2px solid #E74C3C;
     color: #E74C3C
     `
  }
  ${props => props.disabled && `
     border-bottom: 2px solid #95A5A6;
     color: #95A5A6
     `
  }
  background: #FFFFFF;
  border-radius: 0px;
  padding: 0;
  height: 50px;
  outline: none !important;
  :focus {
    box-shadow: none;
    border-bottom: 2px solid #1E2227;
  }
`

export default function SearchInput() {
  return (
    <div>
      <SearchInputHolder>     
        <SearchInputStyle filled={true} value="Good Morning, Scottie"/>
        <SearchIcon 
          height={"28px"}
          width={"28px"}
          color={"#1E2227"}
        />
      </SearchInputHolder>
    </div>
  );
}
