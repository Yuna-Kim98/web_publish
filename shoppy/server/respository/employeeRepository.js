import { db } from './db.js';

export const getEmployeeAll = async() => {
    // 1. sql query 작성
    const sql = `
                select row_number() over(order by emp_id) as no,
                        emp_id as id,
                        emp_name as name, 
                        eng_name as ename, 
                        gender,
                        left(hire_date, 10) as hiredate,
                        salary,
                        concat(format(salary, 0), '만원') as osalary
                from employee;
                `;

    // 2. db.js의 connection을 이용하여 실행 한 후 결과 가져오기
    const [employees, cols] = await db.execute(sql) // db에 있는 연결다리를 호출한 뒤 쿼리를 넘겨줌
                                .then((result) => result) // result : 2차원 배열 -> 구조분해할당으로 가져올 수 있음
                                .catch((error) => console.log(error));

    // 3. 호출한 곳(controller)에 결과 리턴
    return employees;
}

// simple queries(query) : 값이 고정되어 있을 때 완벽한 쿼리를 작성해서 사용 
// prepared statement(execute) : 반복되는 커리 저장 후 호출해서 사용