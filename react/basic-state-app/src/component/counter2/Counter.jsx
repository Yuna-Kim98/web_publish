import React, { useState } from 'react';

export default function Counter({total, count}) {
    const [number, setNumber] = useState(0);

    // const increment = () => {
    //     (number >= 0) ? setNumber(number + 1) : setNumber(number);
    //     count('+', number);
    // }
    
    // const decrement = () => {
    //     (number > 0) ? setNumber(number - 1) : setNumber(number);
    //     count('-', number);
    // }

    return (
        <div className="counter-container">
            <div>
                <span>{number}</span>
                <span> / </span>
                <span>{total}</span>
            </div>
            <div>
                <button type="button" onClick={() => {
                    setNumber(number + 1);
                    count('+', number);
                }}>증가(+)</button>
                <button type="button" onClick={() => {
                    setNumber(number - 1);
                    count('-', number)
                }}>감소(-)</button>
            </div>
        </div>
    );
}