import React, { Component } from 'react';
import { ProductList } from './ProductList';
import { product } from '../Models/product';
export { addToCart } from './Cart';




export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = { products: props.products };
    }

    addToCart(productId, productName, unitPrice) {
        this.setState({
            
        });
    }



    render() {
        return (
            <div>
                <p> This is what is in your cart! </p>
                <ProductList products={this.products}></ProductList>
                </div>
            
            )
    }



}