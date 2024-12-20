import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';

export default function HeaderMenuList() {
    const menuList = [
        { "className":"header__menu__item active", "href":"#home", "name":"Home" },
        { "className":"header__menu__item", "href":"#about", "name":"About" },
        { "className":"header__menu__item", "href":"#skill", "name":"Skills" },
        { "className":"header__menu__item", "href":"#work", "name":"My work" },
        { "className":"header__menu__item", "href":"#testimonial", "name":"Testimonial" },
        { "className":"header__menu__item", "href":"#contact", "name":"Contact" }
    ];
    const [select, setSelect] = useState("Home");

    const handleHeaderMenu = (name) => {
        setSelect(name);
    }

    return (
        <>
            <nav>
                <ul className="header__menu">
                    { menuList && menuList.map((item) => 
                        <li>
                            <HeaderMenu 
                                className={
                                    item.name === select ? "header__menu__item active" : "header__menu__item"
                                }
                                href={item.href}
                                name={item.name}
                                click={handleHeaderMenu}
                            />
                        </li>
                    )}
                </ul>
            </nav>
            <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </>
    );
}