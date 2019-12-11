import React, { Component } from 'react';
import styled from 'styled-components';
import AirBnBNav from './AirBnBNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown as falCaretDown } from '@fortawesome/pro-regular-svg-icons'

//todo create topMenu open/no in state 
// apply .active state to .logo (done)
// apply .active state to body  (done)
// apply .active state to topMenu (done)
// apply .open to logo i 
// apply .active to .back

const HomePageStyle = styled.div`
  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
    box-sizing: border-box;
    min-height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  svg {
    width: 35px;
    height: 35px;
  }

  body {
    min-height: 100%;
    background: linear-gradient(to top, #dfe9f3 0%, white 100%);
  }
  body {
    font-family: 'Fira Sans', sans-serif; 
    width: 100%;
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

  .hero {
    height: 100vh;
    min-height: 700px;
    background-image: url(https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575321901/Raices/Medellin/colombia-2722716.jpg);
    background-size: cover;
    background-position: bottom center;
    display: grid;
    grid-template-rows: 150px auto;
  }
  main {
    margin-bottom: 4rem;
  }
  
  /* The Floating Form */
  .search-form-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    width: 90vw;    
    min-width: 200px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    .search-form-container {
      grid-template-columns: 1fr 2fr;
      align-items: flex-start;
    }
  }
  .search-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
  }
  .search-form h1 {
    margin: 0 0 1rem 0;
  }

  .search-form form {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
  }
  .search-form .field {
    /** Position from the parent element **/
    grid-column: 1 / 3;
    /** Position the labels **/
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: .5rem;
  }
  .search-form .date {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: .5rem;
  }
  .search-form .date {
    grid-row: 2 / 3; 
  }
  .search-form .date:nth-child(1) {
    grid-column: 1 / 2;
  }
  .search-form .date:nth-child(2) {
    grid-column: 2 / 3;
  }
  .search-form label {
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: bold;
  }
  .search-form input[type="text"],
  .search-form input[type="date"],
  .search-form select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: .8rem;
    border: 1px solid #e1e1e1;
    background-color: white;
    overflow: hidden;
  }
  .submit {
    grid-column: 2 / 3;
    display: grid;
    justify-content: flex-end;
  }
  .submitBtn {
    background-color: rgb(255, 90, 95);
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    border:none;
  }
  /* End Floating Form */
  
  /* The Jumbo Card */
  .jumbo-container {
    height: 400px;
    background-image: url(https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575586686/Raices/cookingclass.jpg);
    background-position: bottom center;  
    background-size: cover;
    background-position: bottom center;
    display: grid;
    margin: 0 auto;
    align-items: center;
  }
  @media (min-width: 1440px){
    .jumbo-container {
      border-radius: 8px;
      max-width: 1292px;
    }
  }
  .jumbo {
    width: 90%;
    margin: 0 auto;
    color: #fff;
  }
  .jumbo h2 {
    margin: 0;
    width: 100%;
  }
  .learnButton {
    margin-top: 40px;
    height: 43px;
    width: 133px;
  }
  .learnButton span {
    color: black;
    background-color: #fff;   
    padding: 14px 24px; 
    border-radius: 8px;
  }
  /* End Jumbo Card */

  /* The Mini Jumbo */
  .miniJumbo {
    width: 90%;
    margin: 0 auto;
  }
  .miniJumbo h2 {
    margin: 0;
  }
  .miniJumbo .imageOverlay {
    position: relative;
    z-index: 1;
    text-align: center;
    height: 300px;
  }
  .miniJumbo .imageOverlay .text {
    position: absolute;
    top: 50%;    
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;    
  }
  .miniJumbo .imageOverlay .text p {
    background-color: #fff;
    color: black;
    padding: 1rem 2rem;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
    }
  }
  .miniJumbo img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  .miniJumbo .image .span,
  .miniJumbo .image .button {
    position: absolute;
    z-index: 2;
    top: 10px;
  }
  .miniJumbo .image .button {
    top: 30px;
    margin: 0 auto;
  }
  /* End Mini Jumbo */

  
 

  /* The Show All Divider */
  .card.show {
    display: grid;
    width: 100%;
    margin: 1rem auto 1rem auto;
    background-color: #fff;
    border-radius: 5px;        
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 1px solid #484848;
    color: #484848;
    width: 90%;
  }
  .card.show:hover {
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    .card.show {
      border: none;
      justify-content: flex-start;
    }
    .card.show:hover {
      text-decoration: underline;
    }
  }
  /* End Show All Divider */
  .main-nav {
    display: none;
  }
  @media (min-width: 768px) {
    .main-nav {
      grid-column: 3 / 4;
      display: grid;
      justify-content: flex-end;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .main-nav a {
      color: #fff;
      text-decoration: none;
      font-size: .8rem;
      padding: 1rem 1rem 2rem 1rem;
      text-align: center;
    }
    .main-nav a:hover {
      border-bottom: 1px solid #fff;
    }
  }

  main > section {
    margin-bottom: 2rem;
  }
  
  .card img {
    display: block;
    width: 100%;    
    border-radius: 5px;
  }
  
  
  .card .title {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
  }
  .card .price {
    font-size: .9rem;
  }
  .card .price.new {
    background-color: rgb(0, 119, 126);
    padding: .4rem .4rem .4rem .4rem;
    color: #fff;
    border-radius: 5px;
  }
  
  .footerBtn {
    display: none;
    z-index: 3;
  }
  @media(min-width: 768px){
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
`
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
const CardContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  .cards-container {
    grid-template-columns: repeat(auto-fit, minmax(${props => props.cardWidth}, 1fr));
  }
  .card {
    position: relative;
  }  
  .category {
    text-transform: uppercase;
    font-size: .9rem;
    font-weight: 700;
  }
  .name {
    overflow-wrap: break-word;
  }
  .info {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    left: 0;
    color: #fff;
    text-align: center;  
  }
  .card .infoFull, .infoAgent {
    padding-top: 1rem;
  }
  .info .title {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }
  .info .price {
    font-size: .8rem;
  }
   /* The Home Image Card */
   .card.home img {
    width: 100%;
    height: 230px;
    border-radius: 5px;
    object-fit: cover;
  }
  /* End Home Image Card */
  /* The Agent Category Card */

  .card.agent img {
    object-fit: cover;
  }
  .cards-container.agent {
    display: grid;  
    grid-gap: 1rem;
    /* grid-template-columns: repeat(auto-fit, minmax(125px, max-content)); */
    grid-template-columns: repeat(auto-fit, 165px);    
    justify-content: center;
  }
  @media (min-width: 768px){
    .cards-container.agent {
      justify-content: flex-start;
    }
  }
  /* End Agent Category Card */
  /** Colors and Categroes **/
  .lodgement {
    color: #274154;
  }
  .concert {
    color: #da595e;
  }
  .class {
    color: #598dda;
  }
  .outdoor-activity {
    color: #940ad4;
  }
  /* The Full Image Card */
  .content h2 {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .container {    
    margin: 0 auto;
    width: 90%;
  }
  section {
    margin-top: 40px;
  }   
  
  .cards-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card.neighborhoods img{
    width: 100%;
    height: 315px;
    border-radius: 5px;
    object-fit: cover;
  }
  
  .card img {
    width: 100%;
  }
  /* End Full Image Card */
  /* The Wide Image Card ie., nearby towns*/
  .card.wide img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
  }
  /* End Wide Image Card */
`

class HomePageAirBnB extends Component {
  state = {
    menu: "closed",
    topMenu: "closed"
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
  render () {
    return (
      <HomePageStyle active={this.state.topMenu === 'active' ? true : null}>
      <AirBnBNav toggleMenu={this.toggleMenu}/>      
      <div class="hero">
        <TopDropDownMenuActivator>
          {/* The Top Drop Down Menu Activator */}
          <div 
            class={`logo ${this.state.topMenu}`}
            onClick={this.toggleTopMenu}
          >
            <h2>Raíces</h2>            
            <div class="icons">
              <FontAwesomeIcon icon={falCaretDown} class={this.state.topMenu === 'active' ? 'open' : null}/>
            </div>
          </div>
          {/* End Top Drop Down Menu Activator */}
          {/* The Top Drop Down Menu */}
          <TopDropDownMenu className={this.state.topMenu}>      
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
            </TopDropDownMenu> 
            {/* End Top Drop Down Menu */}     
        </TopDropDownMenuActivator >
        {/* The Floating Form */}
        <div class="container search-form-container">
            <div class="search-form">
                <h1>Book unique homes and experiences.</h1>

                <form action="#">
                    <div class="field">
                        <label>Where</label>
                        <input type="text" placeholder="City"/>
                    </div>
                    <div class="date">
                        <label>Check in</label>
                        <input type="date"/>
                    </div>
                    <div class="date">
                        <label>Check Out</label>
                        <input type="date"/>
                    </div>
                    <div class="field">
                        <label>Guests</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div class="submit">
                        <input type="submit" class="submitBtn" value="Search"/>
                    </div>
                </form>
            </div>
        </div> 
        {/* End Floating Form */}    
      </div>      
      <main>
          <CardContainer cardWidth={'200px'}>
            <h2>Neighborhoods</h2>
            <div class="cards-container">
              {/* The Full Image Cards */}
              <div class="card neighborhoods">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575403179/Raices/Poblado/poblado.jpg" alt=""/>
                <div class="info">
                  <p class="title">El Poblado</p>
                  <p class="price">$210,000 USD Average</p>
                </div>
              </div> 
              {/* End Full Image Cards */}
              <div class="card neighborhoods">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575403683/Raices/Envigado/envigado.png" alt=""/>
                <div class="info">
                  <p class="title">Envigado</p>
                  <p class="price">$187,000 USD Average</p>
                </div>
              </div> 
              <div class="card neighborhoods">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575403905/Raices/Laureles/laureles_medellin.png" alt=""/>
                <div class="info">
                  <p class="title">Laureles</p>
                  <p class="price">$110,000 USD Average</p>
                </div>
              </div> 
              <div class="card neighborhoods">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575404089/Raices/Patio%20Bonito/patio_bonito.jpg" alt=""/>
                <div class="info">
                  <p class="title">Patio Bonito</p>
                  <p class="price">$193,000 USD Average</p>
                </div>
              </div> 
              <div class="card neighborhoods">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575404407/Raices/El%20Centro/centro.jpg" alt=""/>
                <div class="info">
                  <p class="title">El Centro</p>
                  <p class="price">$84,000 USD Average</p>
                </div>
              </div>               
            </div>               
          </CardContainer>
          <div class="card show"><span>Show all neighborhoods ></span></div>                    
          {/* The Jumbo Card */}
          <section className="jumbo-container">
            <div className="jumbo">
              <h5>Introducing</h5>
              <h2>Cooking</h2>
              <h5>On Raíces Experiences</h5>
              <div className="learnButton"><span>Learn more</span></div>
            </div>
          </section>
          {/* End Jumbo Card */}
          <CardContainer>
            <h2>Nearby Towns</h2>
            <div class="cards-container">
              {/* The Wide Image Card */}
              <div class="card wide">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575405400/Raices/San%20Rafael/sanrafael.jpg" alt=""/>
                <div class="info">          
                  <p class="title">
                    San Rafael
                  </p>
                  <p class="price">12 homes</p>
                </div>
              </div> 
              {/* End Wide Image Card */}
              <div class="card wide">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575405590/Raices/Guatape/guatape.jpg" alt=""/>
                <div class="info">
                  <p class="title">
                    Guatape
                  </p>
                  <p class="price">17 homes</p>
                </div>
              </div> 
              <div class="card wide">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575406654/Raices/Santa%20Fe%20de%20Antoquia/santafedeantoquia.jpg" alt=""/>
                <div class="info">
                  <p class="title">
                    Santa Fe de Antoquia 
                  </p>
                  <p class="price">13 homes</p>
                </div>
              </div> 
            </div>             
          </CardContainer>
          <div class="card show"><span>Show all towns ></span></div>
          {/* The Mini Jumbo */}
          <section className="miniJumbo">
            <h2>AirBnB Plus places to stay</h2>
            <h4>A selection of places to stay, verified for quality and design</h4>            
            <div className="imageOverlay">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment5.jpg" alt=""/>
              <div className="text">              
                <h3>Plus</h3>
                <p>Explore Stays</p>
              </div>
            </div>
          </section>
          {/* End Mini Jumbo */}
          <CardContainer>
            <h2>Unique homes for your next trip</h2>
            <div class="cards-container">              
              <div class="card home">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment3.jpg" alt=""/>
                <div class="infoFull">
                  <p class="category lodgement">
                    Beautiful house on the beach
                  </p>
                  <p class="title">
                    Beautiful house 2 bedrooms
                  </p>
                  <p class="price">$3,200 per night</p>
                </div>
              </div>               
              <div class="card home">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg" alt=""/>
                <div class="infoFull">
                  <p class="category lodgement">
                    1 room in Los Angeles
                  </p>
                  <p class="title">
                    1 room, downtown LA
                  </p>
                  <p class="price">$2,100 per night</p>
                </div>
              </div> 
              <div class="card home">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment5.jpg" alt=""/>
                <div class="infoFull">
                  <p class="category lodgement">
                    Cottage in the woods
                  </p>
                  <p class="title">
                    Cottage for 6 persons
                  </p>
                  <p class="price">$3,200 per night</p>
                </div>
              </div>           
            </div>             
          </CardContainer>
          <div class="card show"><span>Show all homes ></span></div>
          <CardContainer>
            <h2>Top rated agents</h2>
            <div class="cards-container agent">
              {/* The Agent Category Card */}
              <div class="card agent">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/g_face,c_fill,w_165,h_210/v1570485457/Raices/AgentPhotos/Lori_Diggs.jpg" alt=""/>
                <div class="infoAgent">
                  <p class="category class">
                    Negotiations
                  </p>
                  <p class="name">
                    Jennifer Smith
                  </p>
                  <p class="price">12 homes listed</p>
                </div>
              </div> 
              {/* End Agent Category Card */}
              <div class="card agent">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/g_face,c_fill,w_165,h_210/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg" alt=""/>
                <div class="infoAgent">
                  <p class="category concert">
                    New Contructions
                  </p>
                  <p class="name">
                    James Bannon
                  </p>
                  <p class="price">24 homes sold</p>
                </div>
              </div> 
              <div class="card agent">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/g_face,c_fill,w_165,h_210/v1570485457/Raices/AgentPhotos/James_Kim.jpg" alt=""/>
                <div class="infoAgent">
                  <p class="category class">
                    Contracts
                  </p>
                  <p class="name">
                    James Kim
                  </p>
                  <p class="price new">New Agent</p>
                </div>
              </div>
              <div class="card agent">
                <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/g_face,c_fill,w_165,h_210/v1570485457/Raices/AgentPhotos/Jill_Smith.jpg" alt=""/>
                <div class="infoAgent">
                  <p class="category outdoor-activity">
                    First Time Buyers
                  </p>
                  <p class="name">
                    Natalia Giraldo-Hincapie
                  </p>
                  <p class="price">30 homes sold</p>
                </div>
              </div>          
            </div>             
          </CardContainer>  
          <div class="card show"><span>Show all agents ></span></div>
        </main>
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
      
    </HomePageStyle>
    )
  }
}

export default HomePageAirBnB;
