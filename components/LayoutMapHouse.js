import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

import HomeMapCard from './HomeMapCard';

const MapLayout = styled.div`  
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-gap: 0px;
  overflow: hidden;
  grid-template-columns: 1.5fr auto; 
  grid-template-rows: auto;
  height: 100vh;
  grid-template-areas:
    "map houseCards"
    "map houseCards";
  .bottomNav {
    display: none;
  }
  .map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    grid-area: map;
    margin-bottom: 10px;
    min-height: 500px;
    background: white url("https://res.cloudinary.com/dvqw5uhrr/image/upload/v1572896259/Raices/Screen_Shot_2019-11-04_at_2.36.41_PM.png");
    background-size: cover;
    overflow: hidden;
  }
  .houseCards {
    position: fixed;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: flex-end;
    justify-content: flex-start;
    right: 0;
    z-index: 2;
    height: 100%;
    min-height: 100%;
    margin-top: 10px;
    margin-left: 10px;
    align-items: flex-end;
    justify-content: flex-start;
    z-index: 2;
  }
  .houseCard {
    border: 1px solid purple;
    height: 228px;
  }
  @media (max-width: 1000px) {
    .map {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .houseCards {
      position: fixed;
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      align-items: flex-end;
      justify-content: flex-start;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      height: 100px;
    }
  }
  @media (max-width: 600px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "map"
      "houseCards"
      "bottomNav";
    .bottomNav {
      position: fixed;
      display: flex;  
      flex: 1;
      bottom: 0;
      margin: 0;
      width: 100%;
      /* max-width: 450px; */
      background: #fff;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
}
`

export default function LayoutMapHouse() {
  return (
    <MapLayout>
      <div class="map">
      </div>
      <div class="houseCards">
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
        <HomeMapCard className="houseCard"/>
      </div>
      <div class="bottomNav">
        I'm the bottom Nav
      </div>
    </MapLayout>
  ); 
}