import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// global styles to bump up z index of autocomplete 
import { createGlobalStyle } from 'styled-components'
// styled to bump up z index of autocomplete 
const theme = {
  // colors
  blue: '#3498DB',
  green: '#2ECC71',
  red: '#E74C3C',
  orange: '#E67E22',
  darkGrey: '#7F8C8D',
  grey: '#95A5A6',
  accentGrey: '#D3D9DD',
  backgroundGrey: '#ECF0F1',
  black: '#1E2227',
  lowerPriorityText: '#42464C',
  white: '#fff',
  // colors - primary button
  primaryButtonNormal: '#6EB43F',
  primaryButtonPressed: '#3D7D13',
  primaryButtonHover: '#4A8C1E',
  //colors - floating blue button
  floatingBlueButtonNormal: '#3498DB',
  floatingBlueButtonPressed: '#207AB6',
  floatingBlueButtonHover: '#3FAFFA',
  // colors - floating grey button
  floatingGreyButtonNormal: '#7F8C8D',
  floatingGreyButtonPressed: '#484A4A',
  floatingGreyButtonHover: '#626465',
  // Image Box Shadow Color
  imageBoxShadow: "rgba(172, 177, 192, 50)",
  // forms
  naturalBorder: '1px solid rgb(252,254,255, .2)',
  inputValid: '#00f2c3',
  inputInvalid: '#ec250d',
  inputSelect: '#11cdef',
  // Labels and Form Controls
  labelColor: 'rgb(252,254,255, .8)',
  // width of inputs
  postalWidth: '100px',
  emailWidth: '200px',
  nameWidth: '150px',
  phoneWidth: '150px',
  addressWidth: '300px',
  cityWidth: '175px',
  stateWidth: '175px',
  yearWidth: '80px',
  dateWidth: '200px',
  priceWidth: '125px',
  textWidth: '300px',
  selectWidth: '300px',
  textAreaWidth: '500px',
  // cards
    // colors
    backgroundCardColor: 'rgb(47, 52, 55)',
    secondaryCardColor: 'rgb(63, 68, 71)',
  // text
  primaryTextColor: 'rgb(252,254,255)',
  secondaryTextColor: 'rgb(252,254,255, .8)',
  disabledTextColor: 'rgb(252,254,255, .5)',
  // buttons
  primaryButtonFontSize: '14px',
  // border radius
  borderRadius: '0.2857rem',
}
const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Fira Sans', sans-serif;    
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      padding: 0;
      margin: 0;
      font-family: 'Fira Sans', sans-serif; 
      background-color: #F7F8FA;
    }
    a {
      text-decoration: none;
      color: ${theme.black};
    }
    button {  font-family: 'Fira Sans', sans-serif;  }
  body {
    .pac-container {
      z-index: 1051 !important;
    }
    .modal {
      background: rgba(0, 0, 0, 0.4);
    }  
  }
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
`

import WrapperDiv from './WrapperDiv';
import Meta from './Meta';
import WebNavbar from './WebNavbar'
import BottomNav from './BottomNav'


const lightTheme = {
  blue: '#1d8cf8',
  purple: '#e14eca',
  green: '#00bf9a',
  red: '#fd5d93',
  orange: '#ff8d72',
  white: '#f5f6fa',
  brightWhite: '#fff',
  lightGrey: 'grey',
  navBlue: '#1d253b',
  brightBlue: '#1d8cf8',
  linkNotHovered: 'rgba(255, 255, 255, 0.8)',
  // cards
  cardStatsBorderColor: 'rgba(29, 37, 59, 0.1)',
  cardStatsColor: 'color: #1d253b',

}

class Page extends Component {
  static async getInitialProps({ req }) {
    const { protocol, host } = absoluteUrl(req)
    const url = `${protocol}//${host}`
    return {
      url
    }
  }
  state = {
    sidebarOpened: false,
    settingsMenuOpened: false,
    color: "primary",
    navSelection: "dashboard",
    lightMode: false,
  }

  toggleSidebar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
    document.documentElement.classList.toggle("nav-open");
  };

  toggleSettingsMenu = () => {
    // toggle className "show" on menu
    this.setState({ settingsMenuOpened: !this.state.settingsMenuOpened })
  }

  navClick = (selection) => {
    this.setState({ navSelection: selection })
  }
  toggleLightMode = () => {
    this.setState({ lightMode: !this.state.lightMode })
  }
  render() {
    return (
      <ThemeProvider theme={theme}>        
        <WrapperDiv className="wrapper">
        <GlobalStyle />
          <Meta />
            {this.props.children}
        </WrapperDiv>
      </ThemeProvider>
    )
  }
}

export default Page;
