const API = "http://localhost:3000"

export const like = () => ({type: "ADD_LIKE"})

// thunk allows us to return a function that takes in the argument of dispatch, instead of a plain object representing the action
export const setRestaurants = () => {
  return dispatch => {
    fetch(API + "/restaurants")
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: "SET_RESTAURANTS",
      payload: restaurants
    })
  )}
}

export const setSelectedRestaurant = (id) => {
  console.log(id)
  return dispatch => {
    fetch(API + "/restaurants/" + id)
    .then(res => res.json())
    .then(restaurant => dispatch({
      type: "SET_SELECTED_RESTAURANT",
      payload: restaurant
    })
  )}
}

export const unsetRestaurant = () => ({type: "UNSET_RESTAURANT"})

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})
