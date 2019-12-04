import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfileCart from './UserProfileCart'


class UserShowPage extends Component {
    render() {
        
        const {user } = this.props
      
        return (
            <div>
                Hello {user.name ? user.name: ", welcome to Abibas"} !
                <UserProfileCart />
            Here is your previous orders
            {user.orders.map( (order) => {
                return console.log("PAST ORDERS", order) 
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