/** 영화 상세 정보 **/
export async function kmdbMovieDetail(movieNm, openDt) {
    const key = `EGHVI615PSB5K5YGV5JY`;
    let url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&ServiceKey=${key}&title=${movieNm}&releaseDts=${openDt}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    return jsonData;
}

/** KMDB 영화 포스터 검색 **/
export async function searchMoviePoster(movieNm, openDt) {
    const key = `EGHVI615PSB5K5YGV5JY`;
    let url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&ServiceKey=${key}&title=${movieNm}&releaseDts=${openDt}`;

    const result = await fetch(url);
    const jsonData = await result.json();
    return jsonData.Data[0].Result[0].posters.split('|')[0];
}

// 

/** KOBIS 박스오피스 정보 호출 함수 **/
export async function kobisBoxOffice(type, searchDt) {
    const key = `a8b332937ccc33a57fd849262c540ef6`;
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
    
    const kobis = await fetch(url);
    const jsonData = await kobis.json();
    return jsonData;
}

/** KOBIS 영화 리스트 호출 함수 **/
export async function kobisMovieList() {
    const key = `a8b332937ccc33a57fd849262c540ef6`;
    const curPage = 1;
    const itemPerPage = 100;
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;

    const movieList = await fetch(url);
    const jsonData = await movieList.json();
    return jsonData;
}

/** KOBIS 영화 상세 정보 호출 함수 **/
export async function kobisMovieDetail(movieCd) {
    console.log(movieCd);
    
    const key = `a8b332937ccc33a57fd849262c540ef6`;
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    // url 주소 주의(데이터마다 링크 세부 내용 다름)

    const movie = await fetch(url);
    const jsonData = await movie.json();
    return jsonData;
}

/** KMDB API 호출 **/
export async function kmdb(title, releaseDt) {
    const serviceKey = `EGHVI615PSB5K5YGV5JY`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
    url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&${type}=${value}&title=${title}&ServiceKey=${serviceKey}`;
    // 변수를 중첩시켜 선언할 경우 let으로 선언

    let api = await fetch(url);
    let jsonData = await api.json();
    return jsonData;
}


