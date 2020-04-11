import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { showProduct } from '../../Redux/actions';
import moment from 'moment'


class UserProfilePreviousOrders extends Component {

    
    showProduct = (item) => {
        this.props.showProduct(item)
        this.props.history.push(`/items/:id`)
    }

    showPreviousOrders = () => {
        const { order } = this.props
        return order.cart ? null : order.order_items.map((orderItem) => {
            return (
                <ul>
                    <li onClick={ () => this.showProduct(orderItem) } key={orderItem.id}> 
                        <img src={orderItem.item.image} alt="" className="cart-img"/>{orderItem.item.product_full_name}
                    </li>
                </ul>
            )
        })
    }
    render() {
        const { order } = this.props
        
        const dateTime = order.datetime
        return (
            <div className="up-prev-orders">
                <h1>Your Previous Orders</h1>
                <p>Order placed:  {moment(dateTime).format('LL')}</p>
                <ol>
                    {this.showPreviousOrders()}
                </ol>
                <h1>Total: <span>USD {order.total_price}</span> </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.mainState.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showProduct: (item) => dispatch(showProduct(item))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfilePreviousOrders))