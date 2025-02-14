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
  // 장바구니 아이템 저장 : 배열
  const [cartList, setCartList] = useState(() => {
    try {
      // 로직이 복잡하면 중간에 꼬여 제대로 작동하지 않을 수 있으므로, 최대한 작업을 분리함
      const initCartList = localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList) : [];
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  }); 
  
  // 장바구니 상품 갯수
  const [cartCount, setCartCount] = useState(() => {
    try {
      const initCartList = localStorage.getItem("cartItems");
      return initCartList ? JSON.parse(initCartList).length : 0;
    } catch (error) {
      console.log('로컬스토리지 데이터 작업 도중 에러 발생');
      console.log(error);
    }
  });

  /** 로컬스토리지 재호출 --> cartList, cartCount 재호출(초기화 작업) **/
  const refreshStorage = (updateCart, updateCount) => {
    setCartList(updateCart);
    setCartCount(updateCount);
  }
  
  /** cartCount가 업데이트 되면 localStorage에 cartList 저장 **/
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartList));
  }, [cartCount]);

  /** 장바구니 추가 **/
  const addCart = (cartItem) => {
    // 입력받은 cartItem이 cartList에 존재하면 qty 수량 증가. 존재하지 않으면 새로 추가
    // const updateCartList = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size) // some : true, false로만 반환
    //                         ? cartList.map(item => 
    //                           item.pid === cartItem.pid && item.size === cartItem.size ? {...item, qty: item.qty+1} : item
    //                           ) 
    //                         : [...cartList, cartItem];
    // 로직이 복잡해 오류(localStorage 데이터가 새로고침시 삭제됨)가 발생되어 아래의 로직으로 수정

    const isCheck = cartList.some(checkItem => checkItem.pid === cartItem.pid && checkItem.size === cartItem.size);
    
    let updateCartList = [];
    if (isCheck) {
      updateCartList = cartList.map(item => 
        item.pid === cartItem.pid && item.size === cartItem.szie ?
                      {...item, qty: item.qty+1}
                      : item
        )
    } else {
      updateCartList = [...cartList, cartItem];
      setCartCount(cartCount + 1);
    }
    setCartList(updateCartList);
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
              <Route path='/cart' element={<Carts refreshStorage={refreshStorage} />} /> {/* localStorage에 정보가 담겨있기 떄문에 데이터 필요x */}
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