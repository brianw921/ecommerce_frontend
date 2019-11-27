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
        // this.props.addToCart(this.props.showProduct, this.props.user)
    }
    render() {
       
    console.log("USER PRODUCT SHOWCART", this.props.user)
   
       if (this.state.orderPopup) {
           return <OrderPopup showProduct={this.props.showProduct} history={this.props.history}/>
       }

       
        const { product_full_name ,image, description_headline,
        description_bullets, original_price} = this.props.showProduct

        
        return (
            
            <div id="product-show-container">
                
                <div>

                    {this.props.user.length === 1 ? <button onClick={this.orderPopup}>Add To Cart</button> : null} 
                    <h1>{product_full_name}</h1>
                    <img src={image}  alt="product-img"/>
                    <h1>Description</h1>
                    <p>{description_headline}</p>
                    <p> USD {original_price}</p>
                    <ul>{description_bullets}</ul>
                    
                    
                    {this.props.user.username ? <button onClick={this.orderPopup}>Add To Cart</button> 
                    : 
                    <p>Please Login in to Purchase</p>
                    }
                   
                    
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
    showProduct: state.productStore.showProduct,
    user: state.mainState.currentUser
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        // addToCart: (item) => dispatch(addToCart(item))
        addToCart: (item, user) => dispatch(addToCart(item, user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowCard)