// 선언문, 표현식
/*
    연산자 없이 한 줄을 차지하면 리터럴이라고 표현. 실제로 이렇게 사용하지는 않음
    1;  //숫자 리터럴 표현식
    'hong';  //문자 리터럴 표현식
    1+1;  //산술 연산 표현식
    함수명(); => ex) call(); //함수 표현식
    c = 100; //할당(assignment), 할당 표현식
    let a;  //변수 선언문
*/

let a; //선언문
let b = 100; //표현식(표현문)
let c = undefined; //선언문. 아직 값이 정해지진 않았지만 기본 타입을 넣겠다는 뜻
let d = null; //선언문. 아무런 값도 없다는 뜻


console.log(a); //result: undefined
console.log(b);
console.log(c);
console.log(d);