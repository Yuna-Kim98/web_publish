import React from 'react';

export default function BookDetail(list) {
    return (
        <div className='book-detail-container'>
            <div className='book-des'>
                {(list.recom === true) ? <span className="recom">강력추천</span> : ''}
                {(list.today === true) ? <span className="today">오늘의책</span> : ''}
                <span className="book-des">{list.des}</span>
            </div>
            <div className="book-detail">
                <span className="book-type">&#91;{list.type}&#93;</span>
                <span className='book-title'>{list.title}</span>
                <span className="book-coment">&#91;{list.coment}&#93;</span>
            </div>
            <div>
                <a href="">{list.writer}</a><span>저 &#124; </span>
                <a href="">{list.company}</a><span> &#124; </span>
                <span>{list.date}</span>
            </div>
            <div>{list.event}</div>
            <div>
                <span>{list.charge}</span><span>원</span>
            </div>
        </div>
    );
}