import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import HeaderMenu from './HeaderMenu';

export default function ToggleButton({className, click, select}) {
    const menuList = [
        { "href":"#home", "name":"Home" },
        { "href":"#about", "name":"About" },
        { "href":"#skill", "name":"Skills" },
        { "href":"#work", "name":"My work" },
        { "href":"#testimonial", "name":"Testimonial" },
        { "href":"#contact", "name":"Contact" }
    ];
    
    return (
        <>
            <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
                <FontAwesomeIcon icon={faBars} />
            </button>
            {/* <ul className={className}>
                { menuList && menuList.map((item) => 
                    <li className="header__toggle__list">
                        <HeaderMenu 
                            className={
                                item.name === select ? "header__menu__item active" : "header__menu__item"
                            }
                            href={item.href}
                            name={item.name}
                        />
                    </li>
                )}
            </ul> */}
        </>
    );
}