import styled from 'styled-components';
import Image from '../components/Image';
import AgentInfoBlock from '../components/AgentInfoBlock';
import AgentAboutMe from '../components/AgentAboutMe';
import AgentActiveListings from '../components/AgentActiveListings';

const ProfileBackground = styled.div`
  overflow: hidden;
  background-color: #fff;
`
const ProfilePic = styled.div`
  height: 362px;
  width: 375px;
  background-color: grey;
  z-index: 1;
  position: relative;
  grid-area: profile;
  margin: auto;
`

const BottomSheet = styled.div`
  width: inherit;
  z-index: 2;
  position: relative;
  top: -20px;
  background-color: #fff;
  border-radius: 0;
  height: 1410px;
  @media (max-width: 700px){
    border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  }
`

const ProfileTemplate = props => (
  <div className="wrapper">
    <ProfileBackground>
      <ProfilePic>
        <Image 
          src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
          height={"362px"}
          width={"375px"}    
        />
      </ProfilePic>
      <BottomSheet>
        <AgentInfoBlock />
        <AgentAboutMe />
        <AgentActiveListings />
        <p>Reviews</p>
        <p>Contact Info</p>
        <p>Add button</p>
      </BottomSheet>      
    </ProfileBackground>
  </div>
);

export default ProfileTemplate;