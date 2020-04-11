import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfileCart from './UserProfileCart'
import UserProfilePreviousOrders from './UserProfilePreviousOrders'


class UserProfile extends Component {
    render() {
        
        const { user } = this.props
      
        return (
            < div className ="user-profile" >
                <h1>Hello {user.name ? user.name: ", welcome to Abibas"}!</h1>
                    <UserProfileCart />
                <h1>Previous Orders</h1>
                    {user.orders.map( (order) => {
                        return <UserProfilePreviousOrders order={order} key={order.id}/>
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

export default connect(mapStateToProps)(UserProfile)