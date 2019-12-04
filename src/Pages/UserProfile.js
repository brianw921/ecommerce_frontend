import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfileCart from './UserProfileCart'
import UserProfilePreviousOrders from './UserProfilePreviousOrders'


class UserShowPage extends Component {
    render() {
        
        const {user } = this.props
      
        return (
            <div>
                Hello {user.name ? user.name: ", welcome to Abibas"} !
                <UserProfileCart />
            <h1>View Previous Orders</h1>
            {user.orders.map( (order) => {
                return <UserProfilePreviousOrders order={order}/>
            }
            )}
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.mainState.currentUser
    }
}

export default connect(mapStateToProps)(UserShowPage)