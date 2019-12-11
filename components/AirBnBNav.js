import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
  console.log('starting')
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  console.log('done')
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const PortfolioNavStyle = styled.div`
  .header-portfolio-nav {
    display: none;
  }
  .simple {
    display: block;
    flex: 1;
  }
  .site-name {
    display: flex;
    align-items: center;
  }
  .simple ul {
      flex-direction: row;
  }
  .simple ul li {
      margin-bottom: 0px;
  }

  @media(max-width: 450px) {
    /* Don't display the logo on small screens */
    .site-name {
      display: none;
    }
    .header-portfolio-nav {
      position: fixed;
      display: flex;  
      flex: 1;
      bottom: 0;
      margin: 0;
      width: 100%;
      z-index: 3;
      max-height: 56px;
    }
  }
  .header-portfolio-nav .site-name {
      flex: 0 0 5rem;  
      background-color: #003f8c; 
      padding-left: 1rem;
  }
  .site-name img {
    padding-left: 5px;
  }
  .mobile {
      display: block;
  }
  /* Nav */
  nav {
    background-color: #3F51B5;
  }
  nav ul {
    list-style:none;
    margin:0;
    padding:0;
  }
  nav ul li {
    padding: 1rem;
  }
  nav ul li:hover {
    background-color: #1a2770;
  }
  nav ul a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  /** Menu simple **/
  .simple ul {
    display: flex;
    justify-content: space-around;
    justify-content: space-between;
  }
  .simple ul li{
    text-align:center;
    flex:1;
  }
`

const AirBnBNav = (props) => (
  <PortfolioNavStyle>
    <header class="header-portfolio-nav">
      <div class="site-name">                
          <img src="../static/32x32.png" alt=""/>
      </div>
      <nav class="simple">
        <ul>
            <li><a href="#">Dash</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Agent</a></li>
            <li><a onClick={props.toggleMenu}>More</a></li>
        </ul>
      </nav>
    </header>
  </PortfolioNavStyle>
);

export default AirBnBNav;