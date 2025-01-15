import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailProduct({addCart}) {

    const { pid } = useParams(); // { "pid": pid }
    const [ product, setProduct ] = useState({});
    const [ size, setSize ] = useState('XS'); // 사이즈 선택 관리

    useEffect(() => {
        axios.get('/data/products.json') // axios는 네트워크를 통해 데이터를 가져옴 때문에 경로를 절대 경로로 작성하는 것이 좋음
            .then((res) => {
                res.data.filter((product) => {
                    if (product.pid === pid) setProduct(product);
                });
            })
            .catch((error) => console.log(error));
    }, []);

    // 장바구니 추가 버튼 이벤트
    // 컴포넌트 자체를 함수로 생성하기 때문에 그 안에서 실행되는 함수는 변수형 함수를 사용한다.
    const addCartItem = () => {
        // 장바구니 추가 항목 : pid, size, count, price
        // alert(`${pid} --> 장바구니 추가 완료!`);
        // console.log(product.pid, product.price, size, 1);
        const cartItem = {
            "pid": product.pid,
            "size": size,
            "qty": 1,
            "price": product.price
        };
        addCart(cartItem); // App.js의 addCart 함수 호출
    }

    return (
        <div className='content'>
            <div className='product-detail'>
                <img src={product.image} alt={`product ${product.pid}`} />
                <ul>
                    <li className='product-detail-title'>{product.name}</li>
                    <li className='product-detail-title'>{`${parseInt(product.price).toLocaleString()}원`}</li>
                    {/* 데이터는 모두 string 타입으로 넘어오는 것을 유의해야 함! */}
                    <li className='product-detail-subtitle'>{product.info}</li>
                    <li>
                        <span className='product-detail-select1'>옵션 : </span>
                        <select className='product-detail-select2'
                                onChange={(e) => setSize(e.target.value)}>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li>
                        <button type="button" 
                                className='product-detail-button'
                                onClick={addCartItem}>
                            장바구니 추가
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}