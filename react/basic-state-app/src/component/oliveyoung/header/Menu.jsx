import React from 'react';

export default function Menu({menu, count}) {
    return (
        <a href="#" className='header-top-menu-name'>{menu}{(menu === '장바구니') ? <span>({count})</span> : ''}</a>
    );
}

