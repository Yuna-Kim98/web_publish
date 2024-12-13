import React, { useEffect, useState } from 'react';
import Book from '../aladin/Book.jsx';

export default function BookList() {
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState([]); // 카테고리 배열
    const [selectCategory, setSelectCategory] = useState('선택'); // 카테고리 변경 배열
    const [type, setType] = useState('total'); // 타입 필터 배열

    useEffect(() => {
        fetch("/data/aladin.json")
            .then((result) => result.json())
            .then((jsonData) => {
                // setBookList(jsonData.books);
                setCategory(jsonData.category);

                // 타입 필터링
                if (type === "total") {
                    setBookList(jsonData.books);
                } else {
                    const filterBooks = jsonData.books.filter((book) => book.type === type);
                    setBookList(filterBooks);
                } 

                // 카테고리 변경
                // if (selectCategory === '선택') {
                //     setBookList(jsonData.books);
                // } else {
                //     const changeCategory = jsonData.books.filter((item) => item.category === selectCategory);
                //     setBookList(changeCategory);
                // }
            })
            .catch((error) => console.log(error));
    }, [selectCategory, type]);

    // 타입 이벤트
    const handleTypeClick = (event) => {
        setType(event.target.value);
    }

    // 카테고리 이벤트
    const handleChangeCategory = (event) => {
        setSelectCategory(event.target.value); // value 값을 가져와야함!!!!!
    }

    return (
        <>
            <div className="filter-div">
                <input type="radio" name="type" value="total" onClick={handleTypeClick} />전체보기
                <input type="radio" name="type" value="domestic" onClick={handleTypeClick} />국내도서
                <input type="radio" name="type" value="overseas" onClick={handleTypeClick} />국외도서
                <select onChange={handleChangeCategory} className="select">
                    <option value="선택">선택</option>
                    {category && category.map((item) => 
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            <ul className='book-list-container'>
                {bookList && bookList.map((item) => 
                    <li>
                        <Book img={item.img} title={item.title} />
                    </li>
                )}
            </ul>
        </>
    );
}