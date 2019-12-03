import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                This is sort
                <select>
                    <option value="All">All</option>
                    <option value="Weight">Weight</option>
                    <option value="Name">Name</option>
                </select>
                
            </div>
        )
    }
}
