import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderPopup from './OrderPopup'
import { addToCart } from '../Redux/actions';
import { Link } from 'react-router-dom'
import { withRouter} from 'react-router'


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
            
            <div className="modal" >
                
                <div className="modal-content" >
                    <img src={image} id="product-show-card-img" alt="product-img"/>
                    <div id="product-show-card-details">
                        <h2>{product_full_name}</h2>
                        <h3>Description</h3>
                        <p>{description_headline}</p>
                        <h4><span>USD {original_price}</span></h4>
                        <ul>{description_bullets}</ul>
                        {this.props.user.username ? 
                        <div className="button">
                            <button onClick={this.orderPopup}>Add To Cart</button> 
                        </div>
                        : 
                        <div className="button">
                            <Link to="/login"><button>Please Login in to Purchase</button></Link>
                        </div>
    
                        }
                    </div>
                    <div className="close-btn" onClick={this.props.history.goBack}>x</div>
                    
                    
                    
                   
                    
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShowCard))