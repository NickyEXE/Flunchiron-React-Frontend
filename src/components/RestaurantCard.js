import React from 'react'

const RestaurantCard = (props) => {
  const {imageUrl, name} = props
  return (
    <div className="card">
      <img src={imageUrl} alt={name}/><br/>
      <p>{name}</p>
    </div>
  )
}

export default RestaurantCard
