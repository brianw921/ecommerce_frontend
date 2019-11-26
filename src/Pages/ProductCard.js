import React, { Component } from 'react'
import { connect } from 'react-redux';
import { showProduct } from '../Redux/actions'


class ProductCard extends Component {

    productRedirect = () => {
    
        this.props.showProduct(this.props.product)
        this.props.history.push(`/items/${this.props.product.id}`)
    }
    render() {
        
        const { image , product_full_name, original_price } = this.props.product
        return (
            <div className="product-card" onClick={this.productRedirect}>
                <div style={{'height': '200px','backgroundImage': `url(${image})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}></div>
                <h1>{product_full_name}</h1>
                <p> USD {original_price}</p>
            </div>
            
        )
    }

    
}

const mapDispatchToProps = (dispatch, item) => {
    return {
        showProduct: () => dispatch(showProduct(item.product))
    }
}

export default connect(null, mapDispatchToProps)(ProductCard)


