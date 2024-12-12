import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]); // 전체 상품 리스트
    const [list, setList] = useState([]); // 화면 출력용 리스트

    /**
     * 실시간 작업이 이루어질 때는(데이터가 계속해서 변경될 때) json데이터를 불러오는 곳에서
        이벤트를 처리하는 게 효율적
     * 데이터 변동이 없을 때 이벤트를 처리할 때는 데이터를 불러온 상태에서 따로 필터링 작업을
        거치는 것이 효율적이다
     **/
    useEffect(() => {
        fetch("/data/olive.json")
            .then((result) => result.json())
            .then((jsonData) => {
                setProductList(jsonData);
                setList(jsonData);
            })
            .catch((error) => console.log(error));
    }, []);

    const totalCart = (id) => {
        // alert(`productList - ${id} 카트 클릭!`);
        cart(id); // AppOlive의 handleCartApp 함수 호출
    }

    const [type, setType] = useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }
    console.log(`type ---> ${type}`);
    
    useEffect(() => {
        // productList.filter() --> 결과 : list = [{item}, {item} ...] 새로운 배열 객체 생성
        // 실시간으로 데이터 변동이 있을 때는 아래 로직 그대로 사용 가능
        // 고정된 데이터를 사용할 때는 따로 관리해줄 배열을 선언해주어야 함

        if(type === 'total') {
            setList(productList);
        } else {
            const list = productList.filter((item) => { // list -> 지역변수
                if (type === 'sale' && item.isSale) {
                    return item;
                } else if (type === 'coupon' && item.isCoupon) {
                    return item;
                } else if (type === 'today' && item.isToday) {
                    return item;
                }
            })
            
            setList(list); // setList의 list -> 전역변수
        }

        
    }, [type]); // type이 바뀔 때마다 useEffect에 영향을 줌
    
    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleTypeChange} /><label>전체</label>
                <input type="radio" name="type" value="sale" onClick={handleTypeChange} /><label>세일</label>
                <input type="radio" name="type" value="coupon" onClick={handleTypeChange} /><label>쿠폰</label>
                <input type="radio" name="type" value="today" onClick={handleTypeChange} /><label>오늘드림</label>
            </div>
            <ul className='product-list-container'>
                {/* productList.map() --> 결과 : [] 새로운 배열 객체 생성 */}
                {list && list.map((item) => 
                    <li>
                        <Product 
                            totalCart={totalCart}
                            id={item.id}
                            rank={item.rank}
                            img={item.img}
                            brand={item.brand}
                            title={item.title}
                            charge={item.charge}
                            disCharge={item.disCharge}
                            isSale={item.isSale}
                            isCoupon={item.isCoupon}
                            isToday={item.isToday}
                        />
                    </li>
                    )}
            </ul>
        </>
    );
}

