import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext.js';

export default function Carts({refreshStorage}) {
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
    }, [cartItems]);
    
    /** 주문하기 버튼 이벤트 처리 **/
    const handleOrder = (type, pid, size) => {
        console.log(type, pid, size);
        
        const id = localStorage.getItem("user_id");
        let formData = [];
        
        if (type === "all") { // 주문하기 버튼 클릭 -> 전체 상품 DB에 저장
            formData = {"id": id, "cartList": cartItems};
        } else {
            const filterItem = cartItems.filter(item => item.pid === pid && item.size === size);
            formData = { "id": id, "cartList" : filterItem };
        }
        
        console.log('formData --> ', formData);

        // 1. 로그인 여부 확인 
        if (isLoggedIn) {
            // 2. login 상태일 때 -> DB 연동 후 주문정보 저장
            console.log('isLoggedIn --> ', isLoggedIn);
            axios.post("http://localhost:9000/cart/add", formData)
                .then(res => {
                    // console.log('result -->', res.data.result_rows)
                    if (res.data.result_rows) {
                        alert("장바구니에 추가되었습니다!");
                        if (type === "all") {
                            clearStorageAll();
                            // App.js의 cartItems, cartCount 초기화
                            refreshStorage([], 0);
                        } else {
                            // 로컬스토리지 개별 삭제
                            const updateCart = clearStorageEach(pid, size);
                            refreshStorage(updateCart, updateCart.length);
                        }
                    }
                })
                .catch(error => console.log(error));
        } else {
            // logout 상태일 때 -> 로그인 -> DB 연동 후 주문정보 저장
            window.confirm("로그인이 필요한 서비스입니다.") && navigate('/login');
        }
    }

    // 로컬스토리지 전체 아이템 삭제
    const clearStorageAll = () => {
        console.log('-------------> 로컬스토리지 전체 삭제 시작');
        // 비동기/동기 처리가 각각 진행되기 때문에 로직이 순차적으로 진행되지 않음. 때문에 함수를 사용해 묶어서 비동기처리를 진행
        // 단, App.js의 cartItems가 초기화되지 않기 때문에 새상품 추가 후 장바구니로 이동하면 DB로 보낸 상품들까지 다시 뜨게 됨
        localStorage.removeItem("cartItems");
        setTimeout(() => {
            setCartItems([]);
        }, 0);
        console.log('------------> 로컬스토리지 전체 삭제 종료');
    }
    
    // 로컬스토리지 부분 아이템 삭제
    const clearStorageEach = (pid, size) => {
        const updateCart = cartItems.filter(item => !(item.pid === pid && item.size === size));
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(() => {setCartItems(updateCart)}, 0);
        return updateCart;
    }

    /** 장바구니 비우기 이벤트 처리 - 수정 필요 **/
    const handleReset = () => {
        const select = window.confirm("장바구니를 비우시겠습니까?");
        select && localStorage.removeItem("cartItems");
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
                        <td><button type='button' onClick={() => handleOrder("each", item.pid, item.size)}>계속 담아두기</button></td>
                    </tr>
                    ) }
            </table>
            <button type='button' onClick={() => handleOrder("all")}>주문하기</button>
            <button type='button' onClick={handleReset}>전체 삭제</button>
        </div>
    );
}