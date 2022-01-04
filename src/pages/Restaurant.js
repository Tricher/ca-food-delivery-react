import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { getRestaurantsById } from '../Services/Api'

function Restaurant () {
  const [restaurant, setRestaurant] = useState(null)
  const [loading, setLoading] = useState(false)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await getRestaurantsById(params.id)
      setRestaurant(data)
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
      <pre>{JSON.stringify(restaurant, null, 2)}</pre>
    </div>
  )
}

export default Restaurant
