import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../commons/Pagination.jsx';

export default function QnA() {
    const [qnaData, setQnaData] = useState([]);
    const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
    const itemsPerPage = 6; // Num = 한 페이지에 보여줄 데이터 갯수
    const limit = 10; // 페이지네이션 범위
    const totalItem = qnaData.length; // 데이터 총 갯수
    const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
    const currentPage = 1;
    const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
    // 리스트 slice 범위
    const endIdx = (page * itemsPerPage); // 반드시 endIdx가 startIdx보다 먼저 선언되어야 함
    const startIdx = endIdx - itemsPerPage;

    /** 데이터 호출 **/
    useEffect(() => {
        axios.get("/data/productQna.json")
            .then((res) => setQnaData(res.data))
            .catch((error) => console.log(error));
    }, []);

    /** sliceData 관리 :: 페이지 변경 or 리스트 변동 시 출력 데이터 재정의 **/ 
    useEffect(() => {
        setSliceData(qnaData.slice(startIdx, endIdx));
    }, [page, qnaData]);

    return (
        <div className='product-detail-qna'>
            <div>
                <button type='button'>상품문의</button>
            </div>
            <table className='qna-table'>
                <tbody>
                    { sliceData && sliceData.map((data) => 
                        <tr>
                            <td><span>{data.state}</span></td>
                            <td>
                                <div>{data.title}</div>
                                <div>{data.email}</div>
                            </td>
                            <td>{data.date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination className="qna-paginate-ul" 
                        page={page} 
                        totalPages={totalPages} 
                        currentPage={currentPage} 
                        setPage={setPage} />
        </div>
    );
}

