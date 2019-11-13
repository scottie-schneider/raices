import React, { Component } from 'react'
import styled from 'styled-components'
import {Row, Col, Input, Container } from 'reactstrap';
import MagnifyingGlassIcon from './icons/MagnifyingGlassIcon';
// import MapIcon from './icons/MapIcon';
// Search bar Map Icon Holder
const SearchHolder = styled.div`
  display: flex;  
  position: relative;
  left: 0;
  width: 100%;
  svg {
    position: absolute;
    top: 13px;
    left: 5px;
  }
`
const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0;
  float: left;
  clear: both;
`
const StyledContainer = styled(Container)`
  margin-right: 0;
  margin-left: 0;
`
const IconHolder = styled.div`
  background-image: linear-gradient(203deg, #88FFE2 9%, #2ECC96 100%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 5px 5px 0 rgba(58,162,209,0.45);
  align-self: center;
  padding-left: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    display: block;
    position: absolute;
    left: 8px;   
  }
`
// Search bar styled Reactstrap Input 
const SearchBarInput = styled(Input)`
  background: #FFFFFF;
  padding-left: 30px;
  border-radius: 20px;
  border: none;
  font-family: Avenir-Book;
  font-size: 17px;
  color: #ACB1C0;
  letter-spacing: 0;
  width: 100%;
  height: 40px;
  :focus{
    box-shadow: none;
  }
`
// Styled Card

class SearchComponent extends Component {
  render() {
    return (
      <StyledContainer>
        <Row>
          <StyledCol xs="10">
            <SearchHolder>
              <SearchBarInput
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search Agents, Neighborhoods, Homes"
              />  
              <MagnifyingGlassIcon 
                width={15}
                height={15}
                fill={'#000'}
              />
            </SearchHolder>
          </StyledCol>
          <StyledCol xs="2">
            <IconHolder>
              {/* <MapIcon 
                width={25}
                height={25}
                fill={'#000'}
              /> */}
            </IconHolder>
          </StyledCol>
        </Row>
      </StyledContainer>
    )
  }
}

export default SearchComponent;