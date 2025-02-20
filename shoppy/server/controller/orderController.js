import express from 'express';
import * as repository from '../respository/orderRepository.js';

export const getOrderList = async(req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
}

/** shoppy_order 테이블에 주문 정보 추가하기 **/
export const addToOrder = async(req, res) => {
    const result = await repository.addToOrder(req.body);
    res.json(result);
    res.end();
}