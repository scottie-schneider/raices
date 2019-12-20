import styled from 'styled-components';

const TopDropDownMenu = styled.div`
  /* The Top Drop Down Menu */
  position: fixed;
  width: 100%;
  max-width: 100%;
  top: -300%;
  left: 0;
  background-color: #fff;
  transition: top .5s ease-in-out;
  max-height: 100%;
  z-index: 10;
  overflow-y: scroll;
  &.active {
    top: 0;
  }
  & nav {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
  & nav ul {
    display: grid;
    list-style-type: none;
    grid-row-gap: 20px;
    padding-left: 1rem;
  }
  & a {
    text-decoration: none;
    color: grey;
  }
  & nav ul .share {  
    display: grid;
    grid-row-gap: 2rem;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  & nav ul .international {
    display: grid;
    grid-row-gap: 2rem;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  & nav ul .help {
    display: grid;
    grid-row-gap: 2rem;;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  & nav ul .auth {
    display: grid;
    grid-row-gap: 2rem;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  .back.active {
    top: 0;
  }
  .back {
    position: fixed;
    width: 100%;
    height: 70px;
    max-width: 100%;
    top: -300%;
    left: 0;
    background-color: #fff;
    transition: top .5s ease-in-out;
    max-height: 100%;
    z-index: 11;
  }
  /* End Top Drop Down Menu */
`

export default TopDropDownMenu;