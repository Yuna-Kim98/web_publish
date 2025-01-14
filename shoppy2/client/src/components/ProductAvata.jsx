import React from 'react';

export default function ProductAvata({img, alt}) {
    return (
        <div className='product-avata'>
            <img src={img} alt={alt} />
        </div>
    );
}