import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnySort } from '../Redux/actions'

class Category extends Component {

   
    render() {
        // console.log("Category", this.props.products)
        //DONT FORGET TO MAKE A SORT
        return (
            <div>
                <h1>Sort by category</h1>
                <h1 onClick={() => this.props.setSortGender("")}>ALL</h1>
                <h1 onClick={() => this.props.setSortGender("M")}>MENS</h1>
                <h1 onClick={() => this.props.setSortGender("W")}>WOMENS</h1>
                <h1 onClick={() => this.props.setSortGender("K")}>KIDS</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSortGender: (sortGender) => dispatch(handleAnySort(sortGender)),
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)