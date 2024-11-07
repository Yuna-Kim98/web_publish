// call by value example
let a = 100;
let b = "홍길동";
let c = a;
console.log(a);
console.log(b);
console.log(c);
// a와 c는 같은 값이 출력됨
console.log(a === c); //데이터 값, 타입 모두 비교

//call by reference example
let aa = [1, 2, 3];
let bb = "홍길동";
let cc = aa;
console.log(aa);
console.log(bb);
console.log(cc);
// aa와 cc 같은 값 출력
console.log(aa === cc); // 주소는 보안상의 이유 등으로 자바스크립트 엔진만 알고 있음. 때문에 명령어로 확인 가능
console.log(typeof aa); // data type 확인
console.log(typeof cc);