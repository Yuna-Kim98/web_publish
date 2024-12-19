import React from 'react';
import HeaderMenu from './HeaderMenu';

export default function HeaderMenuList() {
    const menuList = [
        { "className":"header__menu__item active", "href":"#home", "name":"Home" },
        { "className":"header__menu__item", "href":"#about", "name":"About" },
        { "className":"header__menu__item", "href":"#skill", "name":"Skills" },
        { "className":"header__menu__item", "href":"#work", "name":"My work" },
        { "className":"header__menu__item", "href":"#testimonial", "name":"Testimonial" },
        { "className":"header__menu__item", "href":"#contact", "name":"Contact" }
    ];

    return (
        <nav>
            <ul class="header__menu">
                { menuList && menuList.map((item) => 
                    <li>
                        <HeaderMenu 
                            className={item.className}
                            href={item.href}
                            name={item.name}
                        />
                    </li>
                )}
            </ul>
        </nav>
    );
}