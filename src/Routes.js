import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './Pages'
import Login from './Pages'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <h1> Hi</h1>
            <Switch>
            
               <Route path="/signup" component={Signup} />
               <Route path="/login" component={Login} />
            </Switch>
            </div>
             
           
        )
    }
}
