import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
// global styles to bump up z index of autocomplete 
import { createGlobalStyle } from 'styled-components'
// styled to bump up z index of autocomplete 
const GlobalStyle = createGlobalStyle`
  body {
    .pac-container {
      z-index: 1051 !important;
    }
    .modal {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`

import WrapperDiv from './WrapperDiv';
import Meta from './Meta';


const theme = {
  themeBlue: '#1867B5',
  blue: '#1867B5',
  oldBrightBlue: '#1d8cf8',
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
  darkBackground: 'rgb(47, 52, 55)',
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
        <WrapperDiv>
        <GlobalStyle />
          <Meta />
            {this.props.children}
        </WrapperDiv>
      </ThemeProvider>
    )
  }
}

export default Page;
