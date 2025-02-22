// 호이스팅(Hoisting) : 코드 실행 전 메모리에 객체를 선언하고 할당하는 작업. 즉, 코드 실행 전 페이지를 스캔하고 함수와 같은 객체들을 메모리에 선언, 할당하는 작업.
// 함수 호출
hoist1(); 
// hoist2();

function hoist1() {
    console.log('호이스팅 1');
}
// function 키워드는 호이스팅 되어 호출 전 미리 메모리에 올라가기 때문에 선언 전 먼저 호출해도 오류 발생하지 않음

const hoist2 = () => {
    console.log('호이스팅 2');
}
// arrow function은 호이스팅 되지 않으므로 반드시 먼저 선언 후 호출되어야 함. 선언 전 호출될 경우 오류 발생

hoist2();