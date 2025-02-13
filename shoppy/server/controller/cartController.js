import * as repository from '../respository/cartRepository.js';

/** 장바구니 데이터 추가 함수 **/
export const addCart = async(req, res) => {
    // console.log('req.body --> ', req.body);
    const result = await repository.addCart(req.body);
    res.json(result);
    res.end();
}