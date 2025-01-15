import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductAvata from './ProductAvata.jsx';

export default function ProductList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('data/products.json')
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));
    }, []);

    // 제품 리스트를 한 줄에 3개씩 출력
    const rows = [];
    for (let i = 0; i < list.length; i+=3) {
        rows.push(list.slice(i, i+3));
    }
    // console.log('rows --> ', rows);

    return (
        <div>
            { rows.map((rowArray) => 
                <div className='product-list'>
                    { rowArray.map((product) => 
                        <Link to={`/products/${product.pid}`}>
                            <ProductAvata key={product.pid} img={product.image} alt={product.alt} />
                        </Link>
                    ) }
                </div>
            ) }
        </div>
    );
}