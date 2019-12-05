import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderPopup from './OrderPopup'
import { addToCart } from '../Redux/actions';
import { Link } from 'react-router-dom'


class ProductShowCard extends Component {
    state = {
        orderPopup: false,
        show: false
    }

    showModal = () => {
        this.setState({
            show: !this.state.show
        })
    };
    orderPopup = () => {
        this.setState({
            orderPopup: !this.state.orderPopup
        })
        this.props.addToCart(this.props.showProduct, this.props.user)
    }
    render() {
       
        if (this.state.orderPopup) {
            return <OrderPopup orderPopup={this.state.orderPopup} showProduct={this.props.showProduct} history={this.props.history}/>
        }

       
        const { product_full_name ,image, description_headline,
        description_bullets, original_price} = this.props.showProduct

        
        return (
            
            <div className="modal">
                
                <div className="modal-content" >
                    <h1>{product_full_name}</h1>
                    <img src={image}  alt="product-img"/>
                    <h1>Description</h1>
                    <p>{description_headline}</p>
                    <h1><span>USD {original_price}</span></h1>
                    <ul>{description_bullets}</ul>
                    
                    
                    {this.props.user.username ? <button onClick={this.orderPopup}>Add To Cart</button> 
                    : 
                    <Link to="/login"><button>Please Login in to Purchase</button></Link>
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