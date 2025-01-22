import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Pagination2 from './Pagination2.jsx';

export default function QnaBackUp() {
    // Date
    let date = new Date;
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let display = `${year}. ${month}. ${day}`;

    const [data, setData] = useState([]); // 데이터 관리
    const [page, setPage] = useState(1);

    // 리스트 slice 범위
    const itemsPerPage = 6; // 한 페이지에 보여줄 게시글 갯수
    const endIdx = (page * itemsPerPage); 
    const startIdx = endIdx - itemsPerPage;

    // Data
    useEffect(() => {
        axios.get('/data/qna.json')
            .then((res) => {
                if (page === 1) {
                    setData(res.data.slice(startIdx, endIdx));
                } else if (page === 2) {
                    setData(res.data.slice(startIdx, endIdx));
                }
            })
            .catch((error) => console.log(error));
    }, []);

    // 페이지 핸들링 함수
    const handlePage = (num) => {
        if (num === 1) {
            setPage(1);
            setData(data.slice());
        }
        setPage(num);
        console.log(num);
    }

    return (
        <div className='product-detail-tab-qna'>
            <div>
                <button>상품문의</button>
            </div>
            <table>
                <tbody>
                { data && data.map((list) => (
                        <tr>
                            <td><button type='button'>{list.state}</button></td>
                            <td>
                                <span>{list.title}</span>
                                <span>{list.email}</span>
                            </td>
                            <td>{display}</td>
                        </tr>
                )) }
                </tbody>
            </table>
            {/* <Pagination2 /> */}
            <ul>
            <li><a onClick={() => handlePage(1)}>1</a></li>
            <li><a onClick={() => handlePage(2)}>2</a></li>
        </ul>
        </div>
    );
}