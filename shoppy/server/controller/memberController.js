import * as repository from '../respository/memberRepository.js';

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