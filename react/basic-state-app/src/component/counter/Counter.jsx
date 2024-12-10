import { useState } from "react";

export default function Counter({total, click}) {
    const [number, setNumber] = useState(0);
    // useState에서 관리할 경우, 연산식의 형태를 반드시 갖추어야 함
    
    function increment() {
        (number < 10) ? setNumber(number + 1) : setNumber(number);
        click(number, '+');
    }

    function decrement() {
        (number > 0) ? setNumber(number - 1) : setNumber(number);
        click(number, '-');
    } 

    return (
        <div className="container">
            <div>
                <span className="number">{number} /</span>
                <span className="total-number">{total}</span>
            </div>
            <button type="button" className="button" onClick={increment}>
                증가(+)
            </button>
            <button type="button" className="button" onClick={decrement}>
                감소(-)
            </button>
        </div>
    );
}

{/* jsx에서는 같은 js 파일이기 때문에 함수 호출시 괄호 없이 이름만 호출해서 사용 가능하고
    이벤트는 컴포넌트 단위로 각각 적용, 실행된다. */}