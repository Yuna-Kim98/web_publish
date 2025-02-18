import React, { useState, useEffect, useContext } from "react";
import ReactDom from 'react-dom';
import { useParams, useNavigate } from "react-router-dom";
import { PiGiftThin } from "react-icons/pi";
import axios from "axios";
import Detail from "../components/Detail.jsx";
import Review from '../components/Review.jsx'
import QnA2 from "../components/QnA2.jsx";
import ReturnDelivery from '../components/ReturnDelivery.jsx';
import ImageList from '../components/ImageList.jsx';
import { CartContext } from "../context/CartContext.js";
import { AuthContext } from "../auth/AuthContext.js";
import { useCart } from '../hooks/useCart.js';

export default function DetailProduct() {
    const navigate = useNavigate();
    const { cartList, cartCount } = useContext(CartContext);
    const { isLoggedIn } = useContext(AuthContext);
    const { saveToCartList, updateCartList } = useCart();

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
    
    // 선언된 페이지에서만 사용하고 공유하지 않기 때문에 따로 비동기 처리를 하지 않아도 됨
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
        if (isLoggedIn) {
            const cartItem = {
                pid: product.pid,
                size: size,
                qty: 1
            };
            
            // cartItem에 있는 pid, size를 cartList(로그인 성공시 준비)의 item과 비교 -> 일치하면 qty+1 업데이트, 일치하지 않으면 새로 데이터 추가
            // some : boolead, find: item 요소
            const findItem = cartList && cartList.find(item => item.pid === product.pid && item.size === size);
            if (findItem !== undefined) {
                // qty+1 업데이트
                const result = updateCartList(findItem.cid, "increase");
                result && alert('장바구니에 추가되었습니다!');
            } else {
                // 상품 데이터 새로 추가
                const id = localStorage.getItem("user_id");
                const formData = {id: id, cartList:[cartItem]};
                const result = saveToCartList(formData);
                result && alert('장바구니에 추가되었습니다!');
                console.log('insert :: cartList -->', cartList);
            }
        } else {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/login");
        }
    }; // addCartItem
    console.log('cartCount --> ', cartCount);

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
                </div>
            </div>
        </div>
    );
}