import express from 'express';
import * as controller from '../controller/helloController.js'
// 호출하는 함수가 여러개일 때 *로 대체 후 별칭을 붙여줄 수 있다.

const router = express.Router();

// 문법: router.get('라우팅 경로', 연동하는 컨트롤러 이름);
// 서버에서 요청을 받으면 어떤 컨트롤러를 요청해야하는지 찾아서 이동하는게 역할의 전부. 직접 콜백함수를 실행하지 않는다.
// router.get('/hello', controller.getHello);
// router.get('/hello/:id', controller.getHelloParam);
router
    .get('/', controller.getHello)
    .get('/:id', controller.getHelloParam); // server에서 use로 매핑했기 때문에 /hello 생략 가능


export default router;