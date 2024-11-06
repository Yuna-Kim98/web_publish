/**
 * 변수선언
 * 형식: (var, let , const) 변수명 = 데이터값;
 * 
 */ 

// name이라는 변수를 선언하고 홍길도 이름으로 초기화힙니다.
//age 변수를 선언하고 초기값을 20으로 초기화
let name ='홍길동';
let age = '20'
const address = '서울시';

//name을 공유로 바꿔주세요.
name = '공유';
age = '서울시';
age = '30';
// address = '부산시';


// let age ='40'; let은 재선언이 불가능하기 때문에 오류
//빨간색 언더라인은 오류를 뜻함.

//name, age 변수의 값을 콘솔에 출력
console.log(name)
console.log(age)
console.log(address)