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
// end slider bar

// styles
import TopDropDownMenu from './styles/TopDropDownMenu';
import FilterButtons from './styles/FilterButtons';
import SearchPageStyle from './styles/SearchPageStyle';
import SearchBar from './styles/SearchBar';
import SearchBarHeader from './styles/SearchBarHeader';
import CardContainer from './styles/CardContainer';
import MainStyle from './styles/MainStyle';
import FilterPopUp from './styles/FilterPopUp'


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
    ],
    // Accordion states
    amenitiesOpen: false,
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
      <FilterPopUp>
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
          {/* Type */}
          <section>
            <h3>Type</h3>
            <h4>Would you like to buy, or rent?</h4>
            <div className="category">
              <p>Buy</p>
              <div className="selectors">
                <label class="switchButton">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className="category">
              <p>Rent</p>
              <div className="selectors">
                <label class="switchButton">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </section>
          {/* Rooms */}
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
          {/* Price */}
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
                <label className="label" for="minimumPrice">Minimum Price</label>
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
                <label className="label" for="maximumPrice">Maximum Price</label>
                <div className="dollar">$</div>
                <input type="number" 
                  id="maximumPrice"
                  value={this.state.values[1]}
                />
              </div>
            </div>
          </section>
          {/* Home Type Checkboxes */}
          <section>
            <h3>Home Type</h3>
            <h4>Select the type of homes you'd like</h4>
            <div className="category checkbox">
              <label class="checkboxContainer">Houses
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
              <label class="checkboxContainer">Manufactured
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
              <label class="checkboxContainer">Condos
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
              <label class="checkboxContainer">Apartments
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
              <label class="checkboxContainer">Lots/Land 
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
              <label class="checkboxContainer">Townhomes
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
              </label>
            </div>       
          </section>
          {/* Expandable Section */}
          <section className="accordion">
            <h3>Amenities</h3>
            <h4>Select the amenities you'd like</h4>
            <div className="category checkbox">
                <label class="checkboxContainer">Heating
                  <input type="checkbox" checked="checked"/>
                  <span class="checkmark"></span>
                </label>
                <label class="checkboxContainer">Air Conditioning
                  <input type="checkbox" checked="checked"/>
                  <span class="checkmark"></span>
                </label>
                <label class="checkboxContainer">Washer
                  <input type="checkbox" checked="checked"/>
                  <span class="checkmark"></span>
                </label>
                <label class="checkboxContainer">Dryer
                  <input type="checkbox" checked="checked"/>
                  <span class="checkmark"></span>
                </label>
              </div>
                {
                  this.state.amenitiesOpen ? 
                  <div className="category checkbox">
                    <label class="checkboxContainer">Waterfront
                    <input type="checkbox" checked="checked"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="checkboxContainer">Manufactured
                      <input type="checkbox" checked="checked"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkboxContainer">Condos
                      <input type="checkbox" checked="checked"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkboxContainer">Apartments
                      <input type="checkbox" checked="checked"/>
                      <span class="checkmark"></span>
                    </label>
                  </div> 
                  : null
                }              
              <p onClick={() => this.setState({ amenitiesOpen: !this.state.amenitiesOpen})}>Show {this.state.amenitiesOpen ? 'less' : 'all'}</p>
          </section>
          <footer>
            <button>Show 300+ homes</button>
          </footer>
        </div>
      </FilterPopUp> 
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
