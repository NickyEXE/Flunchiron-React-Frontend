import logo from './logo.svg';
import './App.css';
import RestaurantCards from './containers/RestaurantCards'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRestaurants } from './redux/actionCreators'

class App extends Component  {

  componentDidMount(){
    this.props.setRestaurants()
  }

  render(){
    return (
      <>
        <h1>NOURISH.EXE</h1>
        <RestaurantCards/>
      </>
    );
  }
}

export default connect(null, { setRestaurants })(App);
