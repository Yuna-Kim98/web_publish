import { db } from './db.js';

/** 장바구니 데이터 추가 함수 **/
export const addCart = async({id, cartList}) => {
    let result_rows = 0;
    const result = await Promise.all( // []
            cartList.map(async(item) => {
                const values = [
                    id,
                    item.pid,
                    item.size,
                    item.qty
                ];
                console.log('values --> ', values);

                const sql = `
                    insert into shoppy_cart(id, pid, size, qty, cdate)
                    values (?, ?, ?, ?, now())
                `;

                const [result] = await db.execute(sql, values); // Promise 형태로 실행
                // console.log('result --> ', result.affectedRows);
                return result_rows = result.affectedRows;
            })
        );
    // console.log(result);
    result_rows = result.reduce((acc, cur) => acc + cur, 0);
    // console.log({"result_rows" : result_rows});
    return {"result_rows": result_rows};
}

/** 장바구니 전체 조회 **/
export const getItems = async({id}) => {
    // const sql = `
    // select sc.cid, 
    //         sc.size, 
    //         sc.qty,
    //         sm.id,
    //         sm.zipcode, 
    //         sm.address, 
    //         sp.pid,
    //         sp.pname, 
    //         format(sp.price, 0) as dprice,
    //         sp.price as price,
    //         sp.description as info, 
    //         concat("http://localhost:9000/", sp.upload_file ->> '$[0]') as image
    // from shoppy_cart sc, shoppy_member sm, shoppy_product sp
    // where sc.id = sm.id 
    //     and sc.pid = sp.pid
    //     and sm.id = ?
    // `;
    const sql = `select * from view_cart_list where id = ?`;

    const [result] = await db.execute(sql, [id]);
    return result;
}

/** 아이디별 장바구니 아이템 갯수 조회 **/
export const getCartCount = async({id}) => {
    const sql = `
        select count(*) as count
        from shoppy_cart
        where id = ?
    `;

    const [result] = await db.execute(sql, [id]);
    return result[0];
}

/** 장바구니 수량 업데이트 **/
export const updateQty = async({cid, type}) => {
    console.log('cid ::', cid);
    console.log('type ::', type);

    const str = type === "increase" ? "qty = qty+1" : "qty = qty-1";
    
    const sql = `
        update shoppy_cart
            set ${str}
        where cid = ?
    `;

    const [result] = await db.execute(sql, [cid]);
    return {"result_rows" : result.affectedRows};
}

/** 장바구니 아이템 개별 삭제 **/
export const deleteItem = async({cid}) => {
    const sql = `
        delete from shoppy_cart
        where cid = ?
    `;

    const [result] = await db.execute(sql, [cid]);

    return {"result_rows" : result.affectedRows};
}