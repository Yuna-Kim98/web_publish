// 함수의 값을 전달하는 인자(parameter) - 외부에서 값을 받아야만 사용할 수 있음
// parameter, argument, 매개 변수
// 함수 내에서 값을 다 정의할 경우 값이 고정되어 외부에서 호출해 다양하게 활용할 수가 없음. 때문에 파라미터를 사용하여 외부에서 값을 부여해 사용함.
console.clear();
function add(a, b) { 
    return a + b;
}
function add2(...numbers) { // spread operator(전개 구문) - 배열로 저장. 갯수 정해지지 않음
    return numbers;
}
function add3(a, b, ...datas) {
    console.log(a);
    console.log(b);
    console.log(datas);
}

// 함수 호출
let sum = add(100, 200);
let sum2 = add2(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`sum = ${sum}`);
console.log(`${sum2}`);
add3(1, 2, 3, 4, 5, 6, 7);