import React from 'react';

export default function Title({title, description, des2}) {
    return (
        <>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <p>{des2}</p>
        </>
    );
}

