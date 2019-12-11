import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// global styles to bump up z index of autocomplete 
import { createGlobalStyle } from 'styled-components'
// /* ${dom.css()} */ (add this to global styles if it doesn't work)

// styled to bump up z index of autocomplete 
const theme = {  
  // theme goes here
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
    body.active {
      overflow: hidden;
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
`
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>        
        <div>
          <GlobalStyle />
          <Meta />          
          {this.props.children}
        </div> 
      </ThemeProvider>
    )
  }
}

export default Page;
