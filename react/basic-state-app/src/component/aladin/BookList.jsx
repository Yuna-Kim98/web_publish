import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState('선택');
    const [type, setType] = useState('total');

    useEffect(() => {
        // console.log(`selectCategory --> ${selectCategory}`);
        fetch("/data/aladin.json")
            .then((result) => result.json())
            .then((jsonData) => {
                setCategory(jsonData.category);

                if (type === 'total') {
                    setBooks(jsonData.books);
                } else {    
                    const filterBooks = jsonData.books.filter((book) => book.type === type);
                    setBooks(filterBooks);
                } 

                // if (selectCategory === '선택') {
                //     setBooks(jsonData.books);
                // } else {
                //     const filterCategory = jsonData.books.filter((book) => book.category === selectCategory);
                //     setBooks(filterCategory);
                // }
            })
            .catch((error) => console.log(error));
    }, [selectCategory, type]);

    const handleChangeCategory = (event) => {
        console.log(event.target.value);
        setSelectCategory(event.target.value);
    }

    const handleClick = (event) => {
        setType(event.target.value);
    }

    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleClick} /><span>전체도서</span>
                <input type="radio" name="type" value="domestic" onClick={handleClick} /><span>국내도서</span>
                <input type="radio" name="type" value="overseas" onClick={handleClick} /><span>국외도서</span>
                <select onChange={handleChangeCategory}>
                    <option value="선택">선택</option>
                    {category && category.map((item) => 
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>
            <ul className="book-list">
                {books && books.map((book) => 
                    <li>
                        <Book img={book.img} title={book.title}/>
                    </li>
                )}
            </ul>
        </>
    );
}