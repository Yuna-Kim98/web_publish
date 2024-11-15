// Number class들의 method
// Number객체.valueOf();
let a = 100;
let b = new Number(100);
console.log(typeof a, typeof b);
console.log(a === b); //false
console.log(a === b.valueOf()); //true
console.log(a.valueOf() === b.valueOf()); //true
// valueOf() 함수가 붙게 되면 자동으로 변수를 객체로 전환함(실무에서 이렇게 사용하지는 않음)

// Number객체.toLocalString(); ex)10000 => 10, 000 숫자가 스트링 타입으로 전환됨
// 3자리씩 끊어서 쉼표로 구분
let num = 123000;
let num2 = new Number(3455678);
console.log(num.toLocaleString());
console.log(num2.toLocaleString());

// MAX_VALUE, MIN_VALUE... -> const로 선언, static으로 정의 / 호출시 : Number.MAX_VALUE 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let num3 = 123.45;
console.log(num3.toFixed()); // toFixed : 정수로 반올림 함수
