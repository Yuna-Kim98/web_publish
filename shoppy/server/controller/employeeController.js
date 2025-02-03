import * as repository from '../respository/employeeRepository.js';

export const getEmployeeAll = async(req, res) => {
    const result = await repository.getEmployeeAll(); // db 연동 작업은 무조건 비동기식 처리
    res.json(result); // promise 타입의 객체로 받았으니 json으로 변환
    res.end();
}