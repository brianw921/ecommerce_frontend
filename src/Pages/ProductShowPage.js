import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductShowCard from './ProductShowCard'

class ProductShowPage extends Component {
    render() {
       
        return (
            
            <div>
                <div>
                    <ProductShowCard history={this.props.history}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        showProduct: state.productStore.showProduct
    }
}


export default connect(mapStateToProps)(ProductShowPage)

