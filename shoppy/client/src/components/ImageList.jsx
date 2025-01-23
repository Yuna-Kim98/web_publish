import React from 'react';

export default function ImageList({imgList, className}) {
    const name = className.substring(0, 6); // review 이미지

    return (
        <ul>
            { name !== 'review' ?
                imgList && imgList.map(img => 
                    <li><img src="" alt="" /></li>
                ) :
                imgList && imgList.map((img, i) =>
                    <li className='review-top-img-metadata'>
                        <img src={img} alt="" />
                        {
                            i === 6 &&
                            <>
                                <p className='review-top-imgList-metadata'></p>
                                <p className='review-top-imgList-metadata2'><span>+</span><span>더보기</span></p>
                            </>
                        }
                    </li>
                )
            }
        </ul>
    );
}