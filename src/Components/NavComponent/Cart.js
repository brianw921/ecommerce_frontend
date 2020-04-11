import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitOrder , removeFromCart} from '../../Redux/actions';

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
                return `You have ${cart.length} item in your Cart`
            } else {
                return `You have ${cart.length} items in your Cart`
            }
        }
        return (
            <div className="cart">
                <div className="cart-container">
                    <h1>{shoppingCartItems()} </h1>
                    <div className="cart-show-page-items">
                        <ol>
                            {cart.map((cartItem) => {
                                
                                return <li>
                                <div onClick={() => this.removeFromCart(cartItem)} id="remove-from-cart">X</div> 
                                <img src={cartItem.item.image} alt="" className="cart-img"/>- {cartItem.item.product_full_name} USD {cartItem.item.original_price}
                                </li>
                            })}
                        </ol>
                    </div>
                    <div className="cart-price">
                            <h2>Total Price: <span>{cartPrice()}</span></h2>   
                    </div>
                    <div className="button">
                        <button onClick={this.submitOrder}><span>CHECKOUT</span></button>
                    </div>
                </div>
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


