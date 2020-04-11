import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { withRouter} from 'react-router'
import {showProduct} from '../../Redux/actions'

class UserProfileCart extends Component {

    showProduct = (item) => {
        this.props.showProduct(item)
        this.props.history.push(`/items/:id`)
    }
    
    render() {
        const shoppingCartItems = () => {
            if (cart.length === 0 ){
                return "Your Shopping Cart is Empty"
            } else if (cart.length === 1) {
                return `You have ${cart.length} item in your Cart`
            } else {
                return `You have ${cart.length} items in your Cart`
            }
        }
        
        const { cart } = this.props

        const cartPrice = () => {
            let totalPrice = 0
            cart.forEach((cartItem) => {
                totalPrice += cartItem.item.original_price
            })
           
            return totalPrice
        }
        
        return (
            <div className="user-profile-cart">
                <h1>{shoppingCartItems()}</h1>
                    <div>
                    <ol>
                        {cart.map((cartItem) => {
                        return <li onClick={() => this.showProduct(cartItem)}><img src={cartItem.item.image} alt="" className="cart-img"/> 
                        {cartItem.item.product_full_name} -- USD {cartItem.item.original_price}</li>
                        })}
                    </ol>
                    </div>
                <h2> Your Total is: <span>{cartPrice()}</span></h2>
                <div className="button">
                    <Link to="/cart"><button> Update Cart</button></Link>
                    <Link to="/"><button> Continue Shopping</button></Link>
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
        showProduct: (item) => dispatch(showProduct(item))
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserProfileCart))