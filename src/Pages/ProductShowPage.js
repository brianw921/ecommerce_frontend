import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductShowCard from './ProductShowCard'

class ProductShowPage extends Component {
    render() {
        
        return (
            
            <div style={{border: '1px black solid'}}>
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

//Still need to map Dispatch to bring it back to CardContainer
export default connect(mapStateToProps)(ProductShowPage)

