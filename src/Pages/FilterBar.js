import React, { Component } from 'react'
import Sort from './Sort'
import Category from './Category'

export default class FilterBar extends Component {
    render() {
        return (
            <div>
                <hi>I'm filter Bar</hi>
                <Sort />
                <Category />
            </div>
        )
    }
}
