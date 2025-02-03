import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';

// 서버 생성 및 포트 지정
const server = express();
const port = 9000;

/** 서버의 요청 처리를 위한 미들웨어 정의 **/
// use를 사용할 경우 대표주소로 설정된다는 것을 주의할 것!
//  / => Hello~ NodeJS~
server.use('/', mainRouter);
//  /hello => Welcome to Hello~
server.use('/hello', helloRouter);


server.listen(port, () => {
    console.log(`server port --> ${port}`);
});