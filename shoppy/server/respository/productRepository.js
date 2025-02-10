import { db } from './db.js';

/** 상품 등록 **/
export const registerProduct = async(formData) => {
    const sql = `
        insert into shoppy_product(pname, price, description, upload_file, source_file, pdate)
        values(?, ?, ?, ?, ?, now())
    `;

    const values = [
        formData.productName,
        formData.price || 0,
        formData.description || "",
        formData.uploadFile || null,
        formData.sourceFile || null
    ];

    const [result] = await db.execute(sql, values);
    
    return {"result_rows": result.affectedRows};
}

/** 전체 상품 리스트 조회 **/
export const getList = async() => {
    const sql = `
        select pid,
            pname as name,
            price,
            description as info,
            concat('http://localhost:9000/', upload_file->> '$[0]') as image,
            source_file,
            pdate
        from shoppy_product
    `;

    // 2차원 배열에서 result를 구조분해할당으로 꺼내 1차원 배열로 받음
    const [result] = await db.execute(sql);

    return result; // [{}, {}, {}]
}