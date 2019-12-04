import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserProfileCart extends Component {

    
    render() {
        
        const { cart } = this.props
        console.log(cart)
        const cartPrice = () => {
            let totalPrice = 0
            cart.forEach((cartItem) => {
                totalPrice += cartItem.item.original_price
            })
            console.log(totalPrice);
            return totalPrice
        }
        
        return (
            <div>
                <h1>There are current {cart.length} items in your cart</h1>
                    <ol>
                        {cart.map((cartItem) => {
                        return <li>{cartItem.item.product_full_name} -- USD {cartItem.item.original_price}</li>
                        })}
                    </ol>
                <h2> Your Total is: <span>{cartPrice()}</span></h2>
                <Link to="/cart"><button> Update Cart</button></Link>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.productStore.cart
    }
}

export default connect(mapStateToProps)(UserProfileCart)