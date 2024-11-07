// 사칙연산: +, -, *, /, %, **
console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5); // 나머지 출력. 모듈러 연산, 나머지 연산자
console.log(3 ** 5); //지수 ** 승

// %(모듈러 연산자)
let a = 101;
console.log(a % 2); //a는 짝수? 홀수?

// + (접합 연산자)
// 연산을 문자로 시작하면 뒤에 나오는 +는 접합 연산자로 실행
console.log(10 + 20);
console.log("sum : " + 10 + 20); //접합 연산자
console.log("sum : " + (10 + 20)); //접합 연산자, 산술 연산자 혼용
console.log(`sum : ${10 + 20}`); // 템플릿 리터럴 사용 -> 접합 연산자 사용x
