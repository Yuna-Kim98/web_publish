import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext.js";
import { useCart } from "./useCart.js";
import axios from "axios";

export function useOrder() {
    const { calculateTotalPrice } = useCart();
    const { orderList, setOrderList, orderPrice, setOrderPrice, member, setMember } = useContext(OrderContext);

    /** useContext로 관리되는 객체들의 CRUD 함수 정의 **/
    /**
     * 전체 주문 정보 가져오기(orderList 생성) : getOrderList
    **/
    const getOrderList = async() => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/all", {"id": id});
        setOrderList(result.data);
        setMember(result.data[0]);
        calculateTotalPrice(result.data);

    }
    
    return { getOrderList };
}