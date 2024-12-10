import React, { useState } from 'react';
import BestBookButton from './BestBookButton.jsx';

export default function BestBook() {
    const list = [
        { "img": "https://image.yes24.com/goods/13137546/L" },
        { "img": "https://image.yes24.com/goods/108422348/L" },
        { "img": "https://image.yes24.com/goods/103495056/L" }
    ];

    const [totalQty, setTotalQty] = useState(0);
    
    const handelChangeQty = (qty) => {
        setTotalQty(totalQty + qty)
    }

    return (
        <>
            <div>전체카트수량 : {totalQty}</div>
            {list.map((item) => 
                <div className='container'>
                    <img className="book-cover" src={item.img} />
                    <BestBookButton totalQtyChange={handelChangeQty} />
                </div>
            )}
        </>
    );
}