import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export default function Carts({refreshStorage}) {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            // DB - shoppy_cart 정보
            const id = localStorage.getItem("user_id");
            console.log("DB");
            axios.post("http://localhost:9000/cart/items", {"id": id})
                .then(res => setCartList(res.data))
                .catch(err => console.log(err));
        } else {
            // localstorage > 주문하기 : 로그인
            console.log("localstorage");
            addCartList();
        }
    }, [isLoggedIn]);

    /** 로컬스토리지 데이터 --> 장바구니 추가 !!!중요 :: 비동기처리!!! **/
    const addCartList = () => {

        const items = localStorage.getItem("cartItems"); // "cartItems" : String type
        setTimeout(() => {
            setCartList([...JSON.parse(items)]); // "cartItems" -> json type으로 변환
        }, 0);
    }
    
    return (
        <div className='content'>
            <h1>MyCart</h1>
            <table border='1'>
                <tr>
                    <th>pid</th>
                    <th>image</th>
                    <th>pname</th>
                    <th>description</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>price</th>
                    {
                        isLoggedIn &&
                        <th>배송지 주소</th>
                    }
                </tr>
                { cartList && cartList.map((item) => 
                    <tr>
                        <td>{item.pid}</td>
                        <td><img src={item.image} alt="preview" style={{width: "100px"}} /></td>
                        <td>{item.pname}</td>
                        <td>{item.info}</td>
                        <td>{item.size}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                        { isLoggedIn && <td>{item.zipcode}/{item.address}</td> }
                        {/* <td><button type='button' onClick={() => handleOrder("each", item.pid, item.size)}>계속 담아두기</button></td> */}
                    </tr>
                    ) }
            </table>
            {/* <button type='button' onClick={() => handleOrder("all")}>주문하기</button> */}
            {/* <button type='button' onClick={handleReset}>전체 삭제</button> */}
        </div>
    );
}