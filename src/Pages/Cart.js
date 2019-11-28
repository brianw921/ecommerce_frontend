import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitOrder , removeFromCart} from '../Redux/actions';

class Cart extends Component {

    submitOrder = (e) => {
        e.preventDefault()
        // console.log("BRIAN", this.props.cart)
        this.props.submitOrder(this.props.cart)
    }

    removeFromCart = (cartItem) => {
            
        
        this.props.removeFromCart(cartItem.id)
        console.log("ONE", this.props.removeFromCart(cartItem.id))
    }
    render() {
        
        const { cart } = this.props
        console.log("fdsafasdf", cart)
        return (
            <div>
                <button onClick={this.submitOrder}>Checkout</button>
                <ol>
                    {cart.map((cartItem) => {
                        console.log(cartItem)
                        return <li>{cartItem.item.product_full_name} USD {cartItem.item.original_price}
                         <button onClick={() => this.removeFromCart(cartItem)}>Remove from Cart</button></li>
                    })}
                </ol>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.productStore.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitOrder: (orderObj) => dispatch(submitOrder(orderObj)),
        removeFromCart: (cartItemId) => dispatch(removeFromCart(cartItemId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)


