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
            <h3>result : </h3>
        </li>
    </ul>
    `;
}