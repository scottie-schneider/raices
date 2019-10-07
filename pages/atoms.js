import { AppBackground, ContentDiv } from './index';
import Navbar from '../components/Navbar';

const Atoms = props => (
  <div>
    <AppBackground>
      <ContentDiv>
        <p>Atoms...</p>
      </ContentDiv>
      <Navbar />
    </AppBackground>
  </div>
);

export default Atoms; 