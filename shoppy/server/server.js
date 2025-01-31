// const express = require('express'); :: NodeJS에서 모듈 임포트. package.json에서 type이 commonjs로 설정되어 있을 경우 이 문법만 사용할 수 있다.
// package.json에서 type을 module로 수정하면 import 형식 사용 가능
import express from 'express'; // 최신버전. express 서버 생성
import helloRouter from './router/helloRouter.js';
import productRouter from './router/productRouter.js';

const server = express();
const port = 9000;

/** 익스프레스 서버의 요청/응답 처리하는 미들웨어
 * 요청/응답 메소드 : GET, POST, PUT, DELETE, USE
    - get ~ delete는 클라이언트의 요청 방식을 정확히 알아 일대일로 맵핑할 때 사용
    - use는 요청 방식에 상관없이(요청 방식을 정확히 알 수 없을 때) 사용
 * MVC 패턴을 적용하여 작업을 분리시킴
    - 역할에 맞추어 작업을 분리하는 용도.
    - M(Model), V(View), C(Controller)
    - M(Repository), V(Router), C(Controller)
        - 모델 : 디비와 실제로 연결(요즘은 repository라고 함)
        - 뷰 : react 화면과 연결(express에선 보통 router로 부름)
        - 컨트롤러 : 중간에서 모델과 뷰를 연결. 모델과 뷰로 명령 전달
**/ 

// server.get('브라우저가 요청하는 경로', (req, res) => {서버 작업});
// keep alive : http로 서버에 요청할 경우 응답하는 시간이 정해져있다. tcp(http의 부모) rep의 속성. 서버에서 응답을 해주지 않으면 무한 로딩에 빠진다.
// server.get('/hello', (req, res) => {
//     console.log('Hello~~ nodeJs~');
//     res.send('<h1>반갑습니다 클라이언트</h1>');
// });
// server.get('/hello', helloRouter);
// server.get('/hello/:id', helloRouter);
server.use('/hello', helloRouter); // hello로 시작하는 경로 주소는 모두 helloRouter로 매핑시킴. 대표 경로 설정
server.use('/hello/:id', helloRouter);

// server.get('/product/all', productRouter);
server.use('/product', productRouter);






// 서버는 항상 켜진 상태로 클라이언트가 요청하는 것을 받을 수 있어야함.
// server.listen(9000, funcion(){});
server.listen(port, () => {
    console.log(`서버 대기중 ---> ${port}`);
});    //  익스프레스 서버 대기상태 : 포트 설정 및 메시지출력 -> 제일 마지막에 작성