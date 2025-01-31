import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageList from '../commons/ImageList.jsx';
import DetailInfo from './DetailInfo.jsx';
import { IoIosArrowDown } from "react-icons/io";

export default function Detail() {
    const [detailImgList, setDetailImgList] = useState([]);
    const [otherColorImgList, setOtherColorImgList] = useState([]);
    const [infoList, setInfoList] = useState([]);
    const [tableList, setTableList] = useState([]);
    const [button, setButton] = useState(true);

    useEffect(() => {
        axios.get("/data/productDetail.json")
            .then((res) => {
                setDetailImgList(res.data.image);
                setOtherColorImgList(res.data.otherColor);
                setInfoList(res.data.productInfo);
                setTableList(res.data.tableData);
            })
            .catch((error) => console.log(error));
    }, []);

    // const listSlice = tableList.slice(0, 4);

    const handleButton = () => {
        setButton(button => !button);
    }
    // console.log('button --> ', button);
    // console.log('tableList --> ', tableList);

    return (
        <div className='product-detail-detail'>
            <ImageList className='product-detail-imgs' imgList={detailImgList} />
            <p>OTHER COLOR</p>
            <ImageList className='product-detail-otherColorImgs' imgList={otherColorImgList} />
            <DetailInfo className='product-detail-info' infoList={infoList} />
            <table className='product-detail-table'>
                <caption>상품 정보 고시</caption>
                <tbody>
                    { button === true ? (
                        tableList && tableList.slice(0, 4).map((list) => 
                            <tr>
                                <td>{list.title}</td>
                                <td>{list.sub}</td>
                            </tr>
                        )
                    ) : (
                        tableList && tableList.map((list) => 
                            <tr>
                                <td>{list.title}</td>
                                <td>{list.sub}</td>
                            </tr>
                        )
                    ) }
                </tbody>
            </table>
            <p>본 상품 정보 및 거래 조건의 내용은 판매자가 직접 등록한 것으로서 등록된 정보에 대한 책임은 판매자에게 있습니다.</p>
            <button type='button' 
                    className={ button === true ? "product-detail-button-show" : "product-detail-button-hide"}
                    onClick={handleButton}>
            상품 정보 고시 더보기 <IoIosArrowDown />
            </button> 
        </div>
    );
}