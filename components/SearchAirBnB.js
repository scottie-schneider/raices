import React, { Component } from 'react';
import styled from 'styled-components';
import AirBnBNav from './AirBnBNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown as falCaretDown } from '@fortawesome/pro-regular-svg-icons'
import { faSearch as farSearch } from '@fortawesome/pro-regular-svg-icons'
import classnames from "classnames";

const SearchPageStyle = styled.div`
  svg {
    width: 35px;
    height: 35px;
  }
  @media(min-width: 768px) {
    margin-bottom: 0;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    color:  #484848;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  img {
    max-width: 100%;
  }
  /* End Page Styles */
  /* Scrolling Nav style */
  .navbar {
    width: 100%;
    height: 55px;    
    position: fixed;
    top: 69px;
    transition: top 0.6s;
    background-color: #fff;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgrey;
    .buttonContainer {
      display: flex;
      height: 50px;
      max-width: 300px;
      justify-content: space-between;
      align-items: center;
    }
    align-items: center;
    button {
      background-color: transparent;
      border: 1px solid lightgrey;
      border-radius: 30px;
      height: 100%;
      min-width: 80px;
    }
  }

  .navbar--hidden {
    top: -64px;
  }
  /* Search Page Style */
  .searchPage {
    height: 100%;
    min-height: 700px;
    background-color: #fff;        
    display: grid;
    grid-template-rows: 150px auto;
  }
  /* Search Page Style */
  /* // The buttons for filters */
  .buttons {
    z-index: 10;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    height: 50px;
    top: 64px;
    
  }
  /* The Top Drop Down Menu */
  .topMenu {
    position: fixed;
    width: 100%;
    max-width: 100%;
    top: -300%;
    left: 0;
    background-color: #fff;
    transition: top .5s ease-in-out;
    max-height: 100%;
    z-index: 30;
    overflow-y: scroll;
  }
  .topMenu.active {
    top: 0;
  }
  .topMenu nav {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
  .topMenu nav ul {
    display: grid;
    list-style-type: none;
    grid-row-gap: 20px;
    padding-left: 1rem;
  }
  .topMenu a {
    text-decoration: none;
    color: grey;
  }
  .topMenu nav ul .share {  
    display: grid;
    grid-row-gap: 2rem;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  .topMenu nav ul .international {
    display: grid;
    grid-row-gap: 2rem;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  .topMenu nav ul .help {
    display: grid;
    grid-row-gap: 2rem;;
    border-top: 1px solid lightgrey;
    padding-top: 2rem;
  }
  .topMenu nav ul .auth {
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
    z-index: 35;
  }
  /* End Top Drop Down Menu */
  
  /* Footer Menu */
  .footerBtn {
    display: none;
    z-index: 3;
  }
  @media(min-width: 768px) {
    .footerBtn {
      display: block;
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      padding: .5rem 2rem;
      background-color: #fff;
      color: #484848;
      text-decoration: none;
    }
  }
  .footer {
    border-top: 1px solid #dbdbdb;
    padding-top: 3rem 0;
    position: fixed;
    width: 100%;
    max-width: 100%;
    bottom: -100%;
    background-color: #fff;
    transition: bottom .3s ease-in-out;
    max-height: 100%;
  }
  .footer.active {
    bottom: 53px;
  }
  @media(min-width: 450px) {
    .footer.active {
      bottom: 0;
    }
  }
  .footer .container {
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
  .social-nav {
    display: flex; 
    justify-content: flex-end;
  }
  .social-nav a {
    text-decoration: none;
    margin-right: 1rem;
  }
  .social-nav a:last-of-type {
    margin-right: 0;
  }
  .social-nav a::before {
    font-family: 'Font Awesome 5 Brands';
    color: #484848;
    font-size: 1.8rem;
  }
  .social-nav a[href*='facebook.com']::before {
    content: '\f39e';
  }
  .social-nav a[href*='twitter.com']::before {
    content: '\f099';
  }
  .social-nav a[href*='instagram.com']::before {
    content: '\f16d';
  }
  .social-nav a span {
    display: none;
  }
  /* End Footer Menu */
`

const SearchStyles = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 1 1 300px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 1rem 0 1rem;
  input  {
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    flex: 1;
    padding: .5rem;
  }
  input:focus {
    border: 1px solid lightgrey;
    outline: none;
  }
  svg {
    height: 20px;
    width: 20px;
    z-index: 25;
    margin-left: .5rem;
  }
  &:focus-within svg {
    display: none;
  }
  &:focus-within {
    border: none;
  }
  button {
    /* display: ${props => props.button ? "block" : "none"};     */
    display: block;
    display: none;
  }
  @media(min-width: 746px) {
    max-width: 678px;
  }
`;
const SearchBarHeader = styled.header`
 /* The Search Bar Header */
    display: flex;  
    justify-content: flex-start; 
    position: fixed;
    align-items: center; 
    width: 100vw;
    height: 65px; 
    max-height: 65px;     
    margin: 0 auto;
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
const ContentDiv = styled.div`
  margin-top: 114px;
`
class SearchAirBnB extends Component {
  state = {
    menu: "closed",
    topMenu: "closed",
    button: false,
    prevScrollpos: 0,
    visible: true,
    searchFocused: false,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  toggleMenu = () => {
    if(this.state.menu === "closed"){
      this.setState({menu: "active"})
    } else {
      this.setState({menu: "closed"})
    }
  }
  toggleTopMenu = () => {
    if(this.state.topMenu === "closed"){
      this.setState({topMenu: "active"})
      document.body.classList.add('active');
    } else {
      this.setState({topMenu: "closed"})
      document.body.classList.remove('active');
    }
  }  
  toggleSearch = () => {
    if(this.state.button === false) {
      this.setState({ button: true })
    } else {
      this.setState({ button: false })
    }
  }
  toggleButtons = () => {
    if(!this.state.visible) {
      this.setState({ visible: true })
    }
  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  render () {
    return (
      <SearchPageStyle active={this.state.topMenu === 'active' ? true : null}>
      <AirBnBNav toggleMenu={this.toggleMenu}/>      
      <div class="searchPage">
        {/* The Search Bar Header */}
        <SearchBarHeader>
          <div
            className={`logo ${this.state.topMenu}`}
            onClick={this.toggleTopMenu}
          >
            <h2>R</h2>            
            <div class="icons">
              <FontAwesomeIcon icon={falCaretDown} class={this.state.topMenu === 'active' ? 'open' : null}/>
            </div>          
          </div>
          <SearchStyles>
            <FontAwesomeIcon icon={farSearch} /> 
            <input placeholder="search"
              onFocus={this.toggleButtons}
              onBlur={this.toggleButtons}
            />
              </SearchStyles>          
              {/* End Search Bar Header */}
            {/* The Top Drop Down Menu */}
            <div class={`topMenu ${this.state.topMenu}`}>      
              <div class={`back ${this.state.topMenu}`}></div>         
                <nav>
                  <ul>
                    <div class="home">
                      <li><a href="#">Home</a></li>
                    </div>
                    <div class="share">
                      <li><a href="#"><div class="outer"><div class="inner">Download the app</div></div></a></li>
                      <li><a href="#"><div class="outer"><div class="inner">Invite friends</div></div></a></li>
                      <li><a href="#"><div class="outer"><div class="inner">Refer a home owner</div></div></a></li>
                    </div>
                    <div class="international">
                      <li><a href="#"><div class="outer"><div class="inner">Language</div></div></a></li>
                      <li><a href="#"><div class="outer"><div class="inner">Currency</div></div></a></li>
                    </div>
                    <div class="help">
                      <li><a href="#"><div class="outer"><div class="inner">Sell your home</div></div></a></li>
                      <li><a href="#"><div class="outer"><div class="inner">Learn about selling your home</div></div></a></li>
                      <li><a href="#"><div class="outer"><div class="inner">Help </div></div></a></li>
                    </div>
                    <div class="auth">
                      <li><a href="#"><div class="outer"><div class="inner">Sign up</div></div></a></li>
                      <li><a href="#"><div class="outer"><div class="inner">Sign in</div></div></a></li>  
                    </div>          
                  </ul>
                </nav>
              </div> 
            {/* End Top Drop Down Menu */}   
          {/* End search bar and buttons */}            
        </SearchBarHeader>
        {/* The filter buttons */}
        <div className={classnames("navbar", {
            "navbar--hidden": !this.state.visible
          })}>
          <div 
          className={classnames("buttonContainer")}>
            <button>Price</button>
            <button>Rooms</button>
            <button>Filters</button>
          </div>
        </div>
        {/* End filter buttons */}
        <ContentDiv>
          <h1>Hi 1</h1>
          <h1>Hi 2</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
          <h1>Hi</h1>
        </ContentDiv>
      </div>      
      <footer id="footer" className={`footer + ${this.state.menu}`}>
          <div class="container">
            <div class="nav-footer">
              <h3>Raíces</h3>
              <nav class="menu">
                <a href="#">Careers</a>
                <a href="#">Press</a>
                <a href="#">Policies</a>
                <a href="#">Help</a>
              </nav>
            </div>
            <div class="nav-footer">
              <h3>Discover</h3>
              <nav class="menu">
                <a href="#">Trust & Safety</a>
                <a href="#">Travel Credit</a>
                <a href="#">Gift Cards</a>
                <a href="#">Raíces Citizen</a>
                <a href="#">Events <span class="new">New</span></a>
              </nav>
            </div>
            <div class="nav-footer">
              <h3>Hosting</h3>
              <nav class="menu">
                <a href="#">Why Host</a>
                <a href="#">Hospitality</a>
                <a href="#">Responsible Hosting</a>
                <a href="#">Community Center</a>
              </nav>
            </div>      
            <div class="nav-footer">            
            <h3>Legal</h3>
              <nav class="menu">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Sitemap</a>             
              </nav>
            </div>         
          </div>
        </footer>
      <a 
        href="#footer" 
        class="footerBtn"
        onClick={this.toggleMenu}
      >
        {this.state.menu === 'active' ? "x Close" : "Terms, Privacy, Currency & more"}
      </a>      
    </SearchPageStyle>
    )
  }
}

export default SearchAirBnB;
