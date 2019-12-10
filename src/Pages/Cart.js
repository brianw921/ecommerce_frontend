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

        const shoppingCartItems = () => {
            if (cart.length === 0 ){
                return "Your Shopping Cart is Empty"
            } else if (cart.length === 1) {
                return `There is currently ${cart.length} item in your Cart`
            } else {
                return `There are currently ${cart.length} items in your Cart`
            }
        }
        return (
            <div className="cart-show-page">
                <h1>{shoppingCartItems()} </h1>
                <div>
                    <ol>
                        {cart.map((cartItem) => {
                            console.log(cartItem)
                            return <li>
                            <img src={cartItem.item.image} alt="" className="cart-img"/>- {cartItem.item.product_full_name} USD {cartItem.item.original_price}
                            <button onClick={() => this.removeFromCart(cartItem)}>Remove from Cart</button></li>
                        })}
                    </ol>
                </div>
                <div className="cart-price">
                        <h1>Total Price: <span>{cartPrice()}</span></h1>
                </div>
                <button onClick={this.submitOrder}>Checkout</button>
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


