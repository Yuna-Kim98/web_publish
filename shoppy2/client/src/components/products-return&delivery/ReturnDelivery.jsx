import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReturnDelivery() {
    const [noticeData, setNoticeData] = useState([]);

    useEffect(() => {
        axios.get("/data/productReturndelivery.json")
            .then((res) => setNoticeData(res.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='product-detail-returnDelivery'>
            <div>
                <p>배송/교환/반품/AS 관련 유의사항</p>
                <p>상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.</p>
            </div>
            <table className='returnDelivery-table'>
                <tbody>
                    { noticeData && noticeData.map((item) => 
                        <tr>
                            <td>{item.name}</td>
                            <td>
                                <ul>
                                    { item.sub.map((list) => 
                                        <li>{list.text}</li>
                                    ) }
                                </ul>
                            </td>
                        </tr>
                    ) }
                </tbody>
            </table>
        </div>
    );
}

