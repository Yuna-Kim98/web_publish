// function의 데이터 타입 -> object(객체 / heap에 주소값을 가짐)
function add(a, b) {
    console.log(a + b);
}
console.log(add);
let sum = add;
add(1, 3);
sum(1, 2);
// console.log(add(1,2));
console.log('--- 프로그램 종료 ---');