import React from 'react'
import { connect } from 'react-redux'
import RestaurantCard from '../components/RestaurantCard'
import Filters from '../components/Filters'


const RestaurantCards = (props) => {

  const searchedRestaurants = props.restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(props.search.toLowerCase()) &&
    restaurant.kindOfFood.toLowerCase().includes(props.filter)
  })

  const sortedRestaurants = () => {
    return props.alphabetical ? searchedRestaurants.sort((r1, r2) => r1.name.localeCompare(r2.name)) : searchedRestaurants
  }

  return(
    <>
      <Filters/>
      <div className="cards">
        {sortedRestaurants().map(restaurant => <RestaurantCard key={restaurant.id} {...restaurant} />)}
      </div>
    </>
  )
}

const msp = (state) => ({
  restaurants: state.restaurants.restaurants,
  ...state.restaurants.filtersForm
})

export default connect(msp)(RestaurantCards)
