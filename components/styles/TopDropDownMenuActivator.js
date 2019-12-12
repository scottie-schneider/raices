import styled from 'styled-components'

const TopDropDownMenuActivator = styled.header`
/* The Top Drop Down Menu Activator */
  display: grid;
  grid-template-columns: 10% auto 30%;
  width: 100%;
  height: 65px; 
  padding-left: 1rem;
  align-items: flex-start;
  .logo {
    display: inline-flex;
    flex: 1;
    align-items: center;
    z-index: 13;  
  }
  .logo h2 {
    color: #fff;
    padding-right: 1rem;
  }
  .logo.active h2 {
    color: black;
  }
  .logo svg {
    color: white;
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
  /* End Top Drop Down Menu Activator */
`
export default TopDropDownMenuActivator;