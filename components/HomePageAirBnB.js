import React, { Component } from 'react';
import styled from 'styled-components';
import AirBnBNav from './AirBnBNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown as falCaretDown } from '@fortawesome/pro-regular-svg-icons'

// styles
import CardShow from './styles/CardShow';
import MiniJumbo from './styles/MiniJumbo';
import TopDropDownMenu from './styles/TopDropDownMenu';
import TopDropDownMenuActivator from './styles/TopDropDownMenuActivator';
import CardContainer from './styles/CardContainer';
import FloatingSearchForm from './styles/FloatingSearchForm';
import JumboCard from './styles/JumboCard';
import FullScreenHero from './styles/FullScreenHero';
import FullFooter from './styles/FullFooter';
import FooterButton from './styles/FooterButton';
import MainStyle from './styles/MainStyle';

const HomePageStyle = styled.div`
  /* apply a natural box layout model to all elements, but allowing components to change */
  svg {
    width: 35px;
    height: 35px;
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
      <FullScreenHero>
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
        <FloatingSearchForm>
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
        </FloatingSearchForm> 
        {/* End Floating Form */}    
      </FullScreenHero>      
      <MainStyle>
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
          <CardShow><span>Show all neighborhoods ></span></CardShow>                    
          {/* The Jumbo Card */}
          <JumboCard url={'https://res.cloudinary.com/dvqw5uhrr/image/upload/v1575586686/Raices/cookingclass.jpg'}>
            <div className="jumbo">
              <h3>Introducing</h3>
              <h2>Cooking</h2>
              <h4>On Raíces Experiences</h4>
              <div className="learnButton"><span>Learn more</span></div>
            </div>
          </JumboCard>
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
          <CardShow><span>Show all towns ></span></CardShow>
          {/* The Mini Jumbo */}
          <MiniJumbo>
            <h2>AirBnB Plus places to stay</h2>
            <h4>A selection of places to stay, verified for quality and design</h4>            
            <div className="imageOverlay">
              <img src="https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment5.jpg" alt=""/>
              <div className="text">              
                <h3>Plus</h3>
                <p>Explore Stays</p>
              </div>
            </div>
          </MiniJumbo>
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
          <CardShow><span>Show all homes ></span></CardShow>
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
          <CardShow><span>Show all agents ></span></CardShow>
        </MainStyle>
        <FullFooter active={this.state.menu === 'active'}>
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
        </FullFooter>
        <FooterButton 
          onClick={this.toggleMenu}
        >
          {this.state.menu === 'active' ? "x Close" : "Terms, Privacy, Currency & more"}
        </FooterButton>
    </HomePageStyle>
    )
  }
}

export default HomePageAirBnB;
