/** KOBIS 박스오피스 정보 호출 함수 **/
export async function kobisBoxOffice(type, searchDt) {
    const key = `a8b332937ccc33a57fd849262c540ef6`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    
    const kobis = await fetch(url);
    const jsonData = await kobis.json();
    return jsonData;
}