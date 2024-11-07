// 한 줄 주석
/* 여러 줄 주석 */

/**
 *  변수명 선언 규칙
 *  - 라틴어 (0~9, a~z, A~Z)
 *  - 특수문자 ($, _ 사용가능)
 *  - camel case : ex) camelCase
 *  - snake case: ex) snake_case
 * 
 *  주의사항
 *  - 숫자로 시작 불가능
 *  - 예약어(키워드) 사용 불가능
 *  - 특수문자($, _) 사용 가능
 *  - 이모지 사용불가
 **/

// camelCase
let myName = '홍길동';
let myAge = '30';
// JavaScript는 대소문자를 구분하기 때문에 중간에 대소문자를 바꾸면 프로그램이 실행되지 않음. 한번 선언한 변수는 그대로 사용해야 함.
console.log(myName);
console.log(myAge);

// snake_case
let audio_name = '삼성';
let audio_color = 'Red';
console.log(audio_name);
console.log(audio_color);

// 저의 이름은 홍길동이고, 나이는 30입니다.
let output = '저의 이름은 ' + myName + '이고, 나이는 ' + myAge + '입니다.'; //공백도 문자로 인식하므로 주의
console.log(output);

// 템플릿 리터럴 :: 저의 이름은 홍길동이고, 나이는 30입니다.
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge}입니다.`;
console.log(output2);

// 상수 선언 :: 변수, 상수는 프로그램의 상단에 위치시킬 것
// 상수 선언시 모두 대문자, SNAKE_CASE로 선언하는 것이 좋음!(변수와 상수를 구분하기 좋게 하기 위해)
const AUDIO_DEVICE_START = 1;
const AUDIO_DEVICE_CONTI = 2;
const AUDIO_DEVICE_FINISH = 0;