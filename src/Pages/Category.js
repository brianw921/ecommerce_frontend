import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnySort } from '../Redux/actions'

class Category extends Component {

   
    render() {
        // console.log("Category", this.props.products)
        //DONT FORGET TO MAKE A SORT
        return (
            <div>
                <h1>Categories</h1>
                <p onClick={() => this.props.setSortGender("")}>All</p>
                <p onClick={() => this.props.setSortGender("M")}>Men</p>
                <p onClick={() => this.props.setSortGender("W")}>Women</p>
                <p onClick={() => this.props.setSortGender("K")}>Kids</p>
                {/* <p onClick={() => this.props.setSortCategory("Performance")}>Performance</p> */}
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
        setSortGender: (sortGender) => dispatch(handleAnySort(sortGender))
        // setSortCategory: (sortCategory) => dispatch(handleAnySort(sortCategory))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)