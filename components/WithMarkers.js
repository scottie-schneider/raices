import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'; 

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class WithMarkers extends Component {
  static defaultProps = {
    center: {
      lat: 6.2172586999999995,
      lng: -75.5625925
    },
    zoom: 11
  };
  state = {
    latitude: null,
    longitude: null, 
    userAddress: null,
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
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

  render() {    
    return (      
      <div>
        <button onClick={this.getLocation}>Get coords</button>
        {this.state.latitude} // {this.state.longitude} 
        {/* // Important! Always set the container height explicitly */}
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact            
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={6.21}
              lng={-75.56}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default WithMarkers;