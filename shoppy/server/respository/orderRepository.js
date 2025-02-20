import { db } from "./db.js";

export const getOrderList = async({id}) => {
    // const sql = `
    //     select sc.cid, 
    //             sc.size, 
    //             sc.qty,
    //             sm.id,
    //             sm.name,
    //             sm.phone,
    //             concat(sm.emailname, '@', sm.emaildomain) as email,
    //             sm.zipcode, 
    //             sm.address, 
    //             sp.pid,
    //             sp.pname,
    //             sp.price as price,
    //             sp.description as info, 
    //             concat("http://localhost:9000/", sp.upload_file ->> '$[0]') as image
    //     from shoppy_cart sc, 
    //         shoppy_member sm, 
    //         shoppy_product sp
    //     where sc.id = sm.id 
    //         and sc.pid = sp.pid
    //         and sm.id = ?
    // `;
    const sql = `select * from view_order_list where id = ?`;

    const [result] = await db.execute(sql, [id]);

    return result;
}

/** shoppy_order 테이블에 주문 정보 추가하기 **/
export const addToOrder = async(formData) => {
    const result = await Promise.all( // []
        formData.orderList.map(async(item) => {
            const values = [
                formData.tid,
                formData.id,
                item.pid,
                item.size,
                item.qty,
                formData.total_price,
                formData.type
            ];

            const sql = `
                insert into shoppy_order(tid, id, pid, size, qty, tprice, type, odate)
                values (?, ?, ?, ?, ?, ?, ?, current_date())
            `;

            const [result] = await db.execute(sql, values); // Promise 형태로 실행
            return result.affectedRows;
        })
    );
    const result_rows = result.reduce((acc, cur) => acc + cur, 0);

    return { "result_rows" : result_rows };
}