const nullRestaurant = {
  id: null,
  name: "",
  url: "",
  lat: "",
  long: "",
  address: "",
  imageUrl: "",
  kindOfFood: ""
}

const initialRestaurantState = {
  restaurants: [],
  selectedRestaurant: nullRestaurant
}

const restaurantsReducer = (state=initialRestaurantState, action) => {
  switch (action.type){
    case "SET_RESTAURANTS":
      return {...state, restaurants: action.payload}
    case "SET_SELECTED_RESTAURANT":
      return {...state, selectedRestaurant: action.payload}
    case "UNSET_RESTAURANT":
      return {...state, selectedRestaurant: nullRestaurant}
    default:
      return {...state}
  }
}

export default restaurantsReducer

// state.restaurants.restaurants
