import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Signup from './UserComponent/Signup'
import Login from './UserComponent/Login'
import MainComponent from './MainComponent/MainComponent'
import ProductShowPage from './Pages/ProductShowPage'
import NavBar from './NavComponent/NavBar'
import FilterBar from './FilterComponent/FilterBar'
import OrderPopup from './Pages/OrderPopup'
import Cart from './NavComponent/Cart'
import UserProfile from './NavComponent/UserProfile'
import {connect} from 'react-redux'
import { getUserPersist } from './Redux/actions'

class App extends React.Component {
  
  componentDidMount(){
    
    return localStorage.token ? this.props.getUserPersist(): null
  }
  render() {
    
    return (
    
      <div>
          <NavBar/>
          <div className="row">
            <FilterBar history={this.props.history}/>
            <Switch>
                <Route exact path="/" component={MainComponent}/>
                <Route path="/profile" component={UserProfile}/>  
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/items/:id" component={ProductShowPage}/>
                <Route path="/items/:id/addtoCart" component={OrderPopup}/>
                <Route path='/cart' component={Cart}/>
                
            </Switch>
          </div>
      </div>
      
  );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserPersist: () => dispatch(getUserPersist())
  }
}
export default connect(null, mapDispatchToProps)(App);
