import React from 'react'
import { connect } from 'react-redux'
import { reviewFormChange, submitReview } from '../redux/actionCreators'

const ReviewForm = (props) => {

  const { content, rating } = props.form

  const onSubmit = (e) => {
    console.log(props.restaurant_id)
    e.preventDefault()
    props.submitReview({ ...props.form, restaurant_id: props.restaurant_id })
  }

  return(
    <form onSubmit={ onSubmit }>
      <label>
        Rating:
        <input type="number" name="rating" value={rating} onChange={props.reviewFormChange} />
      </label><br/>
      <label>
        Content:
        <textarea name="content" value={content} onChange={props.reviewFormChange}></textarea>
      </label><br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = (state) => ({
  form: state.restaurants.reviewForm
})

export default connect(mapStateToProps, { reviewFormChange, submitReview })(ReviewForm)
