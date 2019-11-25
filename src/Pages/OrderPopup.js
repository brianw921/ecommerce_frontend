import React, { Component } from 'react'
import { connect } from 'react-redux';



class OrderPopup extends Component {

    // viewCart = () => {
    //     console.log("view CArt")
    //     this.props.addToCart(this.props.showProduct)
    // }
    render() {
        console.log("OrderPopup",this.props)
        const { product_full_name ,image, description_headline,
        description_bullets, original_price} = this.props.showProduct
        return (
            <div>
                <h1> YOU HAVE SUCCESSFULLY ADDED TO CART</h1>
                <h1>{product_full_name}</h1>
                    <img src={image}  alt="product-img"/>
                    <h1>Description</h1>
                    <p>{description_headline}</p>
                    <p> USD {original_price}</p>
                    <ul>{description_bullets}</ul>
                    {/* <button onClick={this.orderPopup}>Add To Cart</button> */}
                    
                    <button onClick={this.viewCart}>View Cart</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, item) => {
    return {
       
    }
}


export default connect(null, mapDispatchToProps)(OrderPopup)