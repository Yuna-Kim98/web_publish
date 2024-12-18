import React, { useEffect, useState } from 'react';
import './yes24.css';
import './Menu.css';
import MenuList from './MenuList.jsx';
import BestBook from './BestBook.jsx';

export default function AppBestSeller() {
    const [menuList, setMenuList] = useState([]);
    const [bookList, setbookList] = useState([]);
    const [category, setCategory] = useState("total");

    useEffect(() => {
        fetch("/data/yes24practice.json")
            .then(result => result.json())
            .then(jsonData => {
                setMenuList(jsonData.menuList);
                setbookList(jsonData.bookList);
            })
            .catch(error => console.log(error));
    });

    return (
        <div className="container">
            <MenuList list={menuList} />
            <BestBook bookList={bookList} />
        </div>
    );
}