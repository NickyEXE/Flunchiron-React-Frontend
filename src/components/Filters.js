import { connect } from 'react-redux'
import { handleSearchFormChange } from '../redux/actionCreators'

const Filters = (props) => {
  return(
    <form>
        <label>
          Search:
          <input type="text" name="search" value={props.search} onChange={props.handleSearchFormChange} />
        </label><br/>
        <label>
          Sort:
          <input
            name="alphabetical"
            type="checkbox"
            checked={props.alphabetical}
            onChange={props.handleSearchFormChange} />
        </label><br/>
        <select name="filter" value={props.filter} onChange={props.handleSearchFormChange}>
          <option value="">Show All Restaurants</option>
          {props.kindsOfFood.map(kf => <option key={kf} value={kf.toLowerCase()}>{kf}</option>)}
        </select>
        <input type="submit" value="Submit" />
      </form>
  )
}

const msp = (state) => ({
  ...state.restaurants.filtersForm,
  kindsOfFood: state.restaurants.kindsOfFood
})

export default connect(msp, { handleSearchFormChange })(Filters)
