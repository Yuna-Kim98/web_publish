import React from 'react';
import HeaderMiddleMenu from './HeaderMiddleMenu.jsx';

export default function HeaderMidde() {
    const middleMenuList = [
        { "menu": "오늘드림" },
        { "menu": "올영매장찾기" },
        { "menu": "최근 본 상품" }
    ];

    return (
        <div>
            <div>
                <a href=""><img src="https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png" /></a>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <ul>
                    {middleMenuList.map((item) => 
                        <li>
                            <HeaderMiddleMenu menu={item.menu} />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

