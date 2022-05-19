import React, { Component } from 'react';
import { Cart } from './Cart';


import { product } from '../Models/product';
import { addToCart } from './Cart';





export class Productitem extends Component {


    constructor(props) {
        super(props);
        this.state = { product: props.product };
    }


    render() {
        return (
            <div>
                <p> product: {this.state.product.productName},
                    id = {this.state.product.productId},
                    price = {this.state.product.unitPrice} </p>
                <button className={Cart} onClick={() => addToCart(this.product)}>Add to cart</button>
            </div>

        );


    }
}