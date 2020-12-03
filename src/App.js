import logo from './logo.svg';
import './App.css';
import RestaurantCards from './containers/RestaurantCards'
import RestaurantPage from './components/RestaurantPage'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRestaurants } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component  {

  componentDidMount(){
    this.props.setRestaurants()
  }

  render(){
    return (
      <>
        <h1>NOURISH.EXE</h1>
        <Switch>
          <Route path="/restaurants/:id" component={RestaurantPage}/>
          <Route path="/restaurants" component={RestaurantCards}/>
        </Switch>
      </>
    );
  }
}

export default connect(null, { setRestaurants })(App);
