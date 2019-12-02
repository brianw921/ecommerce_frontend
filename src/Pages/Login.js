import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../Redux/actions'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.getUser(this.state)
        if (localStorage.token) {
            this.props.history.push("/")
        }
       
    }

    render() {
        console.log(this.props)
        const { username, password } = this.state

        // if (localStorage.token) {
        //     this.props.history.push("/")
        // }
        return (

            <>
                <h1>Login</h1>
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
                    <input type="submit"/>
                    
                </form>
                {this.props.error && this.props.error} 
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
        getUser: (loginData) => dispatch(getUser(loginData))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)