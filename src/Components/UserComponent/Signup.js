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
                <div className="signup-container">
                    
                    <form className="signup-form" onSubmit={this.handleSubmit}>
                        <span className="signup-form-title">
                            Sign Up
                        </span>

                        <span className="signup-txt" >
                            Name
                        </span>
                        <div className="signup-wrap">
                            <input
                                className="input-wrap"
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <span className="signup-txt" >
                            Username
                        </span>
                        <div className="signup-wrap">
                            <input 
                                className="input-wrap"
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                            />
                        </div>
                        {/* <p className="error-msg">{this.props.error && this.props.error}</p> */}
                        <span className="signup-txt" >
                            Password
                        </span>

                        <div className="signup-wrap">
                            <input
                                className="input-wrap"
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <input type="submit"/>
                    </form>
                </div> 
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