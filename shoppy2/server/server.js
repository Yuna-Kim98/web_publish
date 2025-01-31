import express from 'express';
import testRouter from './router/testRouter.js';

const app = express();
const port = 9000;

/** 요청을 처리하는 미들웨어 **/
//  /test 요청 --> Hello~ Test!!!
app.use('/test', testRouter); // test로 시작하는 모든 경로를 routing

app.listen(port, () => {
    console.log(`server start --> ${port}`);
});