import React from 'react';
import MyWorkButton from './MyWorkButton';

export default function MyWorkButtonList({btnList, click, select}) {

    return (
        <ul className="categories">
            { btnList && btnList.map((item) => 
                <li>
                    <MyWorkButton
                        click2={click}
                        className={item.category === select ? "category category--selected" : "category"}
                        category={item.category}
                        count={item.count}
                    />
                </li>
            )}
        </ul>
    );
}