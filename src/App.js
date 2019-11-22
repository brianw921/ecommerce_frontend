import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import MainComponent from './Pages/MainComponent'

class App extends React.Component {
  
  render() {
    return (
      <div>
          <h1>hi</h1>
          <Switch>
              <Route exact path="/" component={MainComponent}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
          </Switch>
      </div>
  );
  }
}

export default App;
