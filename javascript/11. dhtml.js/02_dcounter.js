/*
    JavaScript 호출 시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
    : window.onload(), document.ready(), DOMContentLoad()
 */ 

window.addEventListener('DOMContentLoaded', function() { // window = 화면. 윈도우에 줄 이벤트 정의
    initForm();
}); 

/*
    인터프리터 형식으로 DOM이 등록될 때, script가 먼저 등록되면 적용될 html 요소가 없으므로
    화면상에 js파일에서 작성한 태그가 출력되지 않는다.
    즉, js파일이 reference될 html 요소가 DOM에 script보다 먼저 등록되어야 한다.
    그러나 HTML에서 script는 주로 head 안에 작성되므로, 위의 함수를 사용하여 body를 먼저 실행하도록 한다.
 */

// counter form 생성 함수
function initForm() {
    let output = `
        <h1>DHTML - Counter</h1>
        <div class="counter_container">
            <div id="number">0</div>
            <button type="button" class="button" data-operation="increment">increment</button>
            <button type="button" class="button" data-operation="decrement">decrement</button>
        </div>
    `;
    
    // counter 폼 출력
    document.querySelector('#content').innerHTML = output;
    
    // button 이벤트 처리
    // DHTML로 생성된 버튼 이벤트를 처리
    // 이벤트 또한 브라우저 화면이 생성된 후에 작성해야 reference됨
    let buttons = document.querySelectorAll('.button'); // 같은 class를 가지고 있는 button 배열 생성
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let flag = button.dataset.operation;
            let number = document.querySelector('#number').textContent;
            if(flag === 'increment') {
                document.querySelector('#number').textContent = ++number;
            } else {
                if (number > 0)
                    document.querySelector('#number').textContent = --number;
            }
        }); 
    });
}