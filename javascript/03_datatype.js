/* 
    Primitive data type
    데이터가 작기 때문에 데이터를 바로 가져옴
    - 정수형(interger) : 100, 1, ...
    - 실수형(float, double) : 0.123, 234.2
    - 문자형(character) : '', ""
    - 불린형(boolean) : true, false
        ex) let flag = true;    // flag = 1

    Reference data type
    데이터가 크기 때문에 데이터의 바로 가지고 오지 않고 데이터의 위치를 가져옴
    - 객체형(object) : 배열([]), JSON({}) ...
*/

// 정수형 변수 선언
let number = 100;
number = 100.234; // 변수를 let으로 선언했기 때문에 정수, 실수 상관없이 값 변경 가능
console.log(number);

// 실수형 변수 선언
let fnumber = 10.234;
fnumber = 200;
console.log(fnumber);

// 불린형 변수 선언
let flag = true; // 반대값: !(not)
flag = !true;
let flagTest = !flag;

// 객체형 변수 선언
let nameList = ['홍길동', '홍길순', '홍길남']; //실제값이 아닌 주소값을 가지고 있음
console.log(nameList);

// primitive, reference data type 초기화(변수가 선언은 되었으나 데이터값/주소값이 정해지지 않았을 때)
let address = undefined; //primitive
let addressList = null; //reference

let obj = {name: '홍길동'}; //JSON type

// 데이터 타입 비교 : typeof
let x = 10;
let xx = 10;
let y = "10";
console.log(x, typeof x);
console.log(y, typeof y);
console.log(x == y); // 저장된 값 비교. x와 y 데이터 타입이 다르지만 출력값은 같기 때문에 결과로 true가 나옴
console.log(x === y); // 데이터 타입 비교. 값은 같지만 데이터 타입이 다르기 때문에 결과가 false로 나옴
console.log(xx, typeof xx);
console.log(x === xx);
console.log(obj);
console.log(obj, typeof obj);
console.log(y === obj);
