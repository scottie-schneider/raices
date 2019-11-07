import { AppBackground } from './index';
import styled from 'styled-components';

const GridTemplate = styled.div`
  display: grid;
  .one {
    grid-area: one;
    border: 1px solid green;
  }
  .two {
    grid-area: two;
    border: 1px solid yellow;
  }
  .three {
    grid-area: three;
    border: 1px solid blue;
  }
  grid-template-areas:
  "one"
  "two"
  "three";
`

const Grid = props => (
  <div>
    <AppBackground>
        <GridTemplate>
          <div className="one">
            1
          </div>
          <div className="two">
            2
          </div>
          <div className="three">
            3
          </div>
        </GridTemplate>
    </AppBackground>
  </div>
);

export default Grid; 