import React, { useState } from 'react';
import './counter.css';
import Counter from './Counter.jsx';

export default function AppCounter() {
    const [totalNumber, setTotalNumber] = useState(0);

    // const handelClick = (type, number) => {
    //     if (number >=0 && type === '+') {
    //         setTotalNumber(totalNumber + 1);
    //     } else if (number > 0 && type === '-') {
    //         setTotalNumber(totalNumber - 1);
    //     }
    // }

    const handelClick = (type) => {
        (type === '+') ? setTotalNumber(totalNumber + 1) : setTotalNumber(totalNumber - 1);
    }

    return (
        <div>
            <Counter total={totalNumber} count={handelClick} />
            <Counter total={totalNumber} count={handelClick} />
            <Counter total={totalNumber} count={handelClick} />
        </div>
    );
}