import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserShowPage extends Component {
    render() {
        
        const {user } = this.props
        console.log("WHAT ARE ORDERS" , user.orders)
        console.log("what are orders again", this.props.user.orders)
        return (
            <div style={{border: "1px solid black"}}>
                Hello {user.name ? null: "Brian"}

            Here is your previous orders
            {/* {user.orders.map( (order) => {
                return console.log(order) 
            }
            )} */}
            {user.orders ? user.orders.map( (order) => {
                return console.log("NULL CHECK", order)
            }
            ) : null}
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