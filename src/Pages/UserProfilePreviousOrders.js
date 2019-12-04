import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { showProduct } from '../Redux/actions';


class UserProfilePreviousOrders extends Component {

    showProduct = (item) => {
        this.props.showProduct(item)
        this.props.history.push(`/items/:id`)
    }

    showPreviousOrders = () => {
        const { order } = this.props
        
        const dateTime = order.datetime
        
        return order.cart ? null : order.order_items.map((orderItem) => {
            
            return (
                <>
                    <h1>You have purchased this on {new Date(dateTime).toDateString()}</h1>
                    <li onClick={ () => this.showProduct(orderItem) }>
                        
                        <img src={orderItem.item.image} alt="" className="cart-img"/>{orderItem.item.product_full_name}
                    </li>
                        <h1>Total: {order.total_price}</h1>
                </>
            )
        })
    }
    render() {
        
        return (
            <div>
                {this.showPreviousOrders()}
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