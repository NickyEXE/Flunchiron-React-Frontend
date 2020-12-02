import React from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'

const RestaurantCards = (props) => {
  console.log(props.restaurants)
  return(
  <div className="cards">
    {props.restaurants.map(restaurant => <RestaurantCard key={restaurant.id} {...restaurant} />)}
  </div>
  )
}

const msp = (state) => ({
  restaurants: state.restaurants.restaurants
})

export default connect(msp)(RestaurantCards)
