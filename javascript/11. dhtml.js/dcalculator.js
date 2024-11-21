import { sum, sub, mul, div } from './dcommons.js';

// DHTML 형식으로 계산기 프로그램
initform();

// 계산기 폼을 생성하는 함수
function initform() {
    let output = `
    <h1>DHTML - Calculator</h1>
    <ul>
        <li>
            <input type="text" id="number1" placeholder="첫 번째 숫자 입력">
            <input type="text" id="number2" placeholder="두 번째 숫자 입력">
        </li>
        <li>
            <button type="button" class="button" data-operation="sum">➕</button>
            <button type="button" class="button" data-operation="sub">➖</button>
            <button type="button" class="button" data-operation="mul">✖</button>
            <button type="button" class="button" data-operation="div">➗</button>
        </li>
        <li>
            <h3 id="result">result : </h3>
        </li>
    </ul>
    `;

    // 화면 출력
    document.querySelector('#content').innerHTML = output;

    // 버튼 이벤트 처리
    let buttonList = document.querySelectorAll('.button');
    buttonList.forEach((button) => {
        button.addEventListener('click', () => {
            let number1 = document.querySelector('#number1').value;
            let number2 = document.querySelector('#number2').value;

            let result = 0;
            let operation = button.dataset.operation;

            // 누르는 버튼에 따라 달라지는 이벤트
            switch (operation) {
                case 'sum': result = sum(number1, number2); break;
                case 'sub': result = sub(number1, number2); break;
                case 'mul': result = mul(number1, number2); break;
                case 'div': result = div(number1, number2); break;
            }
            console.log(`result => ${result}`);
            document.querySelector('#result').textContent = `result : ${result}`;
        });
    });

} // end of initform

