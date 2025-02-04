import { db } from './db.js';

/**
 * 아이디 중복 체크 - select
**/
export const getIdCheck = async({id}) => { // 구조분해할당(idData :: json)
    const sql = `select count(id) as result from shoppy_member where id = ?`; // count 함수를 쓰면 결과를 0, 1로 받아 정확한 값을 받도록 함
    const [result, fields] = await db.execute(sql, [id]); // 데이터는 반드시 배열형태여야 함

    // console.log('result --> ', result[0]);
    return result[0];
    // 쿼리는 항상 배열로 묶어서 데이터를 보내므로 반환할 때 object로 반환할 수 있도록 주의해야 함 
}

/**
 * 회원가입 - insert
**/
export const registerMember = async(formData) => {
    // 1. sql 생성
    const sql = `
        insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain, zipcode, address, mdate)
            values(?, ?, ?, ?, ?, ?, ?, ?, now())
    `;
    const values = [
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        null,
        null
    ];

    // 2. db 객체를 이용해 sql 실행 후 결과 가져오기
    const [result, fields] = await db.execute(sql, values);

    // 3. 호출한 곳(controller)으로 결과값 리턴
    return {"result_rows": result.affectedRows};
}