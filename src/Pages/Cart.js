import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitOrder } from '../Redux/actions';

class Cart extends Component {

    submitOrder = (e) => {
        e.preventDefault()
        console.log("checkingout")
        this.props.submitOrder(this.props.cart)
    }
    render() {
        console.log(this.props.cart)
        const { cart } = this.props
        return (
            <div>
                <ol>
                    {cart.map((cartItem) => {
                        console.log(cartItem)
                        return <li>{cartItem.product_full_name} USD {cartItem.original_price}</li>
                    })}
                </ol>
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
        submitOrder: (orderObj) => dispatch(submitOrder(orderObj))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)


