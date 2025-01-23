import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '../commons/ImageList.jsx';

export default function Review() {
    const reviewTab = [
        {"name": "최신순"},
        {"name": "평점 높은순"},
        {"name": "평점 낮은순"},
        {"name": "추천순"}
    ];
    const [barList, setBarList] = useState([]);
    const [imgList, setImgList] = useState([]);

    useEffect(() => {
        axios.get("/data/productReview.json")
            .then((res) => {
                setBarList(res.data.barList);
                setImgList(res.data.reviewImg);
            })
            .catch((error) => console.log(error));
    }, []);

    // console.log('imgList --> ', imgList);

    return (
        <div className='product-detail-review'>
            <div className='review-top'>
                <div className='review-top-left'>
                    <p>상품 만족도</p>
                    <p>구매하신 분들의 상품에 대한 평점입니다.</p>
                    <div>별점</div>
                </div>

                {/* 후기 퍼센트 */}
                <div className='review-top-right'>
                    { barList && barList.map((list) => 
                        <ul className='review-top-bar-ul'>
                            <li className='bar-ul-title'>{list.title}</li>
                            <li>
                                <div className='bar-wrap'>
                                    <span className='bar-ul-subTitle'>{list.subTitle1}</span>
                                    <div className='bar-bg'><div className='bar-value' style={{"width": `${list.percent1}%`}}></div></div>
                                    <span>{list.percent1}%</span>
                                </div>
                            </li>
                            <li>
                                <div className='bar-wrap'>
                                    <span className='bar-ul-subTitle'>{list.subTitle2}</span>
                                    <div className='bar-bg'><div className='bar-value' style={{"width": `${list.percent2}%`}}></div></div>
                                    <span>{list.percent2}%</span>
                                </div>
                            </li>
                            <li>
                                <div className='bar-wrap'>
                                    <span className='bar-ul-subTitle'>{list.subTitle3}</span>
                                    <div className='bar-bg'><div className='bar-value' style={{"width": `${list.percent3}%`}}></div></div>
                                    <span>{list.percent3}%</span>
                                </div>
                            </li>
                        </ul>
                    ) }
                </div>
            </div>
            <div className='review-reviewImgs'>
                <ImageList className='review-img-list' imgList={imgList} />
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
                        <tr>
                            <td>*****</td>
                            <td>
                                <div>
                                    <div>
                                        <p>구매옵션사이즈정보</p>
                                        <p>사이즈정보</p>
                                    </div>
                                    <div>
                                        <span>아이디</span>
                                        <span>날짜</span>
                                    </div>
                                </div>
                                <div>
                                    <span>사이즈</span>
                                    <span>색상</span>
                                    <span>소재</span>
                                </div>
                                <div>리뷰</div>
                                <div>
                                    <div>
                                        <span>신고</span>
                                        <span>숨김</span>
                                    </div>
                                    <div>good</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}