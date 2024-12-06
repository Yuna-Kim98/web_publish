import { useEffect, useState } from 'react';
import HeaderTopMenu from './HeaderTopMenu.jsx';

export default function HeaderTopMenuList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("/data/cgv_header.json")
            .then((data) => data.json())
            .then((jsonData) => setList(jsonData.topMenuList))
            .catch((error) => console.log(error));
    }, []);

    return (
        <nav className='header-top-nav'>
            <ul>
                {list && list.map((menu) => (
                    <li>
                        <HeaderTopMenu 
                            href = {menu.href}
                            src = {menu.src}
                            alt = {menu.alt}
                            name = {menu.name}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}