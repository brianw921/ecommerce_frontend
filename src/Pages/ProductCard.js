import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card" onClick={null}>
                <h1>{this.props.product.name}</h1>
                <div style={{'height': '200px','backgroundImage': `url(${this.props.product.image})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}></div>
                
            </div>
        )
    }

    
}

// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// }

export default connect()(ProductCard)


