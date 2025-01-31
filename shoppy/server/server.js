// const express = require('express'); 구버전
import express from 'express'; // 최신버전. express 서버 생성

const server = express();
const port = 9000;

/** 익스프레스 서버의 요청/응답 처리하는 미들웨어
 * 요청/응담 메소드 : GET, POST, PUT, DELETE
 * MVC 패턴을 적용하여 작업을 분리시킴
    모델 : 디비와 실제로 연결(레파지토리)
    뷰 : react 화면과 연결(리액트에선 보통 route로 사용함)
    컨트롤러 : 중간에서 모델과 뷰를 연결. 모델과 뷰로 명령 전달
**/ 

// server.get('브라우저가 요청하는 경로', (req, res) => {서버 작업});
server.get('/hello', (req, res) => {
    console.log('Hello~~ nodeJs~');
    res.send('<h1>반갑습니다 클라이언트</h1>');
});
// keep alive : http로 서버에 요청할 경우 응답하는 시간이 정해져있다. 서버에서 응답을 해주지 않으면 응답을 받기 위해 브라우저가 계속 돌아간다.






// 서버는 항상 켜진 상태로 클라이언트가 요청하는 것을 받을 수 있어야함.
// server.listen(9000, funcion(){});
server.listen(port, () => {
    console.log(`서버 대기중 ---> ${port}`);
});    //  익스프레스 서버 대기상태 : 포트 설정 및 메시지출력 :: 제일 마지막에 작성