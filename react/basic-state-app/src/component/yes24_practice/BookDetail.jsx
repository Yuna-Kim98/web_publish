import React from 'react';

export default function BookDetail(list) {
    return (
        <div>
            <p>{list.coment}</p>
            <p>&#91;{list.type}&#93; {list.title}</p>
            <p>{list.writer} 저 &#124; {list.company} &#124; {list.date}</p>
            <p><span>{list.charge}</span><span>원</span></p>
        </div>
    );
}