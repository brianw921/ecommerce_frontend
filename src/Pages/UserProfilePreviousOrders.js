import React, { Component } from 'react'

export default class UserProfilePreviousOrders extends Component {
    render() {
        console.log(this.props.order)
        return (
            <div>
                Order placed: (NEED DATE AND TIME)
                {this.props.order.order_items.map((orderItems) => {
                    console.log(orderItems)

                    return <li><img src={orderItems.item.image} alt="" className="cart-img"/>{orderItems.item.product_full_name}</li>
                }
                )}
            </div>
        )
    }
}
