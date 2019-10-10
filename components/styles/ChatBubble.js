import styled from 'styled-components'

const ChatBubble = styled.div`
  width: 221px;
  height: auto;  
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  font-size: 15px;
  color: ${props => props.theme.black};
  position: relative;
  .time {
    font-size: 12px;    
    position: absolute; 
    bottom: 0;
    right: 10px;
    text-align: right;
  }
`

export default ChatBubble;