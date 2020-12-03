import restaurantsReducer from './restaurantsReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

// state: {
//   restaurants: {
//     restaurants: [restaurant1, restaurant2],
//     selectedRestaurant: {name: "Fuddruckers", address: "Space"}
//   }
//   user: {
//     username: "Cheese",
//     id: 1
//   }
// }

// combineReducers allows us to combine multiple reducers, keeping their parts of state separate based on the keys we define
export const reducer = combineReducers({
  restaurants: restaurantsReducer,
  user: userReducer
})
