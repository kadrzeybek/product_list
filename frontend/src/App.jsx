import { Route, Routes } from 'react-router-dom'
import Products from './pages/ProductsPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
