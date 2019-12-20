import styled from 'styled-components'

const FullFooter = styled.footer`
  border-top: 1px solid #dbdbdb;
  padding-top: 3rem 0;
  position: fixed;
  width: 100%;
  max-width: 100%;
  bottom: ${props => props.active ? 0 : "-100%"};
  background-color: #fff;
  transition: bottom .3s ease-in-out;
  max-height: 100%;
  
  /* @media(min-width: 450px) {
    .footer.active {
      bottom: 0;
    }
  } */
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
  }
  .nav-footer .menu {
    display: grid;
    grid-template-rows: repeat(auto-fit, auto);
    grid-row-gap: .5rem;
  }
  .nav-footer .menu a {
    color: #484848;
    text-decoration: none;
    display: block;
    padding-top: .5rem;
    font-size: .9rem;
  }
  .nav-footer h3 {
    font-size: 1.2rem;
  }
  .nav-footer .menu a .new {
    background-color: rgb(0, 119, 126);
    margin-left: 1rem;
    padding: .2rem .4rem .4rem .4rem;
    color: #fff;
    border-radius: 5px;
  }
`
export default FullFooter;