/** KMDB API 호출 **/
export async function kmdb(type, value, title) {
    const serviceKey = `EGHVI615PSB5K5YGV5JY`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&${type}=${value}&title=${title}&ServiceKey=${serviceKey}`;
    // 변수를 중첩시켜 선언할 경우 let으로 선언

    let api = await fetch(url);
    let jsonData = await api.json();
    return jsonData;
}