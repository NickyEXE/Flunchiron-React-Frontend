import logo from './logo.svg';
import './App.css';
import RestaurantCards from './containers/RestaurantCards'
import RestaurantPage from './components/RestaurantPage'
import Login from './components/Login'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRestaurants } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component  {

  componentDidMount(){
    this.props.setRestaurants()
  }

  render(){
    console.log(this.props)
    return (
      <>
        <h1>NOURISH.EXE</h1>
        {this.props.user.id
        ?
          <Switch>
            <Route path="/restaurants/:id" component={RestaurantPage}/>
            <Route path="/restaurants" component={RestaurantCards}/>
          </Switch>
        :
          <Login/>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { setRestaurants })(App);
