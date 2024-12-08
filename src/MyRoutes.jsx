import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/UserDashboard/Layout'
import RegisterPage from './pages/Userpages/RegisterPage'
import LoginPage from './pages/Userpages/LoginPage'
import Mens from './pages/Userpages/Mens'
import Womens from './pages/Userpages/Womens'
import Kids from './pages/Userpages/Kids'
import ProductDetail from './pages/Userpages/ProductDetail'
import Cart from './pages/Userpages/Cart'
import HomePage from './pages/Userpages/HomePage'
import Adminnav from './components/AdminDashboard/Adminnav'
import Adminlayout from './components/AdminDashboard/main/Adminlayout'
import Size from './pages/Adminpages/size/Size'
import EditSize from './pages/Adminpages/size/EditSize'
import AdminDashboard from './pages/Adminpages/mainpage/AdminDashboard'
import FormSize from './pages/Adminpages/size/FormSize'
import Productlist from './pages/Adminpages/product/Productlist'
import Editproduct from './pages/Adminpages/product/Editproduct'
import Addproduct from './pages/Adminpages/product/Addproduct'
import Categorylist from './pages/Adminpages/category/Categorylist'
import Editcategory from './pages/Adminpages/category/Editcategory'
import AddCategory from './pages/Adminpages/category/AddCategory'
import Subcategorylist from './pages/Adminpages/category/Subcategorylist'
import Editsub from './pages/Adminpages/category/Editsub'
import AddSub from './pages/Adminpages/category/AddSub'
import Colorlist from './pages/Adminpages/color/Colorlist'
import EditColor from './pages/Adminpages/color/EditColor'
import AddColor from './pages/Adminpages/color/AddColor'
import ProductColor from './pages/Adminpages/color/ProductColor'
import EditProductColor from './pages/Adminpages/color/EditProductColor'
import AddProductColor from './pages/Adminpages/color/AddProductColor'
import Listimage from './pages/Adminpages/productimage/Listimage'
import Editimage from './pages/Adminpages/productimage/Editimage'
import Addimage from './pages/Adminpages/productimage/Addimage'
import Stocklist from './pages/Adminpages/stock/Stocklist'
import Editstock from './pages/Adminpages/stock/Editstock'
import Addstock from './pages/Adminpages/stock/Addstock'
import Orderlist from './pages/Adminpages/order/Orderlist'


const MyRoutes = () => {
  return (
    <Router>
      <Routes>

        {/* User page Route */}
        <Route path='' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/productDetail' element={<ProductDetail />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* Admin Route */}
        <Route path="/etrendadmin" element={<Adminlayout />}>
          <Route index element={<AdminDashboard />} />
          {/* for product  */}
          <Route path='allproduct' element={<Productlist />} />
          <Route path='editproduct/:id' element={<Editproduct />} />
          <Route path='addproduct' element={<Addproduct/>} />

          {/* for category */}
          <Route path='allcategory' element={<Categorylist />} />
          <Route path='editcategory/:id' element={<Editcategory />} />
          <Route path='addcategory' element={<AddCategory />} />

          {/* for sub-category */}
          <Route path='allsub' element={<Subcategorylist />} />
          <Route path='editsub/:id' element={<Editsub />} />
          <Route path='addsub' element={<AddSub />} />

          {/* for color */}
          <Route path='allcolor' element={<Colorlist/>} />
          <Route path='editcolor/:id' element={<EditColor />} />
          <Route path='addcolor' element={<AddColor />} />

          {/* for product color */}
          <Route path='allpcolor' element={<ProductColor />} />
          <Route path='editpcolor/:id' element={<EditProductColor />} />
          <Route path='addpcolor' element={<AddProductColor />} />

          {/* for product image */}
          <Route path='allpimage' element={<Listimage/>} />
          <Route path='editpimage/:id' element={<Editimage/>} />
          <Route path='addpimage' element={<Addimage />} />

          {/* for size  */}
          <Route path='allsize' element={<Size />} />
          <Route path='editSize/:id' element={<EditSize />} />
          <Route path='addsize' element={<FormSize />} />
          
          {/* for stock */}
          <Route path='allstock' element={<Stocklist />} />
          <Route path='editstock/:id' element={<Editstock />} />
          <Route path='addstock' element={<Addstock />} />

          {/* for order */}
          <Route path='allorder' element={<Orderlist/>} />
          <Route path='editstock/:id' element={<Editstock />} />
       

        </Route>

      </Routes>

    </Router>
  )
}

export default MyRoutes