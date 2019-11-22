import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.product.name}</h1>
                <p>{this.props.product.description}</p>
                <img src={this.props.product.image} alt="img"></img>
            </div>
        )
    }
}
