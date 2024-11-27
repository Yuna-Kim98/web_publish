/** KOBIS 박스오피스 정보 호출 함수 **/
export async function kobisBoxOffice(type, searchDt) {
    const key = `a8b332937ccc33a57fd849262c540ef6`;
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?`;
    url += `key=${key}&targetDt=${searchDt}`;

    const kobis = await fetch(url);
    const jsonData = await kobis.json();
    
    return jsonData;
}

/** KMDb API 호출 함수 - poster 불러오기 **/ 
export async function kmdb(title, releaseDt) { // 제목, 개봉일
    const serviceKey = `EGHVI615PSB5K5YGV5JY`;
    let url =  `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${title}&releaseDts=${releaseDt}&ServiceKey=${serviceKey}`;

    const kmdb = await fetch(url);
    const jsonData = await kmdb.json();

    // return jsonData;
    return jsonData.Data[0].Result[0].posters.split('|')[0];
}

