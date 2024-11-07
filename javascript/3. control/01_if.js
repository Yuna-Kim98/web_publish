/**
* 제어문 - 조건문 : if, while, do~while
*   if(조건식: 비교 연산자 포함) { 조건식이 참인 경우 실행; }
*   if(조건식){ 조건식이 참인 경우; } else { 조건식이 거짓일 경우; }
*   삼항 연산자 : (조건식) ? 참인 경우 : 거짓인 경우 ; -> 중요!많이 사용
*   if(조건식1){ 조건식1이 참인 경우; } else if(조건식2){ 조건식2가 참일 경우} ... else{ 모든 조건식에 해당되지 않을 경우; } -> 조건식이 여러 개일 경우. 중요!많이 사용
**/

// 입력되는 과일명이 apple인 경우에는 사과 이모지 출력
// 사과 이외의 과일인 경우에는 이름만 출력
let fruit = "apple";
if(fruit === "apple") {
    console.log('🍎');
} else {
    console.log(fruit);
}

// 위의 조건식을 삼항 연산자로 작성
let display = undefined;
(fruit === "apple") ? (display ='🍎') : (display = fruit) ;
console.log(display);
// 삼항 연산자를 console.log를 사용해 작성할 경우 한 번 정해진 값을 바꾸거나 다시 쓸 수 없기 때문에 다시 사용하려면 재작성해야하는 번거로움이 있음. 때문에 위와같이 작성

// 점심메뉴 : pizza - '🍕', hotdog - '🌭' 선택한 메뉴에 따라 이모지 출력되도록 함
let lunch = undefined;
lunch = 'pizza';
if( lunch === 'pizza' ) console.log('🍕'); //로직이 한 줄일 경우 {} 생략 가능(편의에 따라 사용 가능). 두 줄 이상일 경우 생략 불가능.
else console.log('🌭');
// 삼항 연산자
let choiceMenu = undefined; // 중간값을 저장하기 위한 변수 선언
(lunch === "pizza") ? (choiceMenu = '🍕') : (choiceMenu = '🌭') ;
console.log(choiceMenu);

// 학생명이 홍길동, 홍길순, 김영희인지 체크하여 해당하는 경우 이름을 출력하고, 해당하지 않는 경우 '해당 학생 없음'으로 출력
// 출력 포맷: 실행 결과 ==> 
let name = undefined;
let result = undefined;
name = '홍길동';
name = '김영희';
name = '김철수';
name = '홍길순'
if(name === '홍길동') {
    result = name;
} else if(name === '홍길순') {
    // console.log(`실행 결과 ==> ${name}`);
    result = name;
} else if(name === '김영희') {
    // console.log(`실행 결과 ==> ${name}`);
    result = name;
} else {
    // console.log(`실행 결과 ==> 해당 학생 없음.`);
    result = '해당 학생 없음';
}
console.log(`실행 결과 ==> ${result}`);
// 조건문에서 한줄한줄 명령어를 실행하는 과정 없이 변수를 통해 실행하고 마지막에 명령어를 한번만 실행해 결과를 확인할 수 있음.