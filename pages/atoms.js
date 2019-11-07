import { AppBackground } from './index';
import BottomNav from '../components/BottomNav';
// TYPOGRAPHY - CARDS
import MediumCard from '../components/styles/MediumCard'
import SmallCard from '../components/styles/SmallCard'
import { CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap'
// BUTTONS 
import { Button } from 'reactstrap';
import PrimaryButtonLarge from '../components/styles/PrimaryButtonLarge'
import PrimaryButtonSmall from '../components/styles/PrimaryButtonSmall'
import FloatingAddButtonLarge from '../components/styles/FloatingAddButtonLarge'
import FloatingAddButtonSmall from '../components/styles/FloatingAddButtonSmall'
import FloatingSuccessIndicator from '../components/styles/FloatingSuccessIndicator'
// ICONS
import PlusIcon from '../components/icons/PlusIcon'
import CheckIcon from '../components/icons/CheckIcon'
// INPUTS 
import TextInput from '../components/styles/TextInput'
import TextArea from '../components/styles/TextArea'
import styled from 'styled-components'
import StarRatingComponent from '../components/StarRatingComponent';
// PHOTOS
import Image from '../components/styles/Image'
import CircularImage from '../components/styles/CircularImage'
// TABS 
import LargeTab from '../components/styles/LargeTab'
import SmallTab from '../components/styles/SmallTab'
import TabHolderLarge from '../components/styles/TabHolderLarge'
import TabHolderSmall from '../components/styles/TabHolderSmall'
// CHAT BUBBLE
import ChatBubble from '../components/styles/ChatBubble'
import ChatHolder from '../components/styles/ChatHolder'

const AtomView = styled.div`
  min-height: 667px;
  display: block;
  flex: 1;
  overflow-y: hidden;
  overflow-x: hidden;
`
class Atoms extends React.Component {
  state = {
    activeTab: 1,
  }
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render () {
    return (
      <AtomView>
        <AppBackground>
            {/* TYPOGRAPHY */}
            <h1>Typography (h1 element)</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            {/* TYPOGRAPHY - CARDS */}
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
            {/* BUTTONS */}  
            <h1>Buttons</h1> 
            
            <h3>Primary</h3>
            <PrimaryButtonLarge>Large</PrimaryButtonLarge>
            <h3>Small</h3>
            <PrimaryButtonSmall>Small</PrimaryButtonSmall>
            <h3>Floating add button (large, colored)</h3>
            <FloatingAddButtonLarge><PlusIcon fill={"#fff"}/></FloatingAddButtonLarge>
            <h3>Floating Add Button (small, grey)</h3>
            <FloatingAddButtonSmall><PlusIcon fill={"#fff"}/></FloatingAddButtonSmall>        
            <h3>Floating Success Indicator</h3>
            <FloatingSuccessIndicator><CheckIcon fill={"#fff"} /></FloatingSuccessIndicator>
            {/* INPUTS */}
            <h1>Inputs</h1>
            <h3>Text Input Simple</h3>
            <br/>
            <TextInput filled={true} value="Filled input"/>
            <TextInput filled={false} value="Unfilled input"/>
            <TextInput filled={false} error={true} value="Error"/>
            <TextInput filled={false} error={false} disabled={true} value="Disabled"/>
            <br/>
            <h3>Text Input Text Area</h3>
            <br/>
            <TextArea filled={true} error={false} disabled={false} value="Filled Input text area with a lot of text, to see how it works with multiple multiple lines. Does it still work?"/>
            <TextArea filled={false} error={false} disabled={false} value="Unfilled Input"/>
            <TextArea filled={false} error={true} disabled={false} value="Error"/>
            <TextArea filled={false} error={false} disabled={true} value="Disabled"/>
            <br />
            <h3>Images</h3>
            <br />
            <h4>200x250</h4>
            <Image 
              src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" 
              round
              height={250}
              width={200}
              shadow
            />
            <br />
            <h4>88x88</h4>
            <Image 
              src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" 
              round
              height={88}
              width={88}
              shadow={false}
            />
            <h4>150x150 (agent card profile)</h4>
            <Image 
              src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" 
              agent
              height={150}
              width={150}
              shadow={false}
            />
            <h4>330x140</h4>
            <Image 
              src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" 
              height={140}
              width={330}
              shadow={false}
            />
            <h4>62x62</h4>
            <CircularImage 
              src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485388/Raices/HomePhotos/352_Hall_St.jpg" 
              height={62}
              width={62}
              shadow={false}
            />
            <h4>Video</h4>
            <iframe 
              width="342" 
              height="200" 
              src="https://www.youtube.com/embed/NHcJ8zTnaG4" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            />
            <h3>Tabs</h3>
            <TabHolderLarge tabs={2}>
              <LargeTab 
                className={this.state.activeTab === 1 ? 'active' : null} 
                left
                onClick={() => { this.toggle(1); }}
              >
                <p>I want to buy a property</p>
              </LargeTab>
              <LargeTab 
                className={this.state.activeTab === 2 ? 'active' : null} 
                onClick={() => { this.toggle(2); }}
                right
              >
                <p>I want to sell a property</p>
              </LargeTab>              
            </TabHolderLarge>    
            <br/>
            <TabHolderLarge tabs={3}>
              <LargeTab 
                className={this.state.activeTab === 1 ? 'active' : null}
                left
                onClick={() => { this.toggle(1); }}
              >
                <p>Large Tab (default)</p>
              </LargeTab>
              <LargeTab 
                className={this.state.activeTab === 2 ? 'active' : null} 
                onClick={() => { this.toggle(2); }}
              >
                <p>A second</p>
              </LargeTab>
              <LargeTab 
                className={this.state.activeTab === 3 ? 'active' : null} 
                right
                onClick={() => { this.toggle(3); }}
              >
                <p>A third</p>
              </LargeTab>
            </TabHolderLarge>
            <h4>Small Tabs</h4>       
            <TabHolderSmall tabs={3}>
              <SmallTab 
                className={this.state.activeTab === 1 ? 'active' : null}
                left
                onClick={() => { this.toggle(1); }}
              >
                <p>Agent</p>
              </SmallTab>
              <SmallTab 
                className={this.state.activeTab === 2 ? 'active' : null} 
                onClick={() => { this.toggle(2); }}
              >
                <p>Owner</p>
              </SmallTab>
              <SmallTab 
                className={this.state.activeTab === 3 ? 'active' : null} 
                right
                onClick={() => { this.toggle(3); }}
              >
                <p>Constructor</p>
              </SmallTab>
            </TabHolderSmall> 
            <h3>Chat Bubbles</h3>
            <ChatHolder>
              <ChatBubble className="owner">For sure it is, would love to get an appointment setup. When works for you? <span className="time">11:42am</span></ChatBubble>
              <ChatBubble className="partner">hey james, I’d love to see 352 Hall St.. Is it still on the market????<span className="time">1:21pm</span></ChatBubble>
            </ChatHolder>
          <BottomNav />
        </AppBackground>
      </AtomView>
    )
  }
}

export default Atoms; 