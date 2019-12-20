import styled from 'styled-components'

const SearchBarHeader = styled.header`
 /* The Search Bar Header */
    display: flex;  
    z-index: 50;
    justify-content: flex-start; 
    position: fixed;
    align-items: center; 
    width: 100vw;
    height: 65px; 
    max-height: 65px;     
    margin: 0 auto;
    top: 0;
    left: 0;
    background-color: #fff;
  .logo {
    display: inline-flex;
    align-items: center;
    z-index: 35;
  }
  .logo h2 {
    color: #000;
    padding-left: 1rem;
    padding-right: .5rem;
  }
  .logo.active h2 {
    color: black;
  }
  .logo svg {
    color: black;
    transform: rotate(0deg);
    transition: transform .3s linear;  
    vertical-align: middle;
    text-align: center;
  }
  .logo svg.open {    
    transform: rotate(180deg);
    transition: transform .3s linear;
    color: black;
    text-align: center;
  }  
  .icons svg {
    height: 20px;
    width: 20px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
  .icons i {
    font-size: 1rem;
  }

  /* End Search Bar Header */
`

export default SearchBarHeader;