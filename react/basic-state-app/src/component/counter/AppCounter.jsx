import { useState } from 'react';
import './counter.css'
import Counter from './Counter.jsx';

export default function AppCounter() {
    const [totalNumber, setTotalNumber] = useState(0);

    // totalNumber 변경 => 자식인 Counter 컴포넌트 이벤트 발생시
    const handleClick = (number, type) => {
        if (number < 10 && type === '+') {
            setTotalNumber(totalNumber + 1);
        } else if (number > 0 && type === '-') {
            setTotalNumber(totalNumber - 1);
        }
    }

    return (
        <div className="counter-container">
            <Counter total={totalNumber} click={handleClick} />
            <Counter total={totalNumber} click={handleClick} />
            <Counter total={totalNumber} click={handleClick} />
        </div>
    );
}