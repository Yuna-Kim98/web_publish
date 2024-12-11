import React from 'react';

export default function BookCover({img, alt}) {
    return (
        <div className='cover-container'>
            <div>
                <img src={img} alt={alt} className="cover-img" />
            </div>
            <div>
                <button type="button" className="book-sample">미리보기</button>
            </div>
        </div>
    );
}