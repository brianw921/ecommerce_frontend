import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnySort , sortCategory } from '../../Redux/actions'
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
                <h1>Categories </h1>
                <p onClick={() => this.handleSort("")}>All</p>
                <p onClick={() => this.handleSort("M")}>Men</p>
                <p onClick={() => this.handleSort("W")}>Women</p>
                <p onClick={() => this.handleSort("K")}>Kids</p>
                <p onClick={() => this.handleSortCat("Performance")}>Performance</p>
                <p onClick={() => this.handleSortCat("Originals")}>Originals</p>
                <p onClick={() => this.handleSortCat("Athletics")}>Athletics</p>
                
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
        setSortCategory: (category) => dispatch(sortCategory(category))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))