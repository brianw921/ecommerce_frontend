import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

class NavBar extends Component {

    
    render() {
        
        const { cart } = this.props
        
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
                                <li><input aria-label="search" placeholder=" 🔍 This Search does not work yet"
                                            value={null}></input></li>
                                <li><Link to="/cart">Cart {cart.length}</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
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
        search: state.productStore.search
    }
}




export default connect(mapStateToProps )(NavBar)