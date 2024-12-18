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
                // setbookList(jsonData.bookList);

                // bookList 필터링 후 setCategory에 저장
                if (category === "total") {
                    setbookList(jsonData.bookList);
                } else {
                    const filterBooks = jsonData.bookList.filter((book) => book.category === category);
                    setbookList(filterBooks);
                }
            })
            .catch(error => console.log(error));
    }, [category]);

    const handleMenuChangeReq2 = (category) => {
        setCategory(category);
    }
    console.log(`AppBestSeller --> ${category}`);

    return (
        <div className="container">
            <MenuList list={menuList} click={handleMenuChangeReq2} />
            <BestBook bookList={bookList} />
        </div>
    );
}