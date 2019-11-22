import React, { Component } from 'react'
import Sort from './Sort'
import Category from './Category'

export default class FilterBar extends Component {
    render() {
        return (
            <div id="filter-bar">
                <h1>I'm filter Bar</h1>
                <Sort />
                <Category />
            </div>
        )
    }
}
