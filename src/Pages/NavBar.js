import React, { Component } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {

    state = { 
        search: ""
    }

    handleSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        console.log(this.props)
        const { search } = this.state
        return (
            
            <div id="nav-bar">
                  <h1>This is nav bar, should have search/login/& cart</h1>
                  <input id="search-bar" 
                        placeholder="search"
                        name="search"
                        value={search}
                        onChange={this.handleSearch}></input>
                  <span role="img" aria-label="search"> 🔍</span>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productStore.products
    }
}

export default connect(mapStateToProps)(NavBar)