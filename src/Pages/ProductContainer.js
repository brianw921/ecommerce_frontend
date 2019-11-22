import React, { Component } from 'react'
import ProductCard from './ProductCard.js'

export default class ProductContainer extends Component {

    
    render() {
        return (
            <div id="product-container">
                {this.props.products.map((product) => {
                    return <ProductCard product={product}/>
                }
                )}
            </div>
        )
    }
}
