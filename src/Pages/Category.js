import React, { Component } from 'react'
import { connect } from 'react-redux'

class Category extends Component {

    handleSortMen = () => {
        let category = this.props.products
        category.filter( (items) => {
            return items.category === "men"
        }
        )
    }
    render() {
        console.log("Category", this.props.products)
        return (
            <div>
                <h1>Sort by category</h1>
                <h1 onClick={this.handleSortMen}>MENS</h1>
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
        handleSortMen: () => dispatch(this.handleSortMen(this.props.products))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)