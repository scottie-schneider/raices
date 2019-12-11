import styled from 'styled-components';

const GridContainer = styled.div`
  .navButton {
    background-color: none;
    display: none;
    height: 44px;
    width: 44px;
    position: absolute;
    visibility: visible;
    top: 8px;
    left: 252px;
    z-index: 2;
    svg {
      justify-self: center;
      align-self: center;
      color: white;
    }
  }
  svg {
    color: white;
  }
  /* Modifications for Date Range Picker */
  .react-daterange-picker {
    display: inline-flex;
    position: relative;
  }
  .react-daterange-picker,
  .react-daterange-picker *,
  .react-daterange-picker *:before,
  .react-daterange-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-daterange-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-daterange-picker__wrapper {
    display: flex;
    border: thin solid gray;
  }
  .react-daterange-picker__inputGroup {
    min-width: calc((4px * 3) +  0.54em * 8  +  0.217em * 2);
    flex-grow: 1;
    display: flex;
    padding: 0 2px;
    align-items: baseline;
    box-sizing: content-box;
  }
  .react-daterange-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }
  .react-daterange-picker__inputGroup__input {
    min-width: 0.54em;
    height: 100%;
    position: relative;
    padding: 0 1px;
    border: 0;
    background: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-daterange-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-daterange-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-daterange-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-daterange-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px +  0.54em);
  }
  .react-daterange-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-daterange-picker__button:enabled {
    cursor: pointer;
  }
  .react-daterange-picker__button:enabled:hover .react-daterange-picker__button__icon,
  .react-daterange-picker__button:enabled:focus .react-daterange-picker__button__icon {
    stroke: #0078d7;
  }
  .react-daterange-picker__button:disabled .react-daterange-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-daterange-picker__button svg {
    display: inherit;
  }
  .react-daterange-picker__calendar {
    width: 350px;
    max-width: 100vw;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-daterange-picker__calendar--closed {
    display: none;
  }
  .react-daterange-picker__calendar .react-calendar {
    border-width: thin;
  }
  /* End Modifications for Date Range Picker */

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
    grid-template-rows: 1fr 50px;
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
  grid-template-rows: 1fr 50px;
  grid-template-areas:
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


.sidenav {
  position: fixed; 
  grid-area: sidenav;
  height: 100%;
  overflow-y: auto;
  width: 240px;
  transform: translateX(-245px);
  transition: all .6s ease-in-out;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2; 
  background-color: ${props => props.theme.lowerPriorityText};
  color: #fff;
}
.sidenav.is-collapsed {
  display: none;
  /* transform: translateX(-245px);
  transition: all .6s ease-in-out; */
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
  .logout {
    margin-top: 50px;
  }
}

.sidenav__list-item {
  padding: 20px 20px 20px 40px;
  color: #fff;
}

.sidenav__list-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.main {
  grid-area: main;
  background-color: ${props => props.theme.backgroundBlue};
  display: block;
  
}

.main-header {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100px;
  color: #fff;
  margin-top: 10px;
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
  background: none;
}


.overviewcard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props => props.theme.blue};
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 132px;
  grid-gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background:rgba(255,255,255,0.1);
  box-shadow: 0 5px 10px 0 #000;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  box-sizing: border-box;
}

/* Force varying heights to simulate dynamic content */

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
    grid-template-columns: 1fr;
    grid-template-areas:
      "main"
      "footer";
  }
  .sidenav {
    display: none;
    transform: translateX(-245px);
    transition: all .6s ease-in-out;
  }
  .navButton {
    background-color: none;
    display: grid;
    left: 10px;
  }
  ${({ nav }) => nav && `
    .grid {
      grid-template-columns: 240px 1fr;
      grid-template-areas:
        "sidenav main"
        "sidenav footer";
      }
      .sidenav {
        display: grid;                
      }
  `}

  .sidenav {
    transform: translateX(0);
  }

}

/* Medium screens breakpoint (1050px) */
@media only screen and (min-width: 65.625em) {
  /* Break out main cards into two columns */
  /* .main-cards {
    column-count: 2;
  } */
}

.at-a-glance {
  height: 262px;
  display: grid;
  align-items: center;
  grid-gap: 10px;
  grid-template-rows: minmax(50px, 125px) 1fr;
  grid-template-columns: 1fr;
  height: 100%;
  .cardHeader {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    flex-wrap: wrap;
    border-bottom: ${props => props.theme.borderBottom};
    .title {
      color: #fff;
      font-size: 36px;
    }
    .datepicker {
      margin-left: 10px;
      height: 100%;
      padding-bottom: 5px;
    }
    .react-daterange-picker__wrapper {
      border: none;
    }
  }
  .metrics {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 10px;
  }
  .metric {
    display: grid;
    justify-items: center;
    grid-gap: 10px;
    .label {
      font-size: 18px;
      color: #fff;
    }
    .box {
      display: grid;
      align-content: center;
      width: 100%;
      padding-bottom: 100%;
      position: relative;
      .circle {
        display: grid;
        justify-items: center;
        align-content: center;
        border: 3px solid #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-width: 4px;
        border-style: solid;
        border-radius: 50%;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
        .number {
          font-size: 36px;
          color: #fff;
        }
        .title {
          font-style: italic;
        }
        .actual {

        }
        .budgeted {
          color: ${props => props.theme.green};
        }
      }
    }
  }
}
`
export default GridContainer;