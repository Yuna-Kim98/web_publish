import React, { useState } from 'react';
import './yes24.css';
import BookCover from './BookCover.jsx';
import BookDetail from './BookDetail.jsx';
import Button from './Button.jsx';

export default function AppBestSeller() {
    const bookList = [
        {
            "img": "https://image.yes24.com/goods/13137546/L",
            "recom": true,
            "today": true,
            "des": "2024 노벨문학상 수상작가",
            "alt": "소년이 온다",
            "coment": "2024 노벨문학상 수상작가",
            "type": "도서",
            "title": "소년이 온다",
            "writer": "한강",
            "company": "창비",
            "date": "2014년 05월",
            "event": "[2024 노벨문학상] 패브릭 북마크/양장노트/문장노트 (택1/포인트 차감)",
            "charge": "13,500"
        }
    ];

    const [totalQty, setTotalQty] = useState(0);

    const totalQtyChagne = (qty) => {
        setTotalQty(totalQty + qty);
    }

    return (
        <>
            <div>
                <span>장바구니({totalQty})</span>
            </div>
            <ul className="rank">
                {bookList.map((item) => 
                    <li className="rankList">
                        <div className='book'>
                            <BookCover img={item.img} alt={item.alt} />
                            <BookDetail
                                recom={item.recom}
                                today={item.today}
                                des={item.des}
                                coment={item.coment}
                                type={item.type}
                                title={item.title}
                                writer={item.writer}
                                company={item.company}
                                date={item.date}
                                event={item.event}
                                charge={item.charge}
                            />
                        </div>
                        <div className='button'>
                            <Button qtyChange={totalQtyChagne} />
                        </div>    
                    </li>
                )}
            </ul>
        </>
    );
}

