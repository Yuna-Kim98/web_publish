/**
 * scope : 메모리 관리, 이름 충돏 방지. 블룩 단위의 개념 부분
 * block(블록 : {}) : 블록단위의 실행 개념 : for. sitce case, if~else;
 * 
 **/

// 전역변수(Global Variable) -> 파일 전체에 어느 곳에서든지 호출 가능
// 변수의 초기화는 자동
let a = 10; 
let b = 20;
console.log(a);
console.log(b);

    {   // 지역변수(Local Variable) -> 선언된 블럭 내에서만 호출 가능
        // 변수 선언시 반드시 초기화를 진행 
        let aa = 100; 
        let bb = 200;
        console.log(a, b);
    }
// console.log(aa); // 지역변수 블럭 밖에서 호출 불가능

// 1 ~까지 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
