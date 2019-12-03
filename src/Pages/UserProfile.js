import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserShowPage extends Component {
    render() {
        
        const {user } = this.props
      
        return (
            <div style={{border: "1px solid black"}}>
                Hello {user.name ? null: "Brian"}

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