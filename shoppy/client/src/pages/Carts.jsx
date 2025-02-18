import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { CartContext } from "../context/CartContext";
import { useCart } from '../hooks/useCart.js';
import "../styles/cart.css";
import axios from "axios";

export default function Cart() {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const { cartList, setCartList } = useContext(CartContext);
    const { getCartList, updateCartList, deleteCartItem } = useCart();
    const hasCheckedLogin = useRef(false);
    
    useEffect(() => {
        if (hasCheckedLogin.current) return; // 로그인 상태인 경우 아래 else문 로직 실행x
        hasCheckedLogin.current = true; // 로그아웃 상태인 경우 window.confirm 실행 후 true로 값 변경

        if (isLoggedIn) {
            // 아이디별 DB 테이블의 카트 리스트 가져오기
            getCartList();
        } else {
            const select = window.confirm('로그인이 필요한 서비스입니다. \n로그인 하시겠습니까?');
            if (select) {
                navigate('/login');
            } else {
                navigate("/")
            }
            setCartList([]);
        }
    }, [isLoggedIn]);
    console.log('carList --> ', cartList);

    const handleDeleteItem = (cid) => {
        const select = window.confirm("장바구니에서 삭제하시겠습니까?");
        select && deleteCartItem(cid);
    }

    return (
        <div className="cart-container">
            <h2 className="cart-header"> 장바구니</h2>
            <button>전체 삭제</button>
            { cartList && cartList.map((item) => 
                <div className="cart-item" >
                    <img src={item.image} alt="" />
                    <div className="cart-item-details">
                        <p className="cart-item-title">{item.pname}</p>
                        <p className="cart-item-title">{item.size}</p> 
                        <p className="cart-item-price">{item.dprice}원</p>
                    </div>
                    <div className="cart-quantity">
                        <button onClick={() => updateCartList(item.cid, "decrease")}>
                        -
                        </button>
                        <input type="text" value={item.qty} readOnly />
                        <button onClick={() => updateCartList(item.cid, "increase")}>
                        +
                        </button>
                    </div>
                    <button
                        className="cart-remove"
                        onClick={() => handleDeleteItem(item.cid)}
                    >
                        🗑
                    </button>
                </div>
            ) }
            <div className="cart-actions">                       
                <button>주문하기</button>
            </div>       
        </div>
    );
    }