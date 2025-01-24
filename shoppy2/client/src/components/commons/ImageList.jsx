import React from 'react';

export default function ImageList({className, imgList}) {
    const name = className.substring(0, 6); // 리뷰이미지

    return (
        <ul className={className}>
            { name !== 'review' ? (
                imgList && imgList.map((item) => 
                    <li><img src={item.img} alt="" /></li>
                )
            ) : (
                imgList && imgList.map((item, i) => 
                    <li>
                        <img src={item.img} alt="" />
                        { i === 8 &&
                            <>
                                <p></p>
                                <p><span>+</span><span>더보기</span></p>
                            </>
                        }
                    </li>
                )
            ) }
        </ul> 
    );
}