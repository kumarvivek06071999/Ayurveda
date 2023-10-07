import React from 'react'
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import AuthContext, { AuthProvider } from './context/data/AuthContext'
import AllProduct from './pages/allproducts/AllProducts'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
const App = () => {

  return (

    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App