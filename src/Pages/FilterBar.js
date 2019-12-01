import React, { Component } from 'react'

import Category from './Category'

export default class FilterBar extends Component {
    render() {
        console.log("filterBar" ,this.props)
        return (
            <div id="filter-bar">
                <h1>I'm filter Bar</h1>
                
                <Category history={this.props.history}/>
            </div>
        )
    }
}
