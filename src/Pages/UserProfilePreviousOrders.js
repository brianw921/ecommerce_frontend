import React, { Component } from 'react'

export default class UserProfilePreviousOrders extends Component {
    render() {
        console.log(this.props.order)
        return (
            <div>
                Order placed: (NEED DATE AND TIME)
                {this.props.order.cart? null : 
                this.props.order.order_items.map((orderItems) => {
                    return <li><img src={orderItems.item.image} alt="" className="cart-img"/>{orderItems.item.product_full_name}</li>
                }
                )}
                <h1>Total: {this.props.order.cart? null : this.props.order.total_price}</h1>
            </div>
        )
    }
}
