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