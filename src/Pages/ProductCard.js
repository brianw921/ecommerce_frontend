import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div className="product-card" onClick={console.log("Product Card Clicked")}>
                <h1>{this.props.product.name}</h1>
                <div style={{'height': '200px','backgroundImage': `url(${this.props.product.image})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}></div>
                
            </div>
        )
    }
}
