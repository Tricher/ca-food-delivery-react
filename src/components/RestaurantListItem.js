import { Link } from 'react-router-dom'
import './style/RestaurantListItemStyle.css'

const IMG_URL = 'https://strapi.myidea.fr'

function RestaurantListItem (props) {
  const { restaurant } = props
  return (
    <div className='card'>
      <Link to={`/restaurant/${restaurant._id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img className='card-img' src={`${IMG_URL}${restaurant.photos[0].url}`} />
        <h1>{restaurant.title}</h1>
        <p>{restaurant.description}</p>
      </Link>
    </div>
  )
}

export default RestaurantListItem
