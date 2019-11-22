import React, { Component } from 'react'
import ProductContainer from './ProductContainer'
import FilterBar from './FilterBar'

export default class MainComponent extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(productList => {
            this.setState({
                products: productList
            })
        })
    }

    render() {
        return (
            <div>
                <h1>hi</h1>
                <ProductContainer products={this.state.products}/>
                <FilterBar />
            </div>
        )
    }
}
