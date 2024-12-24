import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Major({icon, majorName, des}) {
    return (
        <>
            <FontAwesomeIcon icon={icon} className="major__icon"/>
            <p className="major__title">{majorName}</p>
            <p>{des}</p>
        </>
    );
}