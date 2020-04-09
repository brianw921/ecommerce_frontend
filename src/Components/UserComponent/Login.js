import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../../Redux/actions'


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
        
        const { username, password } = this.state
        
        return  (
            <>
                <div className='login'>
                    <div className="login-container">
                            <form className="login-form" onSubmit={this.handleSubmit}>
                                <span className="login-form-title">
                                    Account Login
                                </span>

                                <span className="login-txt" >
                                    Username
                                </span>

                                <div className="login-wrap">
                                    <input 
                                        className="input-wrap"
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <span className="login-txt">
                                    Password
                                </span>
                                
                                <div >
                                    <input 
                                        className="input-wrap"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="error-msg">
                                    {this.props.error && this.props.error}
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
        getUser: (loginData) => dispatch(getUser(loginData))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)