import React, { Component } from 'react'
import ProductCard from './ProductCard.js'
import { connect } from 'react-redux';

 class ProductContainer extends Component {
    
    

    
    sortProducts = () => {
        if (this.props.sortCategory === "") {
            return this.props.products
        } else {
             let category = this.props.products
             let sorted = category.filter((item) => {
                 return item.category === this.props.sortCategory
             })
             console.log(sorted)
             return sorted
        }
    }
    
   
    render() {
        
        // console.log("hello", this.props.products)
        return (
            <div id="product-container">
                
                
                {this.sortProducts().map((product) => {
                    return <ProductCard key={product.id}
                                        product={product}/>
                }
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        sortCategory: state.productStore.sortCategory
    }
}

export default connect(mapStateToProps)(ProductContainer)
