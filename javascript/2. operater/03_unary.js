// 단항 연산자: ++, --, !, !!
let a = 10;
console.log(++a); // 1 증가 후 a 출력. 11
console.log(a++); // a를 먼저 출력한 후 1 증가
console.log(a); // 12

let b = 10;
console.log(--b); // 1 감소 후 b 출력. 9
console.log(b--); // 9 출력 후 1 감소
console.log(++b); // 9
console.log(b++); // 9
console.log(b); // 10

let flag = true;
console.log(flag);
console.log(!flag); // 1 = not(부정. 즉, 반대값 출력)
console.log(!!flag); // !(!flag) 부정의 부정