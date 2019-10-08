import styled from 'styled-components';
import { Card } from 'reactstrap'

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

export default MediumCard;
