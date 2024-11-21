function a() {
    c(); // return address(복귀 주소) -> 함수 안에서 함수가 호출될 때는 자동으로 복귀 주소가 붙음
    console.log(`-----> a function!`);
}

function b() {
    setTimeout(()=>{console.log(`1초 후 setTimeout 함수 실행`)});
    console.log(`-----> b function!`);
}

function c() {
    b(); // return address(복귀 주소)
    console.log(`-----> c function!`);
}

a(); // 정리하기