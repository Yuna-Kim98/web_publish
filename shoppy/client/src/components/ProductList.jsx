import React, { useEffect, useState } from 'react';
import ProductAvata from './ProductAvata.jsx';
import axios from 'axios'; // 외부 라이브러리이므로 import 반드시 필요
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [list, setList] = useState([]); // list 변경시 실시간 업데이트

    useEffect(() => {
        axios.get('/data/products.json') // node 서버 환경에서 네트워크를 통해 데이터를 가져옴
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));

        // fetch('data/products.json') // 자바스크립트에서 데이터를 가져올 때 사용
        //     .then((data) => data.json())
        //     .then((jsonData) => setList(jsonData)) // jsonData를 전역변수화
        //     .catch((error) => console.log(error));
    }, []);

    // 출력 리스트 생성 [ [{}, {}, {}], [{}, {}, {}]. [{}] ] -> 2차원 배열
    // 리스트를 한줄에 3개씩 출력
    const rows = [];
    for (let i = 0; i < list.length; i+=3) {
        rows.push(list.slice(i, i+3));
    }
    console.log('rows --> ', rows);

    return (
        <div>
            {/* 3개씩 끊어 리스트를 생성하는 코드 */}
            { rows.map((rowArray) => // 1차원 배열 map
                <div className='product-list'>
                    { rowArray.map((product) => // 2차원 배열 map
                        <Link key={product.pid} to={`/products/${product.pid}`}>
                            <ProductAvata img={product.image} />
                        </Link>
                    ) }
                </div>
            ) }

            {/* 리스트 전체 map 코드
            { list && list.map((product) => 
                <ProductAvata img={product.image} />
            ) } */}
        </div>
    );
}