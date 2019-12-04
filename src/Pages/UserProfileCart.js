import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { withRouter} from 'react-router'
import {showProduct} from '../Redux/actions'

class UserProfileCart extends Component {

    showProduct = (e,item) => {
        console.log("did I get clicked?",e.target)
        this.props.showProduct(item)
        this.props.history.push(`/items/${e.target.dataset.id}`)
    }
    
    render() {
        
        const { cart } = this.props
        console.log( "WHAT IS CART", cart)
        const cartPrice = () => {
            let totalPrice = 0
            cart.forEach((cartItem) => {
                totalPrice += cartItem.item.original_price
            })
           
            return totalPrice
        }
        
        return (
            <div>
                <h1>There are current {cart.length} items in your cart</h1>
                    <ol>
                        {cart.map((cartItem) => {
                            console.log('CARTITEM.ID', cartItem)
                        return <li data-id={cartItem.id} onClick={(e) => this.showProduct(e,cartItem)}><img src={cartItem.item.image} alt="" className="cart-img"/> 
                        {cartItem.item.product_full_name} -- USD {cartItem.item.original_price}</li>
                        })}
                    </ol>
                <h2> Your Total is: <span>{cartPrice()}</span></h2>
                <Link to="/cart"><button> Update Cart</button></Link>
                <Link to="/"><button> Continue Shopping</button></Link>


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