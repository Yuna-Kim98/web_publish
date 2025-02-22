import express from 'express';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js';
import cartRouter from './router/cartRouter.js';
import orderRouter from './router/orderRouter.js';
import paymentRouter from './router/paymentRouter.js';
import path from 'path';

/** 서버 생성 및 포트 지정 **/
const server = express();
const port = 9000;

/** 서버의 공통적인 작업 처리 **/
server.use(express.json()); // 어떤 프로토콜로 요청이 와도 해당 작업을 실행하도록 함
server.use(express.urlencoded()); // 인코딩 처리
server.use(cors()); // 다른 도메인의 요청작업을 받아서 현재 실행 중인 서버에서 처리함
server.use("/upload_files", express.static(path.join("upload_files"))); // 저장 폴더 연결
//           호출 url 경로                               폴더명  => 두 이름이 달라도 되는 이유
// 단, 미들웨어의 경로와는 겹치지 않도록 주의

/** 서버의 요청 처리를 위한 미들웨어 정의 **/
// use를 사용할 경우 대표주소로 설정된다는 것을 주의할 것!
server.use('/member', memberRouter); 
server.use('/uploads', uploadRouter);
server.use('/product', productRouter);
server.use('/cart', cartRouter);
server.use('/order', orderRouter);
server.use('/payment', paymentRouter);



server.listen(port, () => {
    console.log(`server port --> ${port}`);
});