const nullRestaurant = {
  id: null,
  name: "",
  url: "",
  lat: "",
  long: "",
  address: "",
  imageUrl: "",
  kindOfFood: "",
  reviews: []
}

const nullReviewForm = {
  content: "",
  rating: 0
}

const initialState = {
  restaurants: [],
  selectedRestaurant: nullRestaurant,
  reviewForm: nullReviewForm
}

const restaurantsReducer = (state=initialState, action) => {
  switch (action.type){
    case "SET_RESTAURANTS":
      return {...state, restaurants: action.payload}
    case "SET_SELECTED_RESTAURANT":
      return {...state, selectedRestaurant: action.payload}
    case "UNSET_RESTAURANT":
      return {...state, selectedRestaurant: nullRestaurant}
    case "REVIEW_FORM_CHANGE":
      return {...state, reviewForm: {
        ...state.reviewForm,
        // if the payload's name is "content", this will update the
        // content key in the reviewForm in state with the new payload value
        [action.payload.name]: action.payload.value
      }}
    case "SET_REVIEW":
      return {
        ...state,
        selectedRestaurant: {
          ...state.selectedRestaurant,
          reviews: [...state.selectedRestaurant.reviews, action.payload]
        },
        reviewForm: nullReviewForm
      }
    default:
      return {...state}
  }
}

export default restaurantsReducer

// state.restaurants.restaurants
