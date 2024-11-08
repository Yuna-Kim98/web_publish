// 제어문 - 조건문 : switch(조건) ~ case
/**
 *  switch(숫자, 문자리터럴) {
 *      case(숫자, 문자리터럴):
 *          실행문;
 *          break;
 *      case ~~ 
 *      default:
 *          실행문;
 **/

// 0 = "월요일"
// 1 = 화요일, 2 = 화요일
let useage = `[0]월요일, [1]화요일, [2]수요일`
let day = 1;
let resultDay = undefined;
switch (day) {
    case 0:
        resultDay = "월요일"; break;
    case 1:
        resultDay = "화요일"; break;
    case 2:
        resultDay = "수요일"; break;
    default:
        console.log(`사용법: ${useage}`); break;
}
if (!(resultDay === undefined)) {
    console.log(`선택한 요일은 [${resultDay}]입니다.`);
}

// 임의의 숫자를 입력받아
// 짝수이면 빨간 사과, 홀수이면 초록 사과를 출력해주세요.
let number = 100;
let result = undefined;
switch(number % 2) { // switch ~ case에서는 조건식의 결과가 숫자, 문자이다.
    case 0 : 
        result = '🍎'; break;
        // 실행 후 종료 선언. 없을 경우 break를 찾을 때까지 계속 실행됨. 모든 break를 작성하지 않을 경우 defaul값 출력
    case 1 :
        result = '🍏'; break;
    default :
        result = '해당 과일 없음';
}
console.log(result);
// 해당 로직에서는 default값이 출력될 가능성이 없기 때문에, 이 경우 if 조건문을 사용하는 것이 효율적임