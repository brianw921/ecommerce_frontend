import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class NavBar extends Component {

    state = { 
        search: ""
    }

    handleSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    redirectMainComponent = () => {
        console.log("IM GOING HOME")
        this.props.history.push('/')
    }

    render() {
        // console.log("what is the nav bar", this.props)
        const { search } = this.state
        return (
            
            <div id="nav-bar" >
                    <Link to = "/">
                    < img alt="logo" src ="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/52/1600x800/landscape-1483042503-es-161229-adidas-4.jpg?resize=480:*" />
                    </Link>
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