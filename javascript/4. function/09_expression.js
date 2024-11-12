// 일반함수, 함수표현식(익명함수), 화살표(Arrow) 함수 -> 일반함수보다 arrow 함수를 선호
// 일반함수 : function 함수명(파라미터, ...) { 실행문; }
// 함수표현식 : let 함수명 = function (파라미터, ...) { 실행문; } -> 함수에 실행한 결과값을 변수에 담음 
// 화살표함수 : let 함수명 = (파라미터) => { 실행문; }

/* 일반함수 정의시 let, const 선언 불가 */
function add() {
    return 1 + 2;
}

// 일반함수 함수표현식
// function () { // function은 반드시 함수명을 주어야 함
//     return 1 + 2;
// }
let add2 = function () { // function은 반드시 함수명을 주어야 함
    return 1 + 2;
}

// 화살표 함수 표현식
// let add3 = () => {
//     return 1 + 2;
// }
let add3 = () => 1 + 2; // 값을 바로 출력. 한 줄일때만 이렇게 생략 가능.
let add4 = (a, b) => a + b;
let add5 = (a, b, c) => {
    if (a > 0 && b > 0 && c > 0) {
        console.log(a + b + c); 
    } else {
        console.log(`a, b, c는 0보다 커야 함.`);
    }
}

console.log(add());
console.log(add2());
console.log(add3());
console.log(add4(10, 20));
add5(1, 2, 3);