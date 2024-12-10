import React from 'react';

export default function BookCover({img, alt}) {
    return (
        <div>
            <img src={img} alt={alt} />
            <button type="button">미리보기</button>
        </div>
    );
}