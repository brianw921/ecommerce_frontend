import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userPostFetch } from '../../Redux/actions'

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
            <div className="signup">
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:  </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    {/* <p className="error-msg">{this.props.error && this.props.error}</p> */}
                    <label>Password:  </label>
                    <input
                        type="password"
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
                 
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.mainState.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);