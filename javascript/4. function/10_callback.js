// 콜백함수는 함수 호출시 파라미터 인자로 제공되는 함수 형식을 의미함
// 즉, 함수 안에서 호출되는 함수
// 비동기처리?
// ex) add(a, add2());

const job = (a, callback) => {
    callback(a);
}
const job2 = (a, b, callback) => {
    callback(a, b);
}
const print = (a) => console.log(a); // 함수표현식
const printSum = (a, b) => {
    console.log(a + b);
}

job(100, print);
job2(100, 200, printSum);

// setTimeout 함수 호출
/* 구문
 * setTimeout(functionRef)
 * setTimeout(functionRef, delay)
 * setTimeout(functionRef, delay, param1)
 * setTimeout(functionRef, delay, param1, param2)
 * setTimeout(functionRef, delay, param1, param2, … , paramN)
*/
// 함수명 없이 함수 표현식이 작성될 경우 한번만 사용되고 끝난다는 뜻
// 지연시간을 설정할 경우, Web API에 그 시간만큼 머무르다가 출력된다. 자세한 건 추후 학습.
console.clear();
setTimeout((second) => console.log(`${second}초 후 실행!`), 3000, 3);