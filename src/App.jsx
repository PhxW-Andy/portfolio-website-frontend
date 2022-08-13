import { Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
