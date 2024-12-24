import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu.jsx';
import ToggleButton from './ToggleButton.jsx';

export default function HeaderMenuList() {
    const menuList = [
        { "href":"#home", "name":"Home" },
        { "href":"#about", "name":"About" },
        { "href":"#skill", "name":"Skills" },
        { "href":"#work", "name":"My work" },
        { "href":"#testimonial", "name":"Testimonial" },
        { "href":"#contact", "name":"Contact" }
    ];

    const [select, setSelect] = useState("Home");
    const [toggle, setToggle] = useState(false); // 메뉴 초기값 설정(display: none)

    const handleHeaderMenu = (name) => {
        setSelect(name);
    }

    const handleToggleBtn = () => {
        setToggle(toggle => !toggle); // on, off 개념
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
            <ToggleButton 
                menuList={menuList}
                ulName={ toggle ? "header__toggle__show" : "header__toggle__hide" }
                btnClick={handleToggleBtn}
                click={handleHeaderMenu}
                select={select}
            />
        </>
    );
}