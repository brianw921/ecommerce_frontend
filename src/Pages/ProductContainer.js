import React, { Component } from 'react'
import ProductCard from './ProductCard.js'
import { connect } from 'react-redux';

 class ProductContainer extends Component {

    
    render() {
        console.log("hello", this.props.products)
        return (
            <div id="product-container">

                
                {this.props.products.map((product) => {
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
        products: state.productStore.products
    }
}

export default connect(mapStateToProps)(ProductContainer)
