import * as repository from '../respository/memberRepository.js';
import jwt from 'jsonwebtoken';

/**
 * 회원가입 : registerMember
**/
export const registerMember = async(req, res) => {
    const result = await repository.registerMember(req.body); // repository에 동일 이름의 함수 생성
    res.json(result);
    res.end();
}

/**
 * 아이디 중복체크 : getIdCheck
**/
export const getIdCheck = async(req, res) => {
    // console.log('id -->', req.body);
    const result = await repository.getIdCheck(req.body);
    res.json(result);
    res.end();
}

/**
 * 로그인 : checkLogin
**/
export const checkLogin = async(req, res) => {
    let result = await repository.checkLogin(req.body); // result_rows = 1
    // let token = '';

    // jwt 토큰 생성 및 result 객체에 추가&전송 : {result_rows:1, token: ~}
    if(result.result_rows === 1) {
        const token = jwt.sign({"userId": req.body.id}, 'ALegqjaWAu');
        result = {...result, "token":token};
    }

    res.json(result);
    res.end();
}