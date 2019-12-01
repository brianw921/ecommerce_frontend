import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserShowPage extends Component {
    render() {
        return (
            <div>
                User Show Page
            </div>
        )
    }
}

export default connect(null)(UserShowPage)