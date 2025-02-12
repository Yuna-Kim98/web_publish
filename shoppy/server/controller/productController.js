import * as repository from '../respository/productRepository.js';

/** 상품 등록 **/
export const registerProduct = async(req, res) => {
    // 레파지토리 함수
    const result = await repository.registerProduct(req.body);
    res.json(result);
    res.end();
}

/** 전체 상품 리스트 조회 **/
export const getList = async(req, res) => {
    const result = await repository.getList(req.body);
    res.json(result);
    res.end();
}

/** 상품 상세 정보 조회 **/
export const getProduct = async(req, res) => {
    const result = await repository.getProduct(req.body.pid);
    // req.body는 객체로 데이터가 전송됨 -> {"pid": pid} 그러나 이 경우 pid를 변수 형태로 바로 보내므로 구조분해할당 불가능
    res.json(result);
    res.end();
}

/** 장바구니 상품 정보 조회 **/
export const getCartItems = async(req, res) => {
    // console.log('pids --> ', req.body);
    const result = await repository.getCartItems(req.body);
    res.json(result);
    res.end();
}