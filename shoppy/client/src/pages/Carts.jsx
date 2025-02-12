import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Carts() {
    // locarStorage에 담긴 cartItem의 배열객체 출력
    // const cartItems = JSON.parse(localStorage.getItem("cartItems")); // 데이터 타입을 App.js에서 String으로 바꿨기 때문에 다시 json 타입으로 변경
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")));

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
                    const updateCartItems = cartItems.map((item, i) => 
                                                item.pid === res.data[i].pid &&
                                                    {
                                                        ...item, 
                                                        "pname": res.data[i].pname, 
                                                        "price": res.data[i].price,
                                                        "description": res.data[i].description,
                                                        "image": res.data[i].image
                                                    }
                    );
                    setCartItems(updateCartItems);
                })
                .catch(err => console.log(err));
        }
    }, []);
    console.log('cartItems --> ', cartItems);
    
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
                    {/* <th>total-price</th> */}
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
                        {/* <td>{item.price * item.qty}</td> */}
                    </tr>
                    ) }
            </table>
        </div>
    );
}