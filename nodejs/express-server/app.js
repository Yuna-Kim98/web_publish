// express 웹 서버 : 웹 클라이언트(브라우저) 받아서 처리한 후 결과를 전송
const express = require('express');
const server = express();

/*
    get/post 방식으로 요청 들어오는 처리를 나열
*/
// 브라우저가 접속하는 url - http://localhost:8080/ 
// path : /(root)
server.get('/', (req, res) => { 
    // req : request. 요청 정보(클라이언트 --> 서버)
    // res : response. 응답 정도(서버 --> 클라이언트)
    res.send('<h1>express 서버에서 전송합니다.</h1>'); // 브라우저는 html 형식으로 받기 때문에 html 태그로 작성
});

// 브라우저가 접속하는 url - http://localhost:8080/test
// path : /test
server.get('/test', (req, res) => {
    res.send('<h1>/test로 요청한 결과 전송</h1>');
    console.log('/test 전송 완료!');
});

// path : /param/홍길동
server.get('/param/:name', (req, res) => {
    // console.log('req', req);
    console.log('name ==> ', req.params.name);
    // 서버로 넘기는 res가 없기 때문에 브라우저가 정보를 받지 못해 무한 로딩, 오류가 발생
    res.send(`${req.params.name} 전송 완료`);
});

// server.get();
// server.post();
// server.use();

// server.listen(8080, function () {});
server.listen(8080, () => { console.log('서버 실행 중'); }); // 서버 포트 번호 지정 -> http://localhost:8080ㅁㄴ