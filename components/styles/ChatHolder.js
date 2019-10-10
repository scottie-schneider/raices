import styled from 'styled-components'

const ChatHolder = styled.div`
position: relative;
  .owner {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    box-shadow: 0px 5px 10px 0px rgba(149, 165, 166, 50);
  }
  .partner {
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }
`

export default ChatHolder;