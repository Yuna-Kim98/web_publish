import React from 'react';
import './yes24.css';
import BookCover from './BookCover.jsx';
import BookDetail from './BookDetail.jsx';
import Button from './Button.jsx';

export default function AppBestSeller() {
    const bookList = [
        {
            "img": "https://image.yes24.com/goods/13137546/L",
            "alt": "소년이 온다",
            "coment": "2024 노벨문학상 수상작가",
            "type": "도서",
            "title": "소년이 온다",
            "writer": "한강",
            "company": "창비",
            "date": "2014년 05월",
            "charge": "13,500"
        }
    ];

    return (
        <ul className="rank">
            {bookList.map((item) => 
                <li className="rankList">
                    <BookCover img={item.img} alt={item.alt} />
                    <BookDetail
                        coment={item.coment}
                        type={item.type}
                        title={item.title}
                        writer={item.writer}
                        company={item.company}
                        date={item.date}
                        charge={item.charge}
                    />
                    <Button />
                </li>
            )}
        </ul>
    );
}

