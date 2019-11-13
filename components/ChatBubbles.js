import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

// const ChatBubbleStyles = styled.div`
//   width: 221px;
//   height: auto;  
//   display: grid;
//   margin-top: 20px;
//   padding: 10px;
//   border-radius: 8px;
//   font-size: 15px;
//   color: #1E2227;
//   position: relative;
//   font-family: 'Fira Sans', sans-serif;    
//   font-size: 14px;
//   margin-bottom: 10px;
//   .time {
//     font-size: 12px;    
//     position: absolute; 
//     bottom: -10px;
//     right: 10px;
//     text-align: right;    
//   }
// `

const ChatHolder = styled.div`
  .speech-wrapper{
    padding: 30px 40px;
    .bubble{
      width: 240px;
      height: auto;
      display: block;
      background: #f5f5f5;
      font-family: 'Fira Sans', sans-serif;   
      border-radius: 4px;
      box-shadow: 0px 10px 10px 0px rgba(172, 177, 192, 50);
      position: relative;
      margin: 0 0 25px;
      &.alt{
        margin: 0 0 0 60px;
      }
      .txt{
        padding: 8px 55px 8px 14px;
        .name{
          font-weight: 600;
          font-size: 12px;
          margin: 0 0 4px;
          color: #3498DB;
          span{
            font-weight: normal;
            color: #95A5A6;
          }
          &.alt{
            color: #2ECC71; 
            span {
              padding-left: 10px;
            }
          }
        }
        .message{
          font-size: 12px;
          margin: 0;
          color: #1E2227;
        }
        .timestamp{
          font-size: 11px;
          position: absolute;
          bottom: 8px;
          right: 10px;
          text-transform: uppercase; color: #999
        }
      }
    }
  }
`

export default function ChatBubbles() {
  return (
    <ChatHolder>
     <div className="speech-wrapper">
          <div className="bubble">
            <div className="txt">
            <p className="name">Scottie Schneider</p>
            <p className="message">Hey, did you remember to pick up the milk? We're headed to the finca this afternoon...</p>
            <span className="timestamp">10:20 pm</span>
          </div>
      </div>

      <div class="bubble alt">
        <div className="txt">
          <p className="name alt">+353 87 1234 567<span>Cristina (wifey) Giraldo</span></p>
          <p className="message">Si amor</p>
          <span className="timestamp">10:22 pm</span>
          </div>
        </div>
      </div>
    </ChatHolder>
  ); 
}
