import React, { Component } from 'react'

import Category from './Category'

export default class FilterBar extends Component {
    render() {
        return (
            <div id="filter-bar">
                <Category history={this.props.history}/>
            </div>
        )
    }
}
