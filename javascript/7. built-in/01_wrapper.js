// Primitive(원시) Data Type - number, string, boolean...
// --> Primitive Data Type을 class로 정의한 것을 wrapper class라고 한다.

// 내장 함수 parseInt를 사용해 문자를 숫자로 바꿔 로직 구현하는 방법
let a = "123";
if(typeof a === "string") a = parseInt(a);
if(a === 123) console.log(a);

// wrapper object의 Number를 사용해 문자를 숫자로 뱌꿔 로직 구현하는 방법
if(Number("123") === 123) console.log(`a=>${a}`);

let maxValue = Number.MAX_VALUE;
let minValue = Number.MIN_VALUE;
console.log(maxValue);
console.log(minValue);

let x = 100;
let y = new Number(100); // Number 객체 사용해 객체를 생성할 경우 값은 하나만 넣을 수 있음
console.log(typeof x); // call stack 변수에 값 100을 저장
console.log(typeof y); // heap에 Number 객체 생성 후 call stack 변수 y에 주소값 참조
console.log(x === y); // --> false가 나오는 이유
console.log(x === y.valueOf()); // valueOf : 객체의 값을 가지고 와 실행하는 함수 

/** String class + Templeat literal(``) **/
let str = "hello~";
let str2 = new String("hello~");
console.log(typeof str);
console.log(typeof str2);
console.log(str === str2);
console.log(str === str2.valueOf());

/** Boolean class **/
let flag = true;
let flag2 = new Boolean(true);
console.log(flag);
console.log(flag2);
console.log(flag === flag2);
console.log(flag === flag2.valueOf());