import styled from 'styled-components'
import { Card } from 'reactstrap'

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
    font-size: 1em;
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

export default SmallCard;