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
import Cart from './Pages/Cart'
// import Category from './Pages/Category'
import UserProfile from './Pages/UserProfile'


class App extends React.Component {
  
  render() {
    return (
      <div>
          <NavBar/>
          <FilterBar history={this.props.history}/>
          <Switch>
              <Route exact path="/" component={MainComponent}/>
             
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={UserProfile}/>
              <Route path="/items/:id" component={ProductShowPage}/>
              <Route path="/items/:id/addtoCart" component={OrderPopup}/>
              <Route path='/cart' component={Cart}/>
          </Switch>
      </div>
  );
  }
}

export default App;
