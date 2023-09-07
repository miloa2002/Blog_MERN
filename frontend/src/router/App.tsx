import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/public_area/Home'
import Admin from '../pages/private_area/Admin'
import OneBlog from '../components/OneBlog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<OneBlog />} />
        <Route path='/private/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
