import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/products'
function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
