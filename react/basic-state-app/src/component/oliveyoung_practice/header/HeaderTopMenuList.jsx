import React from 'react';
import HeaderTopMenu from './HeaderTopMenu.jsx';

export default function HeaderTopMenuList() {
    const menu = [
        { "name": "회원가입" },
        { "name": "로그인" },
        { "name": "장바구니" },
        { "name": "주문배송" },
        { "name": "고객센터" },
        { "name": "운영매장" },
        { "name": "Global" }
    ];
    
    return (
        <ul>
            {menu.map((item) => 
                <li>
                    <HeaderTopMenu menu={item.name} />
                </li>
            )}
        </ul>
    );
}

