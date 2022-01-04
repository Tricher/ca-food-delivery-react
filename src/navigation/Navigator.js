import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurants from '../pages/Restaurants'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Restaurants' element={<Restaurants />} />
    </Routes>
  )
}

export default Navigator
