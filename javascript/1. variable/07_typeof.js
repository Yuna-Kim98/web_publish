// typeof operand, typeof(operand, operand)
let name = '홍길동';
let age = '20';
let a = 100;
a = 0.1;
a = '가나다';
a = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof 100);
console.log(typeof '자바스크립트');
console.log(typeof a); // a의 값이 여러번 재할당 되었을 경우, 마지막으로 할당된 값의 데이터 타입을 확인한다.
console.log(typeof a === typeof age); //데이터 타입 비교
console.log(typeof(a) === typeof(age));
console.log(typeof (a, age, name)); // 함수 안에 들어있는 변수의 마지막 변수의 타입이 확인됨