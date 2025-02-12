import React, { useEffect, useState } from 'react';
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
  
  /** cartCount가 업데이트 되면 localStorage에 cartList 저장 **/
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartList));
  }, [cartCount]);

  /** 장바구니 추가 **/
  const addCart = (cartItem) => {
    // 입력받은 cartItem이 cartList에 존재하면 qty 수량 증가. 존재하지 않으면 새로 추가
    const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) // some : true, false로만 반환
                            ? cartList.map(item => 
                              item.pid === cartItem.pid && item.size === cartItem.size ? {...item, qty: item.qty+1} : item
                              ) 
                            : [...cartList, cartItem];

    setCartList(updateCartList);
    setCartCount(cartCount + 1);
  }

  // console.log('cartCount --> ', cartCount);
  // console.log('cartList --> ', cartList);

  return (
    <div>
      <AuthProvider> {/* 전역으로 사용해 어디서든 쓸 수 있게 함 */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout cartCount={cartCount} />}>
              <Route index element={<Home />} />
              <Route path='/all' element={<Products />} />
              <Route path='/cart' element={<Carts />} /> {/* localStorage에 정보가 담겨있기 떄문에 데이터 필요x */}
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