import React, { Component } from 'react'
import ProductCard from './ProductCard.js'
import { connect } from 'react-redux';

 

 class ProductContainer extends Component {
    
    state = {
        search: ""
    }

    sortProducts = () => {
        if (this.props.sortGender === "") {
            return this.sortProductsByCat().filter(product => product.product_full_name.toLowerCase().includes(this.state.search.toLowerCase()))
        } else {
             let category = this.sortProductsByCat()
             let sorted = category.filter((item) => {  
                 return item.gender === this.props.sortGender  
            })
            return sorted.filter(product => product.product_full_name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
    }

    sortProductsByCat = () => {
        if (this.props.sortCategory === ""){
            return this.props.products.filter( product => product.product_full_name.toLowerCase().includes(this.state.search.toLowerCase()))
        } else {
            let category = this.props.products 
            let sorted = category.filter( (item) => {
                return item.category === this.props.sortCategory
            }
            )
            return sorted.filter(product => product.product_full_name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
    } 

    sortProductsByPrice = (array) => {
        if (this.props.sortPrice === "Lowest"){
            return array.sort( (productA, productB) => {
                if (productA.original_price > productB.original_price) {
                    return 1
                } else if (productA.original_price < productB.original_price) {
                    return -1
                } else {
                    return 0
                }
            }
            )
        } else {
            return array.sort((productA, productB) => {
                if ( productA.original_price < productB.original_price ){
                    return 1
                } else if ( productA.original_price > productB.original_price){
                    return -1
                } else {
                    return 0
                }
            })
        } 
    }

    handleChange = (e)=> {
        this.setState({ search: e.target.value })
    }
   

    productComponents = () => {
        return this.sortProductsByPrice(this.sortProducts()).map((product) => {
                    return <ProductCard key={product.id}
                                        product={product}
                                        history = {this.props.history}
                    />
        })
    }
    render() {

        return (
            <div id="product-container">
            <form id="search-form" onSubmit={this.handleSubmit}>
                <input  id="search-bar" 
                        placeholder="search"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}>
                </input>
                <input type="submit" />
            </form>
            <div id="products">
                {this.productComponents()}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        sortGender: state.productStore.sortGender,
        sortCategory: state.productStore.sortCategory,
        sortPrice: state.productStore.sortPrice
    }
}

export default connect(mapStateToProps)(ProductContainer)
