import express from 'express';
import * as repository from '../respository/orderRepository.js';

export const getOrderList = async(req, res) => {
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
}