const initialRestaurantState = {
  restaurants: []
}

const restaurantsReducer = (state=initialRestaurantState, action) => {
  switch (action.type){
    case "SET_RESTAURANTS":
      return {...state, restaurants: action.payload}
    default:
      return {...state}
  }
}

export default restaurantsReducer

// state.restaurants.restaurants
