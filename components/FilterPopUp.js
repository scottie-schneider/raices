import React, { Component } from 'react';

import FilterPopUpStyle from './styles/FilterPopUpStyle';

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

class FilterPopUp extends Component {
  state = {
    amenitiesOpen: false,
    values: defaultValues,
  }
  onChange = values => {
    this.setState({ values });
  };
  render () {
    return (
      <FilterPopUpStyle>
        <div className="header">
          <button 
            className="close"
            onClick={this.props.closeFilterPopUp}
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
      </FilterPopUpStyle>
    )
  }
}
export default FilterPopUp;