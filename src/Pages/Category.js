import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnySort } from '../Redux/actions'
import { withRouter} from 'react-router'

class Category extends Component {

    handleSort = (gender) => {
        this.props.setSortGender(gender)
        this.props.history.push('/')
        
    }

    handleSortCat = (category) => {
        this.props.setSortCategory(category)
        this.props.history.push('/')
    }
    render() {
        
        return (
            <div>
                <h1>Categories</h1>
                
                {/* <p onClick={() => this.props.setSortGender("")}>All</p> */}
                <p onClick={() => this.handleSort("M")}>Men</p>
                    <p> </p>
                <p onClick={() => this.handleSort("W")}>Women</p>
                <p onClick={() => this.handleSort("K")}>Kids</p>
                <p onClick={() => this.handleSort("")}>All</p>
                <p onClick={() => this.handleSortCat("Performance")}>Performance</p>
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
        setSortGender: (sortGender) => dispatch(handleAnySort(sortGender)),
        setSortCategory: (sortCategory) => dispatch(handleAnySort(sortCategory))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))