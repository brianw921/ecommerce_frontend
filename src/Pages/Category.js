import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnySort } from '../Redux/actions'

class Category extends Component {

    // handleSortMen = () => {
    //     let category = this.props.products
    //     let sorted =category.filter( (items) => {
    //         return items.category === "men"
    //     }
    //     )
    //     console.log(sorted)
        
    // }
    render() {
        // console.log("Category", this.props.products)
        return (
            <div>
                <h1>Sort by category</h1>
                <h1 onClick={() => this.props.setSortedCategory("")}>ALL</h1>
                <h1 onClick={() => this.props.setSortedCategory("men")}>MENS</h1>
                <h1 onClick={() => this.props.setSortedCategory("women")}>WOMENS</h1>
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
        setSortedCategory: (sortCategory) => dispatch(handleAnySort(sortCategory)),
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)