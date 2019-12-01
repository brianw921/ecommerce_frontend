import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userPostFetch } from '../Redux/actions'

class Signup extends Component {
    state = {
        username: '',
        password: '',
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.userPostFetch(this.state)
        this.props.history.push("/")
    }
    render() {
        const { username, password , name} = this.state
        return (
            <>
            <h1>Signup</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Username:  </label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <label>Password:  </label>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <label>Name:  </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo))
    }
}

export default connect(null, mapDispatchToProps)(Signup);