import React from 'react';

export default function MyWorkProject({img, title, des}) {
    return (
        <li className="project">
            <img className="project__img" src={img} alt="project1" />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{title}</h3>
                <p>{des}</p>
            </div>
        </li>
    );
}