import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '../commons/ImageList.jsx';
import StarRating from '../commons/StarRating.jsx';
import Pagination2 from '../commons/Pagination2.jsx';
import { AiOutlineLike } from "react-icons/ai";

export default function Review() {
    const reviewTab = [
        {"name": "최신순"},
        {"name": "평점 높은순"},
        {"name": "평점 낮은순"},
        {"name": "추천순"}
    ];
    let totalRate = "3.5";
    const [barList, setBarList] = useState([]);
    const [totalImgList, setTotalImgList] = useState([]);
    const [reviewImg, setReviewImg] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [likeCount, setLikeCount] = useState(0);

    // paginatio
    const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
    const itemsPerPage = 6; // Num = 한 페이지에 보여줄 데이터 갯수
    const totalItem = reviewData.length; // 데이터 총 갯수
    const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
    const currentPage = 1;
    const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
    // 리스트 slice 범위
    const endIdx = (page * itemsPerPage); // 반드시 endIdx가 startIdx보다 먼저 선언되어야 함
    const startIdx = endIdx - itemsPerPage;

    useEffect(() => {
        axios.get("/data/productReview.json")
            .then((res) => {
                setBarList(res.data.barList);
                setTotalImgList(res.data.reviewTotalImg);
                setReviewImg(res.data.reivewImg);
                setReviewData(res.data.reviewData);
            })
            .catch((error) => console.log(error));
    }, []);

    /** sliceData 관리 :: 페이지 변경 or 리스트 변동 시 출력 데이터 재정의 **/ 
    useEffect(() => {
        setSliceData(reviewData.slice(startIdx, endIdx));
    }, [page, reviewData]);

    const handleLikeCount = () => {
        setLikeCount(likeCount+1);
    }

    return (
        <div className='product-detail-review'>
            <div className='review-top'>
                <div className='review-top-left'>
                    <div>
                        <p>상품 만족도 ({totalItem})</p>
                        <p>구매하신 분들의 상품에 대한 평점입니다.</p>
                    </div>
                    <div>
                        <StarRating totalRate={totalRate} className='review-star' />
                        <div>
                            <span>{totalRate} / </span><span>{totalRate}</span>
                        </div>
                    </div>
                </div>
                {/* 후기 퍼센트 */}
                <div className='review-top-right'>
                    { barList && barList.map((list) => 
                        <ul className='review-top-bar-ul'>
                            <li>{list.title}</li>
                            { list.content.map((item) => 
                                <li>
                                    <div className='bar-wrap'>
                                        <span className='bar-ul-subTitle'>{item.title}</span>
                                        <div className='bar-bg'><div className='bar-value' style={{"width": `${item.percent}%`}}></div></div>
                                        <span>{item.percent}%</span>
                                    </div>
                                </li>
                            ) }
                        </ul>
                    )}
                </div>
            </div>

            <div className='review-reviewTotalImg'>
                <ImageList className='review-img-list' imgList={totalImgList} />
            </div>

            <div className='review-bottom'>
                <ul className='review-tab-list'>
                    { reviewTab && reviewTab.map((list) => 
                        <>
                            <li>{list.name}</li>
                            <div></div>
                        </>
                    ) }
                </ul>
                <table className='review-table'>
                    <tbody>
                        { sliceData && sliceData.map((item, i) => 
                            <tr>
                                <td><StarRating totalRate={totalRate} className='review-table-star' /></td>
                                <td>
                                    <div>
                                        <div>
                                            <p>구매옵션 : {item.option}</p>
                                            <p>사이즈정보 : {item.sizeInfo}</p>
                                        </div>
                                        <div>
                                            <span>{item.email}</span>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                    <div>
                                        { item.tags.map((tag) => 
                                            <>
                                                <div><span>{tag.title}</span><span>{tag.detail}</span></div>
                                            </>
                                        ) }
                                    </div>
                                    <div>
                                        <div>
                                            <ImageList className="review-table-imgList" imgList={item.img} />
                                        </div>
                                        <p>{item.coment}</p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>신고</span>
                                            <div></div>
                                            <span>숨김</span>
                                        </div>
                                        <div>
                                            <AiOutlineLike />
                                            <span>{likeCount}</span> 
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ) }
                    </tbody>
                </table>
                <Pagination2 className="review-paginate-ul" 
                            totalPages={totalPages} 
                            page={page} 
                            setPage={setPage} />
            </div>
        </div>
    );
}