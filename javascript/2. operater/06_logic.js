// 논리 연산자: &&(and), ||(or)
/*
    0 & 1 = 10
    (논리식1) && {논리식2} = 결과 값
        ture        truel  = 결과값
        ture        flase = false
        false       true - true
        false       false = false


        (논리식1) && {논리식2} = 결과 값
        ture        truel  = 결과값
        ture        false = true
        flale       true = true:
        false       false = false
*/

let a = 1;
let b = 2;
console.log((a < b) && (b > a)); // true && true = true
console.log((a < b) && (b < a)); // true && false = fasle
console.log((a === b) && (b > a)); // false && true = false
console.log((a === b) && (b < a)); // false && false = false

console.log((a < b) || (b > a)); // true && true = true
console.log((a < b) || (b < a)); // true && false = true
console.log((a === b) || (b > a)); // false && true = true
console.log((a === b) || (b < a)); // false && false = false

// 임의의 숫자를 입력받아 1 ~ 9까지의 범위에 포함되면 숫자 출력
let number = 11;
if ((number < 10) && (number > 0)) {
    // && 연산인 경우 true값이 앞에 오면 값이 true인데도 뒤의 연산까지 체크해 효율성이 떨어지므로 false값이 앞에 오도록 함. shortcut 연산이 되도록 작성해 실행하는 것이 더 효율적.
    console.log(`number는 사용가능한 숫자 [${number}] 입니다.`);
} else {
    console.log(`number를 다시 입력해주세요.`);
}

// 임의의 숫자를 입력받아 0보다 크면 출력
let number2 = 11;
if ((number2 > 0) || (number2 < 10)) { // || 연산인 경우 true값이 앞에 오면 뒤 연산 체크 없이 무조건 true이므로 true값이 앞에 오도록 함.
    console.log(`number는 사용가능한 숫자 [${number2}] 입니다.`);
} else {
    console.log(`number를 다시 입력해주세요.`);
}