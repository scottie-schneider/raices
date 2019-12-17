import React, { Component } from 'react'

// import Map from './map/Map.js';
// import InfoWindow from './map/InfoWindow';
// import Marker from './map/Marker';

import {GoogleApiWrapper} from 'google-maps-react';

class WithMarkers extends Component {
  state = {
    latitude: null,
    longitude: null, 
    userAddress: null,
    sactiveMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }
  handleLocationError = (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
      alert("An Unknown default error occurred")
    }
  }
  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    // if (!this.props.loaded) return <div>Loading...</div>;
    return (
      <div>
        <button onClick={this.getLocation}>Get coords</button>
        {this.state.latitude} // {this.state.longitude} 

        <Map
          className="map"
          google={this.props.google}
          onClick={this.onMapClicked}
          style={{ height: '100%', position: 'relative', width: '100%' }}
          zoom={14}
          initialCenter={{
            lat: 6.2172586999999995,
            lng: -75.5625925
          }}
          center={{
            lat: 6.2172586999999995,
            lng: -75.5625925
          }}
        >          
        </Map>        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS)
})(WithMarkers)