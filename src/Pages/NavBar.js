import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import {logOut , searchOrder} from "../Redux/actions"


class NavBar extends Component {

    

    
    handleLogout = (e) => {
        e.preventDefault()
        this.props.logOut()
    }
    render() {
        
        const { cart, user } = this.props
        
        
        
        return (
            <nav id="nav-bar">
                    <div></div>
                    <div id="nav-bar-logo">
                        <Link to = "/">
                            <img alt="logo" className="logo" src ="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1600x800/landscape-1483042503-es-161229-adidas-4.jpg?resize=300:*" />
                        </Link> 
                    </div>
                    <div className="navbar-items-right">
                        <div className="navbar-navigation-items">
                            <ul >
                                
                                <li><input aria-label="search" placeholder=" 🔍 Search"
                                            value={this.props.search} onChange={(e) => this.props.searchOrder(e.target.value)}></input></li>
                                <li><Link to="/cart">Cart {cart.length}</Link></li>
                                {user.id? <><li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/" onClick={this.handleLogout}>Log Out</Link></li> </> : 
                                <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                                </>
                                }
                                
                            </ul>
                        </div>
                    </div>
            </nav>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        cart: state.productStore.cart,
        user: state.mainState.currentUser,
        search: state.productStore.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
        searchOrder: (searchTerm) => dispatch(searchOrder(searchTerm))
    }
}


export default connect(mapStateToProps,mapDispatchToProps )(NavBar)