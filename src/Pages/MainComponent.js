import React, { Component } from 'react'
import ProductContainer from './ProductContainer'
import FilterBar from './FilterBar'
import NavBar from './NavBar'

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
            <div style={{border: "1px black solid"}}>
                <h1>Product Container</h1>
                <NavBar />
                <FilterBar />
                <ProductContainer products={this.state.products}/>
            </div>
        )
    }
}
