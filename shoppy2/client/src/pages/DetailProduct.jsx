import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import Detail from '../components/products-detail/Detail.jsx';
import Review from "../components/products-review/Review.jsx";
import QnA from '../components/products-qna/QnA.jsx';
import ReturnDelivery from '../components/products-return&delivery/ReturnDelivery.jsx';
import axios from "axios";

export default function DetailProduct({ addCart }) {
    const { pid } = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("XS");
    const [category, setCategory] = useState('DETAIL');
    const [select, setSelect] = useState('DETAIL');

    const tabList = [
        {'name': 'DETAIL'},
        {'name': 'REVIEW'},
        {'name': 'Q&A'},
        {'name': 'RETURN & DELIVERY'}
    ];

    useEffect(() => {
        axios
            .get("/data/products.json") // http://localhost:3000/data/products.json
            .then((res) => {
                res.data.filter((product) => {
                    if (product.pid === pid) setProduct(product);
                });
            })
        .catch((error) => console.log(error));
    }, []);

    //장바구니 추가 버튼 이벤트
    const addCartItem = () => {
      //장바구니 추가 항목 : { pid, size, count, price }
      // alert(`${pid} --> 장바구니 추가 완료!`);
      // console.log(product.pid, product.price, size, 1);
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1,
            price: product.price,
        };
      addCart(cartItem); // App.js의 addCart 함수 호출
    };

    // 탭 변경 이벤트
    const handleCategoryChange = (name) => {
        setCategory(name);
        setSelect(name);
    }

    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                    <img src={product.image} />
                    <ul className="product-detail-image-top-list">
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                    </ul>
                </div>

                <ul className="product-detail-info-top">
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">{`${parseInt(product.price).toLocaleString()}원`}</li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <p className="product-detail-box">신규회원, 무이자 할부 등</p>
                    </li>
                    <li className="flex">
                        <label className="product-detail-label">사이즈 </label>
                        <select className="product-detail-select2"
                                onChange={(e) => setSize(e.target.value)}
                        >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </li>
                    <li className="flex">
                        <button type="button" className="product-detail-button order">
                        바로 구매
                        </button>
                        <button type="button"
                                className="product-detail-button cart"
                                onClick={addCartItem}>
                        쇼핑백 담기
                        </button>
                        <div type="button" className="gift">
                            <PiGiftThin />
                            <div className="gift-span">선물하기</div>
                        </div>
                    </li>
                    <li>
                        <ul className="product-detail-summary-info">
                                <li>상품 요약 정보</li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* DETAIL / REVIEW / Q&A / RETURN & DELIVERY  */}
            <div className="product-detail-tab">
                <ul>
                    { tabList && tabList.map((item) => (
                        <li className={item.name === category ? "product-detail-tab-li active" : "product-detail-tab-li" }
                            onClick={() => {handleCategoryChange(item.name)}}>
                            <a>{item.name}</a>
                        </li>
                    )) }
                </ul>
                <div className="product-detail-content">
                    { select === 'DETAIL' ?  <Detail /> : null }
                    { select === 'REVIEW' ?  <Review /> : null }
                    { select === 'Q&A' ?  <QnA /> : null }
                    { select === 'RETURN & DELIVERY' ?  <ReturnDelivery /> : null }
                </div>
            </div>
        </div>
    );
}