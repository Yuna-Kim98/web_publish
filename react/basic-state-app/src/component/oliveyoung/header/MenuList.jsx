import React, { useState } from 'react';
import Menu from './Menu.jsx';

export default function MenuList({count}) {
    const menuList = [
        { "menu": "회원가입" },
        { "menu": "로그인" },
        { "menu": "장바구니" },
        { "menu": "주문배송" },
        { "menu": "고객센터" },
        { "menu": "올영매장" },
        { "menu": "Global" }
    ];

    return (
        <ul className='header-top-menu'>
            {menuList.map((item) => 
                <li>
                    <Menu menu={item.menu} count={count} />
                    {/* {(item.menu === '장바구니') ? <span>{cartCount}</span> : ''} */}
                </li>
            )}
        </ul>
    );
}