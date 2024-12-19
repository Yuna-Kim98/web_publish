import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Major({icon, majorName, des}) {
    return (
        <>
            <FontAwesomeIcon icon={icon} />
            <p className="major__title">{majorName}</p>
            <p>{des}</p>
        </>
    );
}