/** 
// 제어문 - 반복문 : for, while

/** 
 * for : 정확한 반복 횟수를 알고 있을 때 --> Array와 가장 많이 사용
 * for( (1)초기값(선언문) ; (2)조건식 ; (4)증감식 ) {
 *  (3)실행문;
 * }
 * 1. 초기값을 선언한다. -> 초기값 변수는 for 블럭에서만 실행
 * 2. 선언한 변수는 조건식을 통해 비교한다. -> boolean 타입의 결과
 * 3. (2)번의 결과가 true이면 실행문을 실행한다.
 * 4. 실행문이 종료되면 증감식을 실행한다.
 *    (2)~(4)까지 반복해서 작업을 실행한다.
 * 5. 조건식이 false가 되면 for 루프 블록을 빠져나온다.
**/

// 숫자 1부터 5까지 반복해서 출력해주세요.
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5); 결과값이 맞으므로 틀린 코드는 아님. 그러나 효율성이 떨어짐.
for( let i = 1; i <= 5; i++ /* 출력 후 입력 */){ //초기값의 변수는 어떻게 줘도 상관이 없으며 for문 안에서만 실행된다.
    console.log(i);
}

// 숫자 배열을 출력해주세요.
let numberList = [1, 2, 3, 4, 5];
for(let i = 0; i <= 4; i++ /* 배열이므로 데이터값이 아니라 인덱스값으로 작성. 배열의 시작은 0번지로 항상 고정 */) {
    console.log(numberList[i]); /* 배열에서 데이터값을 직접 가져오게 함 */
}

// 이모티콘 배열을 출력해주세요.
let foodList = ['🍕', '🍔', '🧇', '🥞'];
// 배열의 마지막 인덱스 주소는 배열 크기보다 하나 작다
// 배열의 크기 구하는 형식 : 배열객체.length
console.log(`foodList.length = ${foodList.length}`);
for (let i = 0; i <= foodList.length-1; i++) {
    console.log(foodList[i]);
}

// 과일 리스트 출력
let fruitList = ['apple', 'orange', 'lemon'];
let emojiList = ['🍎', '🍊', '🍋']; // 인덱스 번호에 맞게 이모지 순서 지정
let length = fruitList.length-1
for(let i = 0/* 변수 선언 키워드를 생략할 경우 자동으로 var로 선언됨 */; i <= length; i++) {
    // lemon만 출력
    if(fruitList[i] === 'lemon') {
        console.log(fruitList[i]);
    }
}
// 위의 로직을 좀 더 유연하게 표현. 한 눈에 알아볼 수 있게 구성함
for(let i = 0; i <= length; i++) {
    let fruit = fruitList[i] // 변수 선언됐으나 사용되지 않은 변수(dead code)는 음영처리 되어 표시됨
    let emoji = emojiList[i]; // emoji 변수 선언 후 데이터 값을 emojiList에서 fruitList 배열의 인덱스 값과 맞춰 출력
    if(fruit === 'lemon') {
        console.log(emoji);
    }
}

/**
 * while : 종료하는 시점을 정확하게 알고 있을 때 --> true, false 값을 통해 체크
 * **/


