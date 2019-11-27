import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class NavBar extends Component {

    


    viewCart = () => {
        this.props.history.push('/cart')
    }

    render() {
        // console.log(this.props)
        const { cart } = this.props
        
        return (
            
            <div id="nav-bar" >
                    <Link to = "/">
                    < img alt="logo" src ="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1600x800/landscape-1483042503-es-161229-adidas-4.jpg?resize=480:*" />
                    </Link>
                  <h1>This is nav bar, should have search/login/& cart</h1>
                  
                  <span role="img" aria-label="search"> 🔍</span>
                  <Link to="/cart"><button>Cart {cart.length}</button></Link>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products,
        cart: state.productStore.cart
    }
}




export default connect(mapStateToProps )(NavBar)