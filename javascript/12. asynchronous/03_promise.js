// built-in class인 Promise를 통해 비동기식 처리
let promise1 = new Promise((resolve, reject) => { //익명 함수 형태로 실행
    // 실행한 비동기식 로직
    setTimeout(() => {
        resolve('success');
        // reject('fail');
    }, 3000);
}); 

promise1
    .then((result)=>{console.log('3초 경과!!')}) // 성공한 경우 -> 시간 경과 후 callback queue에 들어가는 실행함수 정의
    // .then()
    // .then() // method chain
    .catch((error)=>{console.log(error)}); // 실패한 경우