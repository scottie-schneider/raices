import React, { Component } from 'react';
import styled from 'styled-components';
import AirBnBNav from './AirBnBNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown as falCaretDown } from '@fortawesome/pro-regular-svg-icons'
import { faSearch as farSearch } from '@fortawesome/pro-regular-svg-icons'
import classnames from "classnames";
import debounce from "lodash.debounce";
import { Ring } from "react-awesome-spinners";

// styles
import TopDropDownMenu from './styles/TopDropDownMenu';
import FilterButtons from './styles/FilterButtons';
import SearchPageStyle from './styles/SearchPageStyle';
import SearchBar from './styles/SearchBar';
import SearchBarHeader from './styles/SearchBarHeader';
import CardContainer from './styles/CardContainer';
import MainStyle from './styles/MainStyle';

class SearchAirBnB extends Component {
  state = {
    menu: "closed",
    topMenu: "closed",
    button: false,
    prevScrollpos: 0,
    visible: true,
    searchFocused: false,
    loading: false,
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
    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        // Do awesome stuff like loading more content!
        // Append 4 new array elements 
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
        // check for loading, check for now items remaining
        if(this.state.loading == false){
          this.setState({loading: true})
          setTimeout(() => {
            this.setState(prevState => ({
              cards: [...prevState.cards, ...newArr],
              loading: false
            }));    
          }, 3000);
        }
      }
    }, 100);
  };
  
  render () {
    return (
      <SearchPageStyle active={this.state.topMenu === 'active' ? true : null}>
      <AirBnBNav toggleMenu={this.toggleMenu}/> 
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
            <button>Price</button>
            <button>Rooms</button>
            <button>Filters</button>
          </div>
        </FilterButtons>
        <MainStyle search>
          <CardContainer>
            <h2>Unique homes for your next trip</h2>      
            <div class="cards-container">  
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
            </div>
            {this.state.loading ? <div className="loading"><Ring/></div>: null}         
          </CardContainer>
      </MainStyle>   
    </SearchPageStyle>
    )
  }
}

export default SearchAirBnB;
