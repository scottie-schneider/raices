import { AppBackground, ContentDiv } from './index';
import Navbar from '../components/Navbar';

const Molecules = props => (
  <div>
    <AppBackground>
      <ContentDiv>
        <p>Molecules...</p>
      </ContentDiv>
      <Navbar />
    </AppBackground>
  </div>
);

export default Molecules; 