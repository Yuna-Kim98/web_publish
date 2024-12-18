import React, { useState } from 'react';

export default function BestBookButton () {
    const [qty, setQty] = useState(1);

    const handleClick = (type) => {
        if (type === '-') {
            (qty > 1) ? setQty(qty - 1) : alert('1개 이상 구매 가능합니다.');
        } else if (type === '+') {
            (qty >= 1) ? setQty(qty + 1) : setQty(qty);
        }
    }

    return (
        <ul className="container-button">
            <li>
                <input type="checkbox" />
                <button type="button" onClick={() => {handleClick('-')}}>-</button>
                <span>{qty}</span>
                <button type="button" onClick={() => {handleClick('+')}}>+</button>
            </li>
            <li><button type="button">카트에 넣기</button></li>
            <li><button type="button">바로구매</button></li>
            <li><button type="button">리스트에 넣기</button></li>
        </ul>
    );
}