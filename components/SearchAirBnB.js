import React, { Component } from 'react';
import styled from 'styled-components';
import AirBnBNav from './AirBnBNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown as falCaretDown } from '@fortawesome/pro-regular-svg-icons'
import { faSearch as farSearch } from '@fortawesome/pro-regular-svg-icons'
import classnames from "classnames";
import InfiniteScroll from "react-infinite-scroll-component";
import { Ring } from "react-awesome-spinners";

// slider bar 
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./components"; // example render components - source below
const sliderStyle = {
  position: "relative",
  width: "100%"
};

const domain = [100000, 500000];
const defaultValues = [100000, 200000];

// styles
import TopDropDownMenu from './styles/TopDropDownMenu';
import FilterButtons from './styles/FilterButtons';
import SearchPageStyle from './styles/SearchPageStyle';
import SearchBar from './styles/SearchBar';
import SearchBarHeader from './styles/SearchBarHeader';
import CardContainer from './styles/CardContainer';
import MainStyle from './styles/MainStyle';

// dropdown and filter popups 
const PopUp = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2000 !important;
  position: fixed !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  background-color: #fff;
  height: 100vh;
  width: 100vw;  
  .header {
    width: 100%;
    height: 50px;
    border-bottom: .5px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: .5rem 1rem .5rem 1rem;
    .close {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      outline: none;
    }
    .clear:hover {
      text-decoration: underline;
    }
  }
  .filters {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
    section {
      display: block;
      flex-direction: column;
      border-bottom: 1px solid lightgrey;
      padding: 0 .5rem 2rem .5rem;
      width: 90%;  
      margin: auto;    
      /* Slider */
      .sliderHolder {
        margin: 1rem auto;
        padding: 0 1rem 0 1rem;
        width: 100%;
        height: 60px;
      }
      .priceInputs {             
        display: grid;
        align-items: center;
        justify-content: space-between;        
        overflow: hidden;      
        max-width: 100%;  
        margin-top: 28px;
        grid-template-columns: 1fr 1rem 1fr;        
      }
      .priceInput {
        position: relative;
        display: flex;
        min-width: 0;
        width: 100%;
        height: 56px;
        cursor: text;      
        margin: 0;
      }
      .spacer {
        margin: 8px;
        text-align: center;
        height: 1rem;
        display: flex;
        justify-content: center;
      }
      input {
        box-shadow: 0;
        flex: 1;
        outline: 0;
        border-radius: 8px;                     
        width: 100%;
      }
      label {
        position: absolute;
        top: .5rem;
        left: .5rem;
        font-size: .7rem;
      }
      .dollar {
        position: absolute;
        top: 1.7rem;
        left: .5rem;
        font-size: .9rem;
      }
      .price-slider {
        width: 300px;
        margin: auto;
        text-align: center;
        position: relative;
        height: 6em;
      }
      .price-slider svg,
      .price-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      input[type=number] {
        border: 1px solid #ddd;
        padding-left: 1rem;
        padding-top: 1rem;
        font-size: 1em;
        -moz-appearance: textfield;
      }
      input[type=number]::-webkit-outer-spin-button,
      input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input[type=number]:invalid,
      input[type=number]:out-of-range {
        border: 2px solid #e60023;
      }
      input[type=range] {
        -webkit-appearance: none;
        width: 100%;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        background: #1da1f2;
      }
      input[type=range]:focus::-ms-fill-lower {
        background: #1da1f2;
      }
      input[type=range]:focus::-ms-fill-upper {
        background: #1da1f2;
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: #1da1f2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }
      input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
      }
      input[type=range]::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: #1da1f2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
      }
      input[type=range]::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-ms-fill-lower,
      input[type=range]::-ms-fill-upper {
        background: #1da1f2;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
      }
      input[type=range]::-ms-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
      }
      /* End Slider */
      .category {
        display: flex;
        border: 1px solid red;
        justify-content: space-between;
        margin-bottom: 1rem;
        .selectors {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 125px;
          border: 1px solid blue;
          button {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: transparent;
            border: 1px solid lightgrey;
          }
        }
      }
    }
  }
`;

class SearchAirBnB extends Component {
  state = {
    menu: "closed",
    topMenu: "closed",
    button: false,
    prevScrollpos: 0,
    visible: true,
    searchFocused: false,
    loading: false,
    filterPopUp: false,
    values: defaultValues,
    // only to replicate the loading of new cards
    cards: [
      {
        img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
        desc: "1 room in Los Angeles",
        title: "1 room, downtown LA",
        price: "$340,043"
      },
      {
        img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
        desc: "1 room in Los Angeles",
        title: "1 room, downtown LA",
        price: "$340,043"
      },
      {
        img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
        desc: "1 room in Los Angeles",
        title: "1 room, downtown LA",
        price: "$340,043"
      }
    ]
  }
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    const newArr = [{
      img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
      desc: "1 room in Los Angeles",
      title: "1 room, downtown LA",
      price: "$340,043"
    },{
      img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
      desc: "1 room in Los Angeles",
      title: "1 room, downtown LA",
      price: "$340,043"
    },{
      img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
      desc: "1 room in Los Angeles",
      title: "1 room, downtown LA",
      price: "$340,043"
    },{
      img: "https://res.cloudinary.com/dvqw5uhrr/image/upload/q_auto/v1575420822/Raices/Apartment%20%28samples%29/apartment4.jpg",
      desc: "1 room in Los Angeles",
      title: "1 room, downtown LA",
      price: "$340,043"
    }]
    setTimeout(() => {
      this.setState(prevState => ({
        cards: [...prevState.cards, ...newArr]             
      }));  
    }, 1500);
  };
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
      this.setState({
        topMenu: "active",
        visible: false
      })
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
  filterPopUp = (type) => {
    // show popup
    this.setState({ filterPopUp: true })
    // set state based off type (price, rooms, filters etc)
  }
  closeFilterPopUp = () => {
    this.setState({ filterPopUp: false })
  }
  onChange = values => {
    this.setState({ values });
  };
  render () {
    return (
      <SearchPageStyle active={this.state.topMenu === 'active' ? true : null}>
      <AirBnBNav toggleMenu={this.toggleMenu}/> 
      {this.state.filterPopUp ? 
      <PopUp>
        <div className="header">
          <button 
            className="close"
            onClick={this.closeFilterPopUp}
          >
            X
          </button>
          <p 
            className="clear"            
          >
            Clear
          </p>
        </div>
        <div className="filters">
          <section>
            <h3>Rooms</h3>
            <h4>Select the number of rooms you'd like</h4>
            <div className="category">
              <p>Beds</p>
              <div className="selectors">
                <button className="minus">-</button>
                <p>0</p>
                <button className="plus">+</button>
              </div>
            </div>
            <div className="category">
              <p>Baths</p>
              <div className="selectors">
                <button className="minus">-</button>
                <p>0</p>
                <button className="plus">+</button>
              </div>
            </div>
          </section>
          <section>
            <h3>Price</h3>
            <h4>The average home price is $245,000</h4>            
            <div className="sliderHolder">
              <Slider
                mode={2}
                step={1}
                domain={domain}
                rootStyle={sliderStyle}          
                onChange={this.onChange}
                values={this.state.values}
              >
                <Rail>
                  {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                </Rail>
                <Handles>
                  {({ handles, getHandleProps }) => (
                    <div className="slider-handles">
                      {handles.map(handle => (
                        <Handle
                          key={handle.id}
                          handle={handle}
                          domain={domain}
                          getHandleProps={getHandleProps}
                        />
                      ))}
                    </div>
                  )}
                </Handles>
                <Tracks left={false} right={false}>
                  {({ tracks, getTrackProps }) => (
                    <div className="slider-tracks">
                      {tracks.map(({ id, source, target }) => (
                        <Track
                          key={id}
                          source={source}
                          target={target}
                          getTrackProps={getTrackProps}
                        />
                      ))}
                    </div>
                  )}
                </Tracks>
                <Ticks count={5}>
                  {({ ticks }) => (
                    <div className="slider-ticks">
                      {ticks.map(tick => (
                        <Tick key={tick.id} tick={tick} count={ticks.length} />
                      ))}
                    </div>
                  )}
                </Ticks>
              </Slider>
            </div>
            <div className="priceInputs">
              <div className="priceInput">
                <label for="minimumPrice">Minimum Price</label>
                <div className="dollar">$</div>
                <input type="number"
                  id="minimumPrice"               
                  value={this.state.values[0]}
                />
              </div>
              <div className="spacer">
                <span>-</span>
              </div>
              <div className="priceInput">
                <label for="maximumPrice">Maximum Price</label>
                <div className="dollar">$</div>
                <input type="number" 
                  id="maximumPrice"
                  value={this.state.values[1]}
                />
              </div>
            </div>
          </section>
        </div>
      </PopUp> 
        : 
      null}
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
          <SearchBar>
            <FontAwesomeIcon icon={farSearch} /> 
            <input placeholder="search"
              onFocus={this.toggleButtons}
              onBlur={this.toggleButtons}
            />
          </SearchBar>          
              {/* End Search Bar Header */}
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
          {/* End search bar and buttons */}            
        </SearchBarHeader>
        {/* The filter buttons */}
        <FilterButtons visible={this.state.visible}>
          <div 
          className={classnames("buttonContainer")}>
            <button onClick={() => this.filterPopUp("price")}>Price</button>
            <button onClick={() => this.filterPopUp("rooms")}>Rooms</button>
            <button onClick={() => this.filterPopUp("filters")}>Filters</button>
          </div>
        </FilterButtons>
        <MainStyle search>      
          <CardContainer>
            <h2>Unique homes for your next trip</h2>
            <InfiniteScroll
              className="cards-container"
              dataLength={this.state.cards.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<div className="loading"><Ring/></div>}
            >
              {this.state.cards.map((card, index) => (
                  <div className="card home">
                    <img src={card.img} alt=""/>
                    <div className="infoFull">
                      <p className="category lodgement">
                        {card.desc}
                      </p>
                      <p className="title">
                        {card.title}
                      </p>
                      <p className="price">{card.price}</p>
                    </div>
                  </div> 
              ))}     
            </InfiniteScroll>    
          </CardContainer>
      </MainStyle>   
    </SearchPageStyle>
    )
  }
}

export default SearchAirBnB;
