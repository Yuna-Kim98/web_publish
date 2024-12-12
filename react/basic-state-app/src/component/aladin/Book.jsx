import React from 'react';

export default function Book({img, title}) {
    return (
        <div>
            <img src={img} className="book-cover" />
            <p>{title}</p>
        </div>
    );
}