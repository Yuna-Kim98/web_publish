import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import axios from "axios";

export function useCart() { // Custom Hook
    const {cartList, setCartList, cartCount, setCartCount, setTotalPrice} = useContext(CartContext);

    /**
     * 함수 생성 - 비동기 로직 & useContext가 관리하는 변수는 await/async를 통해 순서 보장
        1-1. saveToCartList 실행 : formData -> DB에 저장 후 결과가 있을 경우 getCartList 실행(cart 페이지에 뜰 리스트 호출) 
        2. setCartCount 호출 : qty 증가
        3. getCartList 실행 : 아이디 별로 DB에 저장된 장바구니 아이템 목록 전체 호출

        1-2. updateCartList 실행 : cid값을 보내며 업데이트할 아이템 목록 호출
        2. getCartList 실행 : 
    **/

    /** 장바구니 전체 리스트 조회 **/
    const getCartList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/items", {"id": id});
        // setCartCount(cartCount+1);
        setCartList(result.data);
        setCartCount(result.data.length);
        calculateTotalPrice(result.data);
    }

    /** 장바구니 새로운 아이템 저장 **/
    const saveToCartList = async(formData) => {
        // DB 연동 --> formData 정보 저장 후 결과 변수에 저장
        const result = await axios.post("http://localhost:9000/cart/add", formData);
        // DB 연동 --> cartList 호출
        if (result.data.result_rows) {
            setCartCount(cartCount+1);
            getCartList();
        }

        return result.data.result_rows; // 0 or 1
    }
    
    /** 장바구니 아이템 수량 업데이트 **/
    const updateCartList = async(cid, type) => {
        const result = await axios.put("http://localhost:9000/cart/updateQty", {"cid": cid, "type": type});
        result.data.result_rows && getCartList();

        return result.data.result_rows;
    }

    /** 장바구니 전체 카운트 조회 **/
    const getCount = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/cart/count", {"id": id});
        setCartCount(result.data.count);

        return result.data.count;
    }

    /** 장바구니 카운트 초기화 */
    const setCount = (value) => setCartCount(value);

    /** 장바구니 아이템 개별 삭제 **/
    // const deleteItem = async(cid) => {
    //     const result = await axios.post("http://localhost:9000/cart/deleteItem", {"cid": cid});
    //     if (result.data.result_rows) {
    //         getCartList();
    //         getCount();
    //     }
    // }

    const deleteCartItem = async(cid) => {
        // delete를 사용할 때는 전송할 데이터를 한 번 더 객체로 묶어주어야 한다
        const result = await axios.delete("http://localhost:9000/cart/deleteItem", {data: {"cid": cid}}); 
        // if (result.data.result_rows) {
        //     getCartList();
        //     getCount();
        // }
        result.data.result_rows && getCartList();
    }

    /** 장바구니 총 주문금액 계산하기 **/
    // 컴포넌트에서 호출없이 동작만 하기 때문에 따로 반환하지 않음
    const calculateTotalPrice = (cartList) => {
        // 실시간 업데이트를 위해 sql이 아닌 함수 사용
        const totalPrice = cartList.reduce((sum, item) => sum + item.price * item.qty, 0);
        setTotalPrice(totalPrice);
    }

    return { saveToCartList, updateCartList, getCartList, getCount, setCount, deleteCartItem, calculateTotalPrice };
}