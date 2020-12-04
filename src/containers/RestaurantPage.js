import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { setSelectedRestaurant, unsetRestaurant } from '../redux/actionCreators'

class RestaurantPage extends Component {

  componentDidMount(){
    // get the id from the route (i.e. grab 1 from "/restaurants/1")
    // we give this.props.match.params a key of id when we define "/restaurants/:id" in our Route path in App.js
    const id = this.props.match.params.id
    this.props.setSelectedRestaurant(id)
  }

  componentWillUnmount(){
    this.props.unsetRestaurant()
  }

  renderPage = () => {
    const { url, name, imageUrl, kindOfFood, address, history, reviews, id } = this.props
    return (
      <>
        <h1><a href={ url }>{ name }</a></h1>
        <button onClick={ history.goBack }>Go back!</button>
        <p><img src={ imageUrl } alt={ name }/></p>
        <p>{ kindOfFood }</p>
        <p>{ address }</p>
        <iframe title="GOOGLE MAPS"
          width="600"
          height="450"
          frameBorder="0" style={{border: 0}}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAofUez4t-xwk4MKMECVA2zzYzz7X9c4D8&q=${name + ", " + address}`} allowFullScreen>
        </iframe>
        <div className="reviews">
          {this.props.user.id && <ReviewForm restaurant_id={id}/>}
          {reviews.map(review => <ReviewCard key={review.id}  {...review}/>)}
        </div>
      </>
    )
  }

  renderSpinner = () => <div className="loader"></div>

  render(){
    return(
      <div className="show">
        {this.props.id ? this.renderPage() : this.renderSpinner()}
      </div>
    )
  }
}

/* <div class="show">
  <h1><%= link_to @restaurant.name, @restaurant.url %></h1>
  <p><%= image_tag @restaurant.image_url %></p>
  <p><%= stars(@restaurant.average_rating) %></p>
  <p><%= @restaurant.kind_of_food %></p>
  <p><%= @restaurant.address %></p>

  <iframe
    width="600"
    height="450"
    frameborder="0" style="border:0"
    src="https://www.google.com/maps/embed/v1/place?key=<%= ENV['GOOGLE_KEY'] %>&q=<%= @restaurant.address%>" allowfullscreen>
  </iframe>

  <div class="reviews">
    <%= form_for @review do |f| %>
      <%= render 'layouts/errors' %>
      <%= f.label :rating %><br>
      <%= f.number_field :rating, in:(1..5) %><br>
      <%= f.label :content %><br>
      <%= f.text_area :content %><br>
      <%= f.hidden_field :restaurant_id, value: @restaurant.id %>
      <%= f.submit %>
    <% end %>
    <% @restaurant.reviews.each do |review| %>
      <div class="review">
        <p><%= review.user.username %>: <%= stars(review.rating) %></p>
        <p><%= review.content %></p>
        <p>Posted at <%= post_date(review.created_at) %></p>
      </div>
    <% end %>
  </div>
</div> */

const mapStateToProps = (state) => ({
  ...state.restaurants.selectedRestaurant,
  user: state.user
})

export default connect( mapStateToProps, { setSelectedRestaurant, unsetRestaurant } )(RestaurantPage)
