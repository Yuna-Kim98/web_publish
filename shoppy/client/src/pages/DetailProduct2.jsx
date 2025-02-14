import React, { useState, useEffect } from "react";
import ReactDom from 'react-dom';
import { useParams } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import Detail from "../components/Detail.jsx";
import Review from '../components/Review.jsx'
import QnA2 from "../components/QnA2.jsx";
import ReturnDelivery from '../components/ReturnDelivery.jsx';
import ImageList from '../components/ImageList.jsx';

export default function DetailProduct({ addCart }) {
    const tabList = [
        {'name': 'DETAIL'},
        {'name': 'REVIEW'},
        {'name': 'Q&A'},
        {'name': 'RETURN & DELIVERY'}
    ];

    const { pid } = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState("XS"); 
    const [category, setCategory] = useState('DETAIL');
    const [select, setSelect] = useState('DETAIL');
    const [imgList, setImgList] = useState([]);
    const [detailImgList, setDetailImgList] = useState([]);
    
    useEffect(() => {
        axios
            .post("http://localhost:9000/product/detail", {"pid": pid})
            .then((res) => {
                setProduct(res.data);
                setImgList(res.data.imgList);
                setDetailImgList(res.data.detailImgList);
            })
            .catch((error) => console.log(error));
        }, []);
        
    //장바구니 추가 버튼 이벤트
    const addCartItem = () => {
      //장바구니 추가 항목 : { pid, size, qty }
      // alert(`${pid} --> 장바구니 추가 완료!`);
      // console.log(product.pid, product.price, size, 1);
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1
        };
        addCart(cartItem); // App.js의 addCart 함수 호출
    };  

    // 카테고리 선택 & 카테고리 변경 이벤트
    const handleChangeSelect = (name) => {
        setSelect(name);
        setCategory(name);
    }

    return (
        <div className="content">
            <div className="product-detail-top">
                <div className="product-detail-image-top">
                    <img src={product.image} />
                    <ImageList imgList={imgList} className="product-detail-image-top-list" />
                    {/* <ul className="product-detail-image-top-list">
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                        <li>
                            <img src={product.image} alt="" />
                        </li>
                    </ul> */}
                </div>    
                <ul className="product-detail-info-top">
                    <li className="product-detail-title">{product.name}</li>
                    <li className="product-detail-title">
                        {`${parseInt(product.price).toLocaleString()}원`}
                    </li>
                    <li className="product-detail-subtitle">{product.info}</li>
                    <li>
                        <p className="product-detail-box">신규회원, 무이자 할부 등</p>
                    </li>
                    <li className="flex">
                        <label className="product-detail-label">사이즈 </label>
                        <select
                            className="product-detail-select2"
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
                        <button
                            type="button"
                            className="product-detail-button cart"
                            onClick={addCartItem}
                        >
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
            <div className="product2-detail-tab">
                <ul className="product2-detail-tab-ul">
                    { tabList && tabList.map((item) => (
                        <li className={ select === item.name ? "product2-detail-tab-li onClick" : "product2-detail-tab-li" }>
                            <a onClick={() => handleChangeSelect(item.name)}>{item.name}</a>
                        </li>
                    )) }
                </ul>
                <div className="una-qna-list">
                    {/* { category === 'DETAIL' ? <Detail /> : null } */}
                    { category === 'DETAIL' && <Detail imgList={detailImgList} /> }
                    { category === 'REVIEW' && <Review /> }
                    { category === 'Q&A' && <QnA2 /> }
                    { category === 'RETURN & DELIVERY' && <ReturnDelivery /> }
                </div>
            </div>
        </div>
    );
}