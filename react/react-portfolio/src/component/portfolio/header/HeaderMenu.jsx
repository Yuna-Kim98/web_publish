import React from 'react';

export default function HeaderMenu({className, href, name}) {
    return (
        <a className={className} href={href}>{name}</a>
    );
}