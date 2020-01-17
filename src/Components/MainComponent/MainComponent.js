import React, { Component } from 'react'
import ProductContainer from './ProductContainer'

import { connect } from 'react-redux';
import { fetchProducts } from '../Redux/actions';


class MainComponent extends Component {
    

    componentDidMount(){
        this.props.fetchProducts()
    }
    
    render() {
        return (
            <div style={{border: "1px black solid"}}>
                <div style={{"display": 'flex'}}> 
                    <ProductContainer history={this.props.history} />
                </div>
            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(null, mapDispatchToProps)(MainComponent)