import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderPopup from './OrderPopup'
import { addToCart } from '../Redux/actions';


class ProductShowCard extends Component {
    state = {
        orderPopup: false
    }
    orderPopup = () => {
        this.setState({
            orderPopup: !this.state.orderPopup
        })
        this.props.addToCart(this.props.showProduct)
    }
    render() {
       console.log("WHAT IS USER",this.props)
       
       if (this.state.orderPopup) {
           return <OrderPopup showProduct={this.props.showProduct} history={this.props.history}/>
       }

       
        const { product_full_name ,image, description_headline,
        description_bullets, original_price} = this.props.showProduct
        return (
            
            <div id="product-show-container">
                
                <div>
                    <h1>{product_full_name}</h1>
                    <img src={image}  alt="product-img"/>
                    <h1>Description</h1>
                    <p>{description_headline}</p>
                    <p> USD {original_price}</p>
                    <ul>{description_bullets}</ul>
                    
                    
                    {this.props.user ? <button onClick={this.orderPopup}>Add To Cart</button> 
                    : 
                    
                    <p>Please Login in to Purchase</p>
                    }
                    
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log("WHAT IS STATE", state)
    return {
    showProduct: state.productStore.showProduct,
    user: state.mainState.currentUser.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (item) => dispatch(addToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowCard)