import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';

/** 서버 생성 및 포트 지정 **/
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 처리 **/
server.use(express.json()); // 어떤 프로토콜로 요청이 와도 해당 작업을 실행하도록 함
server.use(express.urlencoded()); // 인코딩 처리
server.use(cors()); // 다른 도메인의 요청작업을 받아서 현재 실행 중인 서버에서 처리함

/** 서버의 요청 처리를 위한 미들웨어 정의 **/
// use를 사용할 경우 대표주소로 설정된다는 것을 주의할 것!
server.use('/', mainRouter);
server.use('/hello', helloRouter);
server.use('/employee', employeeRouter);




server.listen(port, () => {
    console.log(`server port --> ${port}`);
});