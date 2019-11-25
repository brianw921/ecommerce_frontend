import React, { Component } from 'react'
import ProductContainer from './ProductContainer'

import { connect } from 'react-redux';
import { fetchProducts } from '../Redux/actions';


class MainComponent extends Component {
    // state = {
    //     products: []
    // }

    componentDidMount(){
        // fetch("http://localhost:3000/items")
        // .then(r => r.json())
        // .then(productList => {
        //     this.setState({
        //         products: productList
        //     })
        // })
        this.props.fetchProducts()
    }
    

    
    render() {
        console.log(this.props.history)
        return (
            <div style={{border: "1px black solid"}}>
                

                <div style={{"display": 'flex'}}>
                    
                    <ProductContainer history={this.props.history} />
                </div>
            </div>
        )
    }
}

//just grabs your state


const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(null, mapDispatchToProps)(MainComponent)