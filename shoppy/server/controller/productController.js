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