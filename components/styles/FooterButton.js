import styled from 'styled-components'

const FooterButton = styled.a`
  display: none;
  z-index: 3;
  @media(min-width: 768px){
    display: block;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: .5rem 2rem;
    background-color: #fff;
    color: #484848;
    text-decoration: none;
  }
`
export default FooterButton;