import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = (props) => {
  const {imageUrl, name, id} = props

  // console.log(id)
  return (
    <div className="card">
      <img src={imageUrl} alt={name}/><br/>
      <p><Link to={`/restaurants/${id}`}>{name}</Link></p>
    </div>
  )
}

export default RestaurantCard
