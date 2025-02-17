import * as repository from '../respository/cartRepository.js';

/** 장바구니 데이터 추가 함수 **/
export const addCart = async(req, res) => {
    // console.log('req.body --> ', req.body);
    const result = await repository.addCart(req.body);
    res.json(result);
    res.end();
}

/** 장바구니 전체 조회 **/
export const getItems = async(req, res) => {
    const result = await repository.getItems(req.body);
    res.json(result);
    res.end();
}

/** 아이디별 장바구니 아이템 갯수 조회 **/
export const getCartCount = async(req, res) => {
    const result = await repository.getCartCount(req.body);
    res.json(result);
    res.end();
}

/** 장바구니 수량 업데이트 **/
export const updateQty = async(req, res) => {
    const result = await repository.updateQty(req.body);
    res.json(result);
    res.end();
}