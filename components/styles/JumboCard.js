import styled from 'styled-components'

const JumboCard = styled.section`
  /* The Jumbo Card */
  height: 400px;
  background-image: url(${props => props.url});
  background-position: bottom center;  
  background-size: cover;
  background-position: bottom center;
  display: grid;
  margin: 0 auto;
  align-items: center;
  @media (min-width: 1440px){
    border-radius: 8px;
    max-width: 1292px;
  }
  .jumbo {
    width: 90%;
    margin: 0 auto;
    color: #fff;
  }
  .jumbo h2 {
    margin: 0;
    width: 100%;
  }
  .learnButton {
    margin-top: 40px;
    height: 43px;
    width: 133px;
  }
  .learnButton span {
    color: black;
    background-color: #fff;   
    padding: 14px 24px; 
    border-radius: 8px;
  }
  /* End Jumbo Card */
`

export default JumboCard;