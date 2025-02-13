import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export default function Carts() {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    // locarStorage에 담긴 cartItem의 배열객체 출력
    // const cartItems = JSON.parse(localStorage.getItem("cartItems")); // 데이터 타입을 App.js에서 String으로 바꿨기 때문에 다시 json 타입으로 변경
    // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));
    const [cartItems, setCartItems] = useState(() => {
        try {
          // 로직이 복잡하면 중간에 꼬여 제대로 작동하지 않을 수 있으므로, 최대한 작업을 분리함
            const initCartList = localStorage.getItem("cartItems");
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.error('로컬스토리지 데이터 작업 도중 에러 발생 : ', error);
        }
    }); 

    // pids 배열 생성 -> cartItems의 pid 값을 pids 배열에 추가
    // const pids = [];
    // cartItems && cartItems.map(item => pids.push(item.pid));
    const pids = cartItems && cartItems.map(item => item.pid); // map(), filter() -> 새로운 배열 생성
    console.log('pids --> ', pids);

    // axios를 이용해 DB 연동
    // axios는 리액트에서 관리하지 않기 때문에 useEffect 없이 단독으로 사용하면 네트워크에 계속해서 정보를 요청해 무한루프가 발생함
    useEffect(() => {
        if (pids.length > 0) {
            axios.post("http://localhost:9000/product/cartItems", {"pids": pids})
                .then(res => {
                    // cartItems에 res.data의 정보 추가
                    const updateCartItems = cartItems.map((item, i) => {
                        const filterItem = res.data.find((ritem) => ritem.pid === item.pid);
                        return filterItem ? 
                            {
                                ...item, 
                                "pname": filterItem.pname, 
                                "price": filterItem.price,
                                "description": filterItem.description,
                                "image": filterItem.image
                            }
                            : item
                    }); // map
                    setCartItems(updateCartItems);
                })
                .catch(err => console.log(err));
        } // if
    }, []);
    
    /** 주문하기 버튼 이벤트 처리 **/
    const handleOrder = () => {
        // 1. 로그인 여부 확인
        if (isLoggedIn) {
            // 2. login 상태일 때 -> DB 연동 후 주문정보 저장
            console.log('isLoggedIn --> ', isLoggedIn);
            const id = localStorage.getItem("user_id");
            const formData = {"id": id, "cartList": cartItems};
            axios.post("http://localhost:9000/cart/add", formData)
                .then(res => {
                    // console.log('result -->', res.data.result_rows)
                    if (res.data.result_rows) {
                        alert("장바구니에 추가되었습니다!");
                        localStorage.removeItem("cartItems");
                    }
                })
                .catch(error => console.log(error));
        } else {
            // logout 상태일 때 -> 로그인 -> DB 연동 후 주문정보 저장
            // const select = window.confirm("로그인이 필요한 서비스입니다.");
            // select && navigate('/login');
            window.confirm("로그인이 필요한 서비스입니다.") && navigate('/login');
        }
    }

    const handleEachOrder = () => {
        console.log("!!!");
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
                    <th></th>
                </tr>
                { cartItems && cartItems.map((item) => 
                    <tr>
                        <td>{item.pid}</td>
                        <td><img src={item.image} alt="preview" style={{width: "100px"}} /></td>
                        <td>{item.pname}</td>
                        <td>{item.description}</td>
                        <td>{item.size}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                        <td><button type='button' onClick={handleEachOrder}>계속 담아두기</button></td>
                    </tr>
                    ) }
            </table>
            <button type='button' onClick={handleOrder}>주문하기</button>
            <button type='button'>장바구니 삭제</button>
        </div>
    );
}