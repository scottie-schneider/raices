import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';
import BottomNavForm from '../components/BottomNavForm'
import AgentIcon from '../components/icons/AgentIcon'
import ChatIcon from '../components/icons/ChatIcon'
import PrimaryButton from '../components/PrimaryButton';
import SmallLeadCard from '../components/SmallLeadCard';

const GridContainer = styled.div`
 .bottomNav {
    display: none !important;
  }
  
  @media(max-width: 700px){
    .bottomNav {
      display: flex !important;
    }
    .topNav {
      display: none !important;
    }
    .wrapper {
      margin-bottom: 74px !important;
    }
  }
  .grid{
    overflow-x: hidden;
    grid-template-columns: 100%;
    grid-template-rows: 50px 1fr 50px;
  }
 body {
  margin: 0!important;
  padding: 0!important;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Open Sans', Helvetica, sans-serif;
  box-sizing: border-box;
}

/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;
  width: 100vw;
}

.menu-icon {
  position: fixed; /* Needs to stay visible for all mobile scrolling */
  display: flex;
  top: 5px;
  left: 10px;
  align-items: center;
  justify-content: center;
  background-color: #DADAE3;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  padding: 12px;
}

/* Give every child element its grid name */
.header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ECF0F1;
}

/* Make room for the menu icon on mobile */
.header__search {
  margin-left: 42px;
}

.sidenav {
  grid-area: sidenav;
  height: 100%;
  overflow-y: auto;
  width: 240px;
  position: fixed;
  display: block;
  transform: translateX(-245px);
  transition: all .6s ease-in-out;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2; /* Needs to sit above the hamburger menu icon */
  background-color: #D3D9DD;
  color: #7F8C8D;
}
.quickview {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 60px;
}
.quickview__item {
  display: flex;
  align-items: center;
  flex-direction: column;
  letter-spacing: 1px;
}
.quickview__item-total {
  font-size: 32px;
  margin-bottom: 2px;
}
.quickview__item-description {
  display: flex;
  font-size: 16px;
  text-align: center;
  align-items: center;
}
.text-light {
  margin-left: 2px;
  font-size: 16px;
  text-align: center;
}
.sidenav.active {
  transform: translateX(0);
}

.sidenav__close-icon {
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
}

.sidenav__list {
  padding: 0;
  margin-top: 85px;
  list-style-type: none;
}

.sidenav__list-item {
  padding: 20px 20px 20px 40px;
  color: #1E2227;
}

.sidenav__list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.main {
  grid-area: main;
  background-color: #fff;
  display: block;
}

/* .main-header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  height: 150px;
  background-color: #e3e4e6;
  color: slategray;
} */
.main-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 250px;
  color: #fff;
  background-size: cover;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/lake-shadow-water.jpg");
  margin-bottom: 20px;

  &__intro-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column; // Mobile-first; break out to row on medium + screens
    align-items: center;
    justify-content: space-between;
    height: 160px;
    padding: 12px 30px;
    background: rgba(255,255,255,.12);
    font-size: 26px;
    letter-spacing: 1px;
  }

  &__welcome {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
      margin-bottom: 8px;
      font-size: 26px;
    }

    &-subtitle {
      font-size: 18px;
    }
  }
}
.main-header__intro-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  padding: 0 30px;
  height: 180px;
}
/* .main-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-auto-rows: 94px;
  grid-gap: 20px;
  margin: 20px;
} */

.main-overview {
  display: flex;
  align-items: center;
  justify-content: center;
}
.overviewcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #2ECC71;
  color: #fff;
  max-width: 400px;
  p {
    margin: 0;
  }
}

.main-cards {
  column-count: 1;
  column-gap: 20px;
  margin: 20px;
}

.card {
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 132px;
  grid-gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 #D2D3D7;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;
}

/* Force varying heights to simulate dynamic content */
.card:first-child {
  height: 485px;
}

.card:nth-child(2) {
  height: 200px;
}

.card:nth-child(3) {
  height: 265px;
}

.footer {
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #7F8C8D;
  color: #fff;
}

/* Non-mobile styles, 750px breakpoint */
@media only screen and (min-width: 46.875em) {
  /* Show the sidenav */
  .grid {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "sidenav header"
      "sidenav main"
      "sidenav footer";
  }

  .header__search {
    margin-left: 0;
  }

  .sidenav {
    position: relative;
    transform: translateX(0);
  }

  .sidenav__close-icon {
    visibility: hidden;
  }
}

/* Medium screens breakpoint (1050px) */
@media only screen and (min-width: 65.625em) {
  /* Break out main cards into two columns */
  /* .main-cards {
    column-count: 2;
  } */
}
`
const ProfilePic = styled.div`
  height: 362px;
  width: 375px;
  background-color: grey;
  z-index: 1;
  position: relative;
  grid-area: profile;
  margin: auto;
`

const BottomSheet = styled.div`
  width: inherit;
  z-index: 2;
  position: relative;
  top: -20px;
  background-color: #fff;
  border-radius: 0;
  height: 1410px;
  @media (max-width: 700px){
    border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  }
`

const ProfileTemplate = props => (
    <GridContainer>
      <div class="grid">
        <header class="header">
          <div class="header__search">Search...</div>
          <Image className="header__avatar"
            src={"https://res.cloudinary.com/dvqw5uhrr/image/upload/v1570485457/Raices/AgentPhotos/Jim_Johnson.jpg"}
            height={"45px"}
            width={"45px"}    
            profile
          />
        </header>

        <aside className="sidenav">
          <div class="sidenav__close-icon">
            <i class="fas fa-times sidenav__brand-close"></i>
          </div>
          <ul class="sidenav__list">
            <li class="sidenav__list-item">Dash</li>
            <li class="sidenav__list-item">Clients</li>
          </ul>
        </aside>

        <main class="main">
          <div class="main-header">
            <div class="main-header__intro-wrapper">
              <div class="main-header__welcome">
                <div class="main-header__welcome-title text-light">Welcome, <strong>Scottie</strong></div>
                <div class="main-header__welcome-subtitle text-light">How are you today?</div>
              </div>
              <div class="quickview">
                <div class="quickview__item">
                  <div class="quickview__item-total">41</div>
                  <div class="quickview__item-description">
                    <AgentIcon 
                      height={16}
                      width={16}
                      fill={"#fff"}
                    />
                    <span class="text-light">Clients</span>
                  </div>
                </div>
                <div class="quickview__item">
                  <div class="quickview__item-total">64</div>
                  <div class="quickview__item-description">
                    <ChatIcon 
                      height={16}
                      width={16}
                      fill={"#fff"}
                    />
                    <span class="text-light">Messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main-overview">
            <PrimaryButton text={"Add a new client"}/>       
          </div>

          <div class="main-cards">
            <div class="card">
              <SmallLeadCard />
              <SmallLeadCard />
              <SmallLeadCard /> 
              <SmallLeadCard />
              <SmallLeadCard />
              <SmallLeadCard /> 
              <SmallLeadCard />
              <SmallLeadCard />
              <SmallLeadCard />              
            </div>
            {/* <div class="card">Card</div>
            <div class="card">Card</div> */}
          </div>
        </main>

        <footer class="footer">
          <div class="footer__copyright">&copy; 2019</div>
          <div class="footer__signature">Made with love by Scottie</div>
        </footer>
      </div>
      <BottomNavForm />
    </GridContainer>
);

export default ProfileTemplate;