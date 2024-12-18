import React, { useEffect, useState } from 'react';
import './yes24.css';
import "./Menu.css";
import BestBook from './BestBook.jsx';
import MenuList from './MenuList.jsx';

export default function AppBestSeller() {
    const [menuList, setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState("total");

    useEffect(() => {
        fetch("/data/yes24.json")
            .then(result => result.json())
            .then(jsonData => {
                setMenuList(jsonData.menuList);

                if (category === "total") {
                    setBookList(jsonData.bookList);
                } else {
                    // category 값에 따라 필터링 처리 후 setBookList에 저장
                    const filterBooks = jsonData.bookList.filter((book) => book.category === category);
                    // [{book}, {book} ...]
                    setBookList(filterBooks);
                }

            })
            .catch(error => console.log(error));
    }, [category]);

    // 메뉴 클릭 이벤트( AppBestSeller <-- MenuList <-- Menu )
    const handleMenuClickReq2 = (category) => {
        setCategory(category);
    }
    console.log(`category --> ${category}`);

    return (
        <div className="container">
            <MenuList list={menuList} click={handleMenuClickReq2} />
            <BestBook bookList={bookList} />
        </div>
    );
}

