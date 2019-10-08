import React, { Component } from 'react';
import styled from 'styled-components';
import SearchComponent from './SearchComponent'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, Col } from 'reactstrap'
import MediumCard from './styles/MediumCard'
import SmallCard from './styles/SmallCard'

import StarRatingComponent from './StarRatingComponent';

const HomeVariation1Styled = styled.div`
  min-height: 667px;
  display: block;
  flex: 1;
  overflow-y: hidden;
  overflow-x: hidden;
`




const Outer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar { width: 0 !important };
  WebkitOverflowScrolling: 'touch';
  display: flex;
  flex-direction: row;
`
const Flex = styled.div`
  display: flex;
`

class HomeVariation1 extends Component {
  render () {
    return (
      <HomeVariation1Styled>
          <SearchComponent />
          <h1 className="title">Recommended</h1>
          <Outer>
            <Flex>
              <MediumCard
                onClick={() => this.props.openBottomSheet(true)}
              >
                <CardImg top height="250px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/1731_Eugene_St..jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>123 Harrel-Diggity-Dastardly Dr.</CardTitle>
                  <CardSubtitle>Woodcreek Reserve</CardSubtitle>
                  <StarRatingComponent />
                </CardBody>
              </MediumCard>
              <MediumCard
                onClick={() => this.props.openBottomSheet(true)}
              >
              <CardImg top height="250px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/775_Henry_Smith_Street.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>3853 Cost Avenue</CardTitle>
                  <CardSubtitle>Country Club Heights</CardSubtitle>
                  <StarRatingComponent />
                </CardBody>
              </MediumCard>
              <MediumCard
                onClick={() => this.props.openBottomSheet(true)}
              >
              <CardImg top height="250px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/123_Harrel_St.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>2334 Rubaiyat Road</CardTitle>
                  <CardSubtitle>Creekwood Moors Lakedrive The Very Best!</CardSubtitle>
                  <StarRatingComponent />                  
                </CardBody>
              </MediumCard>
            </Flex>
          </Outer>
          <h4 className="title">Nearby Neighborhoods</h4>
          <Outer>
            <Flex>
              <SmallCard>
                <CardImg top height="88px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Wedgewood</CardTitle>
                  <p>2 Homes</p>
                </CardBody>
              </SmallCard>
              <SmallCard>
                <CardImg top height="88px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/465_Known_Dr..jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Country Club Heights</CardTitle> 
                  <p>61 Homes</p>               
                </CardBody>
              </SmallCard>
              <SmallCard>
                <CardImg top height="88px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/743_Lovelace_Av.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Near West Side</CardTitle>              
                  <p>53 Homes</p>                     
                </CardBody>
              </SmallCard>
              <SmallCard>
                <CardImg top height="88px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/286_Lexington_Street.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Ashton Heights</CardTitle>                  
                  <p>5 Homes</p>                
                </CardBody>
              </SmallCard>
            </Flex>
          </Outer>   
      </HomeVariation1Styled>
    )
  }
}

export default HomeVariation1;