import React from 'react';
import styled from 'styled-components'


const InfoBlockHolder = styled.div`
  border: 1px solid transparent;
  display: flex;
  text-align: center;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: column;
  .info {
    height: 94px;
    padding-top: 9px;
    padding-bottom: 9px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
  }
  .name {
    font-size: 20px;
  }
  .price {
    font-size: 24px;
    color: #E67E22;
  }
  .phone {
    font-size: 20px;
  }
`


export default function LeadInfoBlock() {
  return (
    <InfoBlockHolder>
      <div className="info">
        <div className="name">Scottie Schneider</div>
        <div className="price">$200,000</div>
        <div className="phone">512-817-6776</div>
      </div>
    </InfoBlockHolder>
  ); 
}
