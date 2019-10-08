import { AppBackground, ContentDiv } from './index';
import Navbar from '../components/Navbar';
import MediumCard from '../components/styles/MediumCard'
import SmallCard from '../components/styles/SmallCard'
import { CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap'
import styled from 'styled-components'
import StarRatingComponent from '../components/StarRatingComponent';
const AtomView = styled.div`
  min-height: 667px;
  display: block;
  flex: 1;
  overflow-y: hidden;
  overflow-x: hidden;
`
const Atoms = props => (
  <AtomView>
    <AppBackground>
      <ContentDiv>
        <h1>Typography (h1 element)</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
        <h5>H5</h5>
        <h3>Small Cards</h3>
          <SmallCard>
            <CardImg top height="88px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardSubtitle>Card Subtitle</CardSubtitle>
            </CardBody>
          </SmallCard>
        <h3>Medium Cards</h3>
        <MediumCard>
          <CardImg top height="250px" src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/1731_Eugene_St..jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>            
            <StarRatingComponent />
          </CardBody>
        </MediumCard>    
        <h1>Buttons</h1> 
        <h3>Primary</h3>
        <h3>Small</h3>
        <h3>Floating Add Button (small, grey)</h3>
        <h3>Floating add button (large, colored)</h3>
      </ContentDiv>
      <Navbar />
    </AppBackground>
  </AtomView>
);

export default Atoms; 