import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div class="product-card">
                <h1>{this.props.product.name}</h1>
                <div style={{'height': '200px','background-image': `url(${this.props.product.image})`, 'background-size': 'contain', 'backgroundRepeat': 'no-repeat'}}></div>
            </div>
        )
    }
}
