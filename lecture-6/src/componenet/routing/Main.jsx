import React from 'react'

import { Routes,Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About'
import Home from './Home';
import Header from './Header';
import NotFound from './NotFound';
import Post from './Post';
import ProductDetail from './ProductDetail';

const Main = () => {
  return (
   <>
   <Header/>
<Routes>
        <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/Post' element={<Post/>}/>
<Route path='/post/:id' element={<ProductDetail /> } />
<Route path='*' element={<NotFound/>}/>   


</Routes>
   </>
  )
}

export default Main
