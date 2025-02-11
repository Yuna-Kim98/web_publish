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

/** 상품 상세 정보 조회 - select **/
export const getProduct = async(pid) => {
    const sql = `
        select pid,
                pname,
                price, 
                description,
                upload_file as uploadFile,
                source_file as sourceFile,
                pdate,
                concat('http://localhost:9000/', upload_file->> '$[0]') as image,
                json_array(
                    concat('http://localhost:9000/', upload_file->> '$[0]'),
                    concat('http://localhost:9000/', upload_file->> '$[1]'),
                    concat('http://localhost:9000/', upload_file->> '$[2]')
                ) as imgList,
                json_arrayagg(
                    concat('http://localhost:9000/', jt.filename)
                ) as detailImgList
        from shoppy_product, 
            json_table(shoppy_product.upload_file, '$[*]' columns( filename varchar(100) path '$')) as jt -- 배열 생성 함수
        where pid = ?
        group by pid;
    `;
    
    const [result] = await db.execute(sql, [pid]); // result = [ [{pid:, ~~}], [컬럼명 fields] ] -> 무조건 2차원 배열
    
    return result[0];
}