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
                console.log(item)
                return item.category === this.props.sortCategory
            }
            )
            return sorted.filter(product => product.product_full_name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        
    } 

    handleChange = (e)=> {
        this.setState({ search: e.target.value })
    }
   
    
    

    productComponents = () => {
        return this.sortProducts().map( (product) => {
                    return <ProductCard key={product.id}
                                        product={product}
                                        history = {this.props.history}
                    />
        })
    }
    render() {
    console.log(this.props)
  
        return (
            <>
            <form onSubmit={this.handleSubmit} style={{ display: 'block', width: '100%'}}>
                  <input id="search-bar" 
                        placeholder="search"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}></input>
                        <input type="submit" />
                        </form>
            <div id="product-container">
                {this.productComponents()}
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        sortGender: state.productStore.sortGender,
        sortCategory: state.productStore.sortCategory
    }
}

export default connect(mapStateToProps)(ProductContainer)
