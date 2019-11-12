import React, { Component } from 'react';
import { products } from './products';
import styled from 'styled-components';

const Styled = styled.div`
  flex-direction: column;
  margin: 20px;
  .btn {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
    background-color: purple;
    color: white;
    border: none;
    margin: 4px;
  }
  
  .btn:hover {
    opacity: 0.8;
    font-weight: normal;
  }
  
  .btn:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`
export default class ProductList extends Component {
    share() {
        window.alert('The product has been shared!');
    }
    view() {
      window.alert('The product has been viewed!');
    }
    getProduct(product, index) {
      return (
        <div key={index}>
            <h3>
                <a title={product.name + ' details'} href="/">{product.name}</a>
            </h3>
            <p>Description: {product.description} </p>
            <button className="btn" onClick={this.share}>Share</button>
            <button className="btn" onClick={this.view}>View</button>

          </div>
      )
    }

    render() {
        return (
            <Styled>
                <h2>Products</h2>
                <br/>
                <div>
                    {
                        products.map((product, index) => {
                            return this.getProduct(product, index);
                        })
                    }
                </div>
            </Styled>
        );
    }
}