import React, { useState } from 'react';

export default function BestBookButton({totalQtyChange}) {
    const [qty, setQty] = useState(1);

    const handelClick = (type) => {
        if (type === '-') {
            (qty > 1) ? setQty(qty - 1) : alert('1개 이상 구매 가능합니다.');
        } else if (type === '+') {
            (qty >= 1) ? setQty(qty + 1) : setQty(qty);
        }
    }

    return (
        <ul className="btn-list">
            <li>
                <input type="checkbox" />
                <button type="button" onClick={() => {handelClick('-')}}>-</button>
                <span>{qty}</span>
                <button type="button" onClick={() => {handelClick('+')}}>+</button>
            </li>
            <li><button type="button" onClick={() => {totalQtyChange(qty)}}>카트에 넣기</button></li>
            <li><button type="button">바로구매</button></li>
            <li><button type="button">리스트에 넣기</button></li>
        </ul>
    );
}