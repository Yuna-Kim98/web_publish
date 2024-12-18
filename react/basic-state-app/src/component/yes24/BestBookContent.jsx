import React from 'react';

export default function BestBookContent(props) {
    return (
        <div className="container-content">
            <div className="container-content-tags">
                { props.suggest && <a href="">강력추천</a> }
                { props.today && <a href="">오늘의책</a>}
                {/* <span>2024 노벨문학상 수상작가</span> */}
            </div>
            <div>
                <span>[{props.type}]</span>
                <span>{props.title}</span>
                {/* <span>[2024 노벨문학상 수상작가]</span> */}
            </div>
            <div>
                <span>{props.author} 저 &#124; </span>
                <span>{props.company} &#124; </span>
                <span>{props.pubDate}</span>
            </div>
            <div>
                <span>{props.price}</span><span>원</span>
                <span>({props.perSale}% 할인)</span>
                <span>p</span><span>{props.point}원</span>
            </div>
        </div>
    );
}