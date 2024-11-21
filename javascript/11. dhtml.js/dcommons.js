/** 
 * 공동 모듈 저장
 * export 키워드를 사용해 module 형태로 만들어주면 어디에서든 호출해 사용할 수 있음
 * package library는 더 큰 개념으로, module 파일들이 모여있는 것을 의미
 * 가장 많이 사용하는 함수에 defaut 키워드를 붙이는데,
 * 하나의 함수에만 붙일 수 있으며 import 호출 시 {}안에 작성하지 않아도 됨
 **/

// sum();
export function sum(number1, number2) {
    return parseInt(number1) + parseInt(number2);
    // number 그냥 작성했을 시 문자로 입력되기 때문에 parseInt 함수로 숫자 타입으로 변경
}

// sub()
export function sub(number1, number2) {
    return parseInt(number1) - parseInt(number2)
}

// mul()
export function mul(number1, number2) {
    return parseInt(number1) * parseInt(number2)
}

// div()
export function div(number1, number2) {
    return parseInt(number1) / parseInt(number2)
}