import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Category from './pages/Category'
import ShopCategory from './pages/ShopCategory'
import ProductDisplay from './components/ProductDisplay/ProductDisplay'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { data } from 'autoprefixer'
// import Search from './components/Header/Search'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ShopCategory' element={<ShopCategory />} />
        <Route path='/shoes' element={<ShopCategory category='Shoes' />} />
        <Route path='/t-shirt' element={<ShopCategory category='T-shirt' />} />
        <Route path='/accessories' element={<ShopCategory category='Accessories' />} />
        <Route path='/Jordan' element={<ShopCategory brand='Jordan' />} />
        <Route path='/Nike By You' element={<ShopCategory brand='Nike By You' />} />
        <Route path='/Nike Sportswear' element={<ShopCategory brand='Nike Sportswear' />} />
        <Route path='product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
