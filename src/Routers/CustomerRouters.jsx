import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/navigation'
import Footer from '../customer/components/footer/footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation  />
        </div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={<Product />} />
            <Route path='/product/:productid' element={<ProductDetails/>} />
           
        </Routes>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default CustomerRouters