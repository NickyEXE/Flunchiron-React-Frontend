const API = "http://localhost:3000"

// export const like = () => ({type: "ADD_LIKE"})

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

export const handleLoginFormChange = (e) => ({
  type: "LOGIN_FORM_CHANGE",
  // payload: {name: "username", value: "B"}
  // payload: {name: "username", value: "BA"}
  // payload: {name: "username", value: "BAT"}
  // payload: {name: "username", value: "BATM"}
  // payload: {name: "username", value: "BATMA"}
  // payload: {name: "username", value: "BATMAN"}
  payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const sendLogin = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/login", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const autoLogin = () => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/autologin", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const reviewFormChange = (e) => ({
  type: "REVIEW_FORM_CHANGE",
  // payload: {name: "username", value: "B"}
  // payload: {name: "username", value: "BA"}
  // payload: {name: "username", value: "BAT"}
  // payload: {name: "username", value: "BATM"}
  // payload: {name: "username", value: "BATMA"}
  // payload: {name: "username", value: "BATMAN"}
  payload: {name: e.target.name, value: e.target.value}
})

export const submitReview = (reviewData) => {
  return dispatch => {
    fetch(API + "/reviews", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData)
    })
    .then(res=> res.json())
    .then(review => dispatch({
      type: "SET_REVIEW",
      payload: review
    }))
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}
