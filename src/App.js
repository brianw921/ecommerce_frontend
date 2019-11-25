import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import MainComponent from './Pages/MainComponent'
import ProductShowPage from './Pages/ProductShowPage'
import NavBar from './Pages/NavBar'
import FilterBar from './Pages/FilterBar'
import OrderPopup from './Pages/OrderPopup'


class App extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
          <NavBar/>
          <FilterBar />
          <Switch>
              <Route exact path="/" component={MainComponent}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/items/:id" component={ProductShowPage}/>
              <Route path="/items/:id/addtoCart" component={OrderPopup}/>
          </Switch>
      </div>
  );
  }
}

export default App;
