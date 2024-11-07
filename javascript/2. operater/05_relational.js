// 비교 연산자 : >, <, >=, <=, !=, ==, ===
// 실행 결과 타입 : boolean(true or false)
// 제어문 if, while문에서 사용
/**
* if(조건식: 3 > 2) {
*     true
* } else {
*     false
* } 
**/

console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(3 >= 3); // true
console.log(3 <= 3); // true
console.log(3 == 3); // true
console.log(3 == '2'); // 3 == 2 false
console.log(3 == 'A'); // 3 == A(문자 리터럴. 아스키 코드의 숫자를 가져옴 )false
console.log(3 === '2'); // 3 == 2. number === string
console.log(3 === 'A'); // 3 == 2. number === string

// object일 때
let obj1 = {
    name: "홍길동"
};
let obj2 = {
    name: "홍길순"
};
let obj3 = obj1;

console.log(obj1);
console.log(obj2);
console.log(`obj1 : ${obj1}`);
console.log(`obj2 : ${obj2}`); // result: obj2 : [Object Object] -> heap의 주소에 가지 않고 타입만 리턴

console.log(obj1 == obj2);
console.log(obj1 === obj2); // 주소값을 가져와서 비교하기 때문에 데이터 타입은 같지만 데이터 값이 달라서 false
console.log(typeof obj1 === typeof obj2); // true

console.log(obj1 == obj3);
console.log(obj1 === obj3);
console.log(typeof obj1 === typeof obj3); 
console.log(obj1.name == obj2.name); // heap에 저장된 데이터 값을 가져와서 비교. JSON은 .으로 호출
// db나 api를 쓰게 되면 데이터를 JSON 형식으로 가져와 heap에 저장한 후 사용하게 됨 중요!