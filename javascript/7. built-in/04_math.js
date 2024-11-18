// Math class - 정의된 모든 변수, 상수, 함수 값은 static으로 선언
// Math.변수, Math.상수, Math.함수명
let num1 = 123.856;

console.log(num1);
console.log(`Math.abs(num1) = ${Math.abs(num1)}`); // Math.abs() : 변수 값을 절대값으로 변경
console.log(`Math.floor(num1) = ${Math.floor(num1)}`); // Math.floor() : 무조건 소수점 절삭
console.log(`Math.round(num1) = ${Math.round(num1)}`); // Math.round() : 반올림 
console.log(`Math.max(1, 2, 3, 4, 5) = ${Math.max(1, 2, 3, 4, 5)}`); // Math.max() : 최대값 출력
console.log(`Math.min(1, 2, 3, 4, 5) = ${Math.min(1, 2, 3, 4, 5)}`); // Math.min() : 최소값 출력

// 자릿수별 절삭
let num2 = 14832.385;
let result = Number(num2.toPrecision(6));
console.log(result);

// Math.random() : 0 ~ 1 사이의 숫자를 랜덤(무작위)으로 반환
console.log(`Math.random() = ${Math.random()}`); 

// 1 ~ 100 사이의 숫자를 랜덤하게 출력
let rnum = Math.floor(Math.random()*100 + 1);
console.log(rnum);