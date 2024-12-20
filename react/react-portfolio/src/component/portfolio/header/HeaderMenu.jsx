import React from 'react';

export default function HeaderMenu({className, href, name, click}) {
    return (
        <a className={className} href={href} onClick={() => {click(name)}}>{name}</a>
    );
}