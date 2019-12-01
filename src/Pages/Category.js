import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnySort } from '../Redux/actions'
import {Link } from 'react-router-dom'

class Category extends Component {

    handleSort = (category) => {
        this.props.setSortGender(category)
        // this.props.history.push('/')
        return <Link to="/"></Link>
    }
    render() {
        console.log(this.props)
        //DONT FORGET TO MAKE A SORT
        return (
            <div>
                <h1>Categories</h1>
                
                {/* <p onClick={() => this.props.setSortGender("")}>All</p> */}
                <p onClick={() => this.props.setSortGender("M")}>Men</p>
                    <p> </p>
                <p onClick={() => this.props.setSortGender("W")}>Women</p>
                <p onClick={() => this.props.setSortGender("K")}>Kids</p>
                <p onClick={() => this.handleSort("")}>All</p>
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