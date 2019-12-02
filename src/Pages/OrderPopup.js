import React, { Component } from 'react'
import { connect } from 'react-redux';



class OrderPopup extends Component {

    viewCart = () => {
        console.log("view CArt")
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
                    <span className="close">fsadf</span>
                    <h1> YOU HAVE SUCCESSFULLY ADDED TO CART</h1>
                    <h1>{product_full_name}</h1>
                        <img src={image}  alt="product-img"/>
                        <h1>Description</h1>
                        <p>{description_headline}</p>
                        <p> USD {original_price}</p>
                        <ul>{description_bullets}</ul>
                        {/* <button onClick={this.orderPopup}>Add To Cart</button> */}
                        
                        <button onClick={this.viewCart}>View Cart</button>
                        <button onClick={this.redirect}>Continue Shopping</button>
                </div>
            </div>
            
            </>
        )
    }
}




export default connect(null, null)(OrderPopup)