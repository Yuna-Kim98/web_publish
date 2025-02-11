import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
// import DetailProduct from './pages/DetailProduct.jsx';
import DetailProduct from './pages/DetailProduct2.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import './styles/shoppy.css';

export default function App() {
  // 장바구니 리스트 : 배열
  const [cartList, setCartList] = useState([]); // 장바구니 아이템 저장 : 배열
  const [cartCount, setCartCount] = useState(0); // 장바구니 상품 갯수
  
  const addCart = (cartItem) => {
    // console.log('cartItem --> ', cartItem);
    setCartList([...cartList, cartItem]);
    // setCartList(cartItem);
    
    setCartCount(cartCount + 1);
  }

  console.log('cartCount --> ', cartCount);
  console.log('cartList --> ', cartList);

  return (
    <div>
      <AuthProvider> {/* 전역으로 사용해 어디서든 쓸 수 있게 함 */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout cartCount={cartCount} />}>
              <Route index element={<Home />} />
              <Route path='/all' element={<Products />} />
              <Route path='/cart' element={<Carts cartList={cartList} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/products/:pid' element={<DetailProduct addCart={addCart} />} />
              <Route path='/products/new' element={<NewProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}