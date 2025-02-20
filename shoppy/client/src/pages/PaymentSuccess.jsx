import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext.js';
import { useOrder } from '../hooks/useOrder.js';

export default function PaymentSuccess() {
    const { getOrderList, saveToOrder }= useOrder();
    const { orderList }= useContext(OrderContext);
    const [searchParams] = useSearchParams();
    const [ isRun, setIsRun ] = useState(false);
    const pg_token = searchParams.get("pg_token");
    
    useEffect(() => {
        // useEffect로 관리하면서 비동기처리 로직이 포함되어 있기 때문에 데이터가 반복해서 저장되는 오류 발생
        // 해결하기 위해 fetchOrderList 함수를 생성해 순서를 지켜 비동기처리되도록 함
        const tid = localStorage.getItem("tid"); // 카카오페이에서 넘겨주는 주문(결제)번호
        tid && setIsRun(true);

        const fetchOrderList = async() => {
            const orderList = await getOrderList();
            console.log('fetchOrderList -> ', orderList);
            
            if (orderList.length > 0) {
                const total_price = orderList.reduce((sum, item) => sum + item.price * item.qty, 0);
                if (pg_token && tid) {
                    // 1. axios를 통한 DB insert --> orderList, total_price
                    // 2. useOrder 커스텀 훅을 이용한 DB insert
                    saveToOrder(orderList, total_price, tid, "kakaopay");
                }
            }
        }

        if(isRun) { fetchOrderList(); }
    }, [isRun]);
    

    // console.log('total_price --> ', orderList.reduce((sum, item) => sum + item.price * item.qty, 0));
    // console.log('payment success orderlist --> ', orderList);

    /** pg_token&& tid가 존재하면 shoppy_order 테이블에 주문내역 insert, shoppy_cart 장바구니 내역 delete **/ 
    // oid(주문내역번호 / pk), pid(상품 아이디), id(주문자 아이디), odate(주문 날짜), total_price(총 주문금액),
    // tid(주문번호), type(주문방식), size, qty(수량) 등...

    // 서버에서 결제 승인 여부 재확인. 필수요소x
    // useEffect(() => {
    //     const approvePayment = async() => {
    //         if (pg_token && tid) {
    //             try {
    //                 const response = await axios.post("http://localhost:9000/payment/approve", { pg_token, tid });
    //                 console.log("결제 승인 완료 : ", response);
    //             } catch (error) {
    //                 console.error("결제 승인 실패 : ", error);
    //             }
    //         }
    //     }
    // }, [pg_token, tid]);

    return (
        <div>
            { pg_token && <h2>결제가 완료되었습니다!</h2> }
        </div>
    );
}