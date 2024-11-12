// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합
/**
 * JavaScript 파일 구조
    08_quiz.js
    {
    function gugudan() {~}
    // 함수 자체가 파일의 블럭 안에 있기 때문에 외부에서 호출할 수 없음
    // 이를 life cycle이라고 함
    }
 */
// export 키워드로 함수를 전역에서 사용할 수 있도록 함

/*
 * 기본 구구단 함수 형식 : 1 ~ 9단 출력
*/
export function gugudan() {
    for (let row = 1; row <= 9; row++) {
        let output = '';
        for (let col = 1; col <= 9; col++) {
            output += `${col} * ${row} = ${col * row}\t`
        }
        console.log(output);
    }
}
/*
 * 선택 구구단 함수 형식 : start ~ end단 출력
 * 입력되는 start는 0보다 커야한다.
 * 10단 이상은 출력되지 않도록 한다.
*/
export function selectGugudan(start, end) {
    for (let row = 1; row <= 9; row++) {
        let output = '';
        for (let col = start; col <= end; col++) {
            output += `${col} * ${row} = ${col * row}\t`
        }
        console.log(output);
    }
}
/*
 * 싱글 구구단 함수 형식 : single단 출력
 * 입력되는 매개변수는 0보다 커야한다.
*/
export function singleGugudan(dan) {
    for (let row = 1; row <= 9; row++) {
        console.log(`${dan} * ${row} = ${dan * row}`);
    }
}

// fruitTower
export function fruitTower(emoji, floor) {
    for (let row = 1; row <= floor; row++) {
        let output = '';
        for (let col = 1; col <= row; col++) {
            output += emoji;
        }
        console.log(output);    
    }
}