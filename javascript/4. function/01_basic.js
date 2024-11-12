/*
    *함수 정의 ::
    function 함수명(파라미터(=매개변수)) {
        실행 로직;
    }
    공통적(반복적으로)으로 사용되는 로직 등에서 함수 사용
    heap에 구조체 형태로 저장되며 주소값은 함수의 이름.
    
    *함수 호출 : 함수명(파라미터 형식 일치);
    파라미터 형식만 알고 있으면 언제 어디서든 호출 가능

    내장(built-in) 함수 : 자주 사용하는 기능을 함수로 구현하여 엔진에서 제공함
    -parseInt(문자열); 문자열을 숫자로 변환하는 함수(대표적인 내장 함수)
*/

// 내장 함수 parseInt() 호출 예시
let a = '100';
console.log(a, typeof a);
console.log(parseInt(a), typeof parseInt(a));
console.log(a + 100);
console.log(parseInt(a) + 100);

// 두 개의 숫자를 입력 받아 합계를 출력하는 로직 작성
let num1 = 10;
let num2 = 20;
console.log(`sum = ${num1 + num2}`);
// ^작성된 파일에서만 사용 가능

// 함수로 작성
function add(a, b) { // var a = 호출시 입력되는 값
    let num1 = parseInt(a);
    let num2 = parseInt(b)
    console.log(`sum = ${parseInt(num1) + parseInt(num2)}`);
}

// 두 숫자의 차를 구하되 결과는 음수가 출력되지 않도록 한다.
// a가 b보다 큰 경우 결과값 출력
function min(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (a >= b) {
        console.log(`sum = ${a - b}`);
    } else {
        console.log(`a값은 b보다 커야 합니다.`);
    }
}

// 함수 호출 위치에 결과값 출력
add(1234, 5678);
min(100, 20);

add('1234', '5678');
min('100', '20');