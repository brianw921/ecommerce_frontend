import React, { Component } from 'react'
import ProductCard from './ProductCard.js'
import { connect } from 'react-redux';

 

 class ProductContainer extends Component {
    
    
    sortProducts = () => {
        if (this.props.sortGender === "") {
            return this.props.products
        } else {
             let category = this.props.products
             let sorted = category.filter((item) => {
                 
                 return item.gender === this.props.sortGender
             })
            //  console.log(sorted)
             return sorted
        }
    }
   
    render() {
        
    // console.log(this.props)
        return (
            <div id="product-container">
                {this.sortProducts().map((product) => {
                    return <ProductCard key={product.id}
                                        product={product}
                                        history = {this.props.history}/>
                }
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        sortGender: state.productStore.sortGender
    }
}

export default connect(mapStateToProps)(ProductContainer)
