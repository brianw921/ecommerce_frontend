import React, { Component } from 'react'
import { connect } from 'react-redux';



class OrderPopup extends Component {

    viewCart = () => {
        this.props.history.push('/cart')
    }

    redirect = () => {
        this.props.history.push('/')
    }
    
    render() {
        
        const { product_full_name ,image, description_headline,
        description_bullets, original_price} = this.props.showProduct

        if (!this.props.orderPopup){
            return null
        }

        return (
            <>
            <div className="modal" id="modal">
                <div className="modal-content">
                    <div>
                        <div className="close-btn" onClick={this.props.history.goBack}>x</div>
                        <h2> YOU HAVE SUCCESSFULLY ADDED TO CART</h2>
                        <h2>{product_full_name}</h2>
                        <img src={image} style={{'width': '300px', 'height': '300px'}} alt="product-img"/>
                        <h3>Description</h3>
                        <p>{description_headline}</p>
                        <h4> USD <span>{original_price}</span></h4> 
                        <ul>{description_bullets}</ul>
                        {/* <button onClick={this.orderPopup}>Add To Cart</button> */}
                    </div>
                    <div>
                        <button onClick={this.viewCart}>View Cart</button>
                        <button onClick={this.redirect}>Continue Shopping</button>
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}




export default connect(null, null)(OrderPopup)