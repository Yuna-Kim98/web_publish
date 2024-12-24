import React from 'react';

export default function Img({img, alt, className}) {
    return (
        <img src={img} alt={alt} className={className} />
    );
}