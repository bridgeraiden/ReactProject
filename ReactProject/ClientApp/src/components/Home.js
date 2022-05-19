import React, { Component } from 'react';
import { product } from '../Models/product';
import { ProductList } from './ProductList';

export class Home extends Component {
    static displayName = Home.name;
    products = [
    new product(23, "Mouse", 47.99),
    new product(39, "Keyboard", 99.99),
        new product(54, "Monitor", 47.99)
    ];

  render () {
    return (
        <div>
            <h1>Products</h1>
            <div style={{ textAlign:'right' }} >
                <button className='Cart'onClick={this.Cart} >Shopping Cart</button>
            </div>

            <ProductList products={this.products}></ProductList>
            
           
            
            
        </div>
        
    );
  }
}
