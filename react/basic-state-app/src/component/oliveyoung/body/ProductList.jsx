import React, { useEffect, useState } from 'react';
import Product from './Product.jsx';

export default function ProductList({cart}) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch("/data/olive.json")
            .then((result) => result.json())
            .then((jsonData) => setProductList(jsonData))
            .catch((error) => console.log(error));
    }, []);

    const totalCart = (id) => {
        // alert(`productList - ${id} 카트 클릭!`);
        cart(id); // AppOlive의 handleCartApp 함수 호출
    }

    return (
        <ul className='product-list-container'>
            {productList && productList.map((item) => 
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
    );
}

