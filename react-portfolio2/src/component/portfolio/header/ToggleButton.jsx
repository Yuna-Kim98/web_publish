import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import HeaderMenu from './HeaderMenu';

export default function ToggleButton({menuList, ulName, btnClick, click, select}) {
    return (
        <>
            <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle" onClick={() => btnClick()}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={ulName}>
                { menuList && menuList.map((item) => 
                    <li className="header__toggle__list">
                        <HeaderMenu 
                            className={
                                item.name === select ? "header__menu__item active" : "header__menu__item"
                            }
                            href={item.href}
                            name={item.name}
                            click={click}
                        />
                    </li>
                )}
            </ul>
        </>
    );
}