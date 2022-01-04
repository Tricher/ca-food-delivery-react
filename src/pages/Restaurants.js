import { useEffect, useState } from 'react'
import { getRestaurants } from '../Services/Api'
import RestaurantList from '../components/RestaurantList'

function Restaurants () {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getRestaurants()
      setRestaurants(data)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return (
      <h1>Chargement ...</h1>
    )
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
    </div>

  )
}

export default Restaurants
