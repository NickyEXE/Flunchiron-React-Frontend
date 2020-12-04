import logo from './logo.svg';
import './App.css';
import RestaurantCards from './containers/RestaurantCards'
import RestaurantPage from './containers/RestaurantPage'
import Login from './components/Login'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRestaurants, autoLogin, logout } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component  {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
    this.props.setRestaurants()
  }

  render(){
    return (
      <>
        <h1>NOURISH.EXE</h1>
        {this.props.user.id
        ?
          <>
          <button onClick={this.props.logout}>Logout!</button>
          <Switch>
            <Route path="/restaurants/:id" component={RestaurantPage}/>
            <Route path="/restaurants" component={RestaurantCards}/>
          </Switch>
          </>
        :
          <Login/>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { setRestaurants, autoLogin, logout })(App);
