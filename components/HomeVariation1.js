import React, { Component } from 'react';
import styled from 'styled-components';
import SearchComponent from './SearchComponent'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, Col } from 'reactstrap'
import StarRatingComponent from './StarRatingComponent';

const HomeVariation1Styled = styled.div`
  min-height: 667px;
  display: block;
  flex: 1;
  overflow-y: hidden;
  overflow-x: hidden;
`
const MediumCard = styled(Card)`
  display: flex;
  flex: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-left: 2em;
  width: 200px;
  height: 380px;
  border: none;
  background: transparent;
  :first-child {
    margin-left: 0 !important;
  }
  ::-webkit-scrollbar {    
    display: none;
  }
  .card-title {
    font-weight: bold;
    font-size: 1em;
    margin-bottom: 5px;
    word-wrap: break-word;    
    white-space: pre-wrap;
  }
  .card-body {
    padding: 0;
    margin-top: 10px;   
  }
  .card-subtitle {
    font-size: .8em;
    position: absolute;
    bottom: 25px;
    font-size: .8em;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .badge.badge-success {
    float: left;
    clear: both;
    margin-top: 1em;
  }
  img {
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 10px 10px 0 rgba(172,177,192,0.50);
    background: none;
  }
`

const SmallCard = styled(Card)`
  display: inline-flex;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-left: 2em;
  width: 88px;
  min-height: 160px;
  border: none;
  flex: 1;
  :first-child {
    margin-left: 0 !important;
  }
  ::-webkit-scrollbar {    
    display: none;
  }
  .card-title {
    font-weight: bold;
    font-size: .8em;
    margin-bottom: 5px;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  .card-body {
    padding: 0;
    margin-top: 10px;    
    p {
      font-size: .8em;
      position: absolute;
      bottom: 0;    
      margin-bottom: 0;      
   }
  }
  .card-subtitle {
    position: absolute;
    bottom: 15px;
    font-size: .8em;
    margin-bottom: 5px;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  img {
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 10px 10px 0 rgba(172,177,192,0.50);
  }
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
                <CardImg top height="250px" src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2006/4/7/2/RE_Dos_Realtor_hor.jpg.rend.hgtvcom.1280.960.suffix/1400935880311.jpeg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>123 Harrel-Diggity-Dastardly Dr.</CardTitle>
                  <CardSubtitle>Woodcreek Reserve</CardSubtitle>
                  <StarRatingComponent />
                </CardBody>
              </MediumCard>
              <MediumCard
                onClick={() => this.props.openBottomSheet(true)}
              >
              <CardImg top height="250px" src="https://an.rdcpix.com/899725485/eb882dd8759f76f4c7dbee499b65c99ce-f1xd-w480_h480_q80.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>3853 Cost Avenue</CardTitle>
                  <CardSubtitle>Country Club Heights</CardSubtitle>
                  <StarRatingComponent />
                </CardBody>
              </MediumCard>
              <MediumCard
                onClick={() => this.props.openBottomSheet(true)}
              >
              <CardImg top height="250px" src="https://d126fxm3orgy3k.cloudfront.net/images/535e73961cdabc5e0d000003/60934008/60934008_1.jpg" alt="Card image cap" />
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
                <CardImg top height="88px" src="https://jcsignscharlotte.com/wp-content/uploads/2018/03/IMG_0533.jpeg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Wedgewood</CardTitle>
                  <p>2 Homes</p>
                </CardBody>
              </SmallCard>
              <SmallCard>
                <CardImg top height="88px" src="https://www.signdesignandinstallation.com/neighborhood/data1/images/neigh1.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Country Club Heights</CardTitle> 
                  <p>61 Homes</p>               
                </CardBody>
              </SmallCard>
              <SmallCard>
                <CardImg top height="88px" src="https://nearwestside.bloomington.in.us/wp-content/uploads/sites/49/2011/07/nws_sign.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Near West Side</CardTitle>              
                  <p>53 Homes</p>                     
                </CardBody>
              </SmallCard>
              <SmallCard>
                <CardImg top height="88px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yJovUuyLDiiQFMfj7KvuN-2y8iTpqKJTuj95fFuRvXl2vE-d" alt="Card image cap" />
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