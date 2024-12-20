import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {
    const handleCart = () => {
        props.totalCart(props.id); // ProductList 컴포넌트 함수 호출
    }

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={props.img} />
                <div>
                    <FontAwesomeIcon 
                        icon={faCartShopping}
                        onClick={handleCart}
                        className="cart-btn"
                    />
                </div>
            </div>
            <div className='product-detail'>
                <p className='product-brand'>{props.brand}</p>
                <p className='product-title'>{props.title}</p>
                <div className='product-charge-price'>
                    <span className='product-charge'>{props.charge}</span>
                    <span className='product-disCharge'>{props.disCharge}</span>
                </div>
                <div className='product-tags'>
                    {props.isSale && <span className='product-tag-sale'>세일</span>}
                    {props.isCoupon &&<span className='product-tag-coupon'>쿠폰</span>}
                    {props.isToday && <span className='product-tag-today'>오늘드림</span>}
                </div>
            </div>
        </div>
    );
}