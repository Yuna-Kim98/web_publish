// 비동기식 처리 방식에서 callback 함수 호출
// runInDelay(callback, seconds);
function runInDelay(callback, seconds) {
    setTimeout(callback, seconds);
}

runInDelay(function () {console.log(`타이머 3초 경과!!`)}, 3000);
runInDelay(() => { console.log(`타이머 1초 경과!!`) }, 1000);
console.log(`-- 프로그램 종료 --`);

// 실행하면 모두 Background로 보내지는데 실행은 3초 함수가 먼저 되었지만
// 백그라운드에서 먼저 실행이 끝난 것은 1초 함수이기 때문에 queue에 1초 함수가 먼저 들어가게 된다.
// 그후, callstack의 실행이 끝나면 event loop에서 queue에 있는 실행값들을 차례로 callstack으로 보내서 실행, 출력하게 된다.