import { Route, Routes } from 'react-router-dom'
import { Event } from '../pages/Event'
import { Subscribe } from '../pages/Subscribe'

export default function () {
  return (
    <Routes>
      <Route path='/' element={<Subscribe />} />
      <Route path='event' element={<Event />} />
    </Routes>
  )
}