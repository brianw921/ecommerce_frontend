import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitOrder , removeFromCart} from '../Redux/actions';

class Cart extends Component {

    submitOrder = (e) => {
        e.preventDefault()
        this.props.submitOrder()
    }

    removeFromCart = (cartItem) => {
            
        
        this.props.removeFromCart(cartItem.id)
        
    }
    render() {
        console.log(this.props)
        const { cart } = this.props

        const cartPrice = () => {
            let totalPrice = 0
            cart.forEach((cartItem) => {
                
                totalPrice += cartItem.item.original_price
            })
            return totalPrice
        }
        return (
            <div>
                <button onClick={this.submitOrder}>Checkout</button>
                <ol>
                    {cart.map((cartItem) => {
                        
                        return <li>{cartItem.item.product_full_name} USD {cartItem.item.original_price}
                         <button onClick={() => this.removeFromCart(cartItem)}>Remove from Cart</button></li>
                    })}
                    <div>
                        <h1>Total Price: <span>{cartPrice()}</span></h1>
                    </div>
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
        submitOrder: () => dispatch(submitOrder()),
        removeFromCart: (cartItemId) => dispatch(removeFromCart(cartItemId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)


