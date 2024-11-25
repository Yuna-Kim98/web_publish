import { kobisMovieList, kobisMovieDetail } from './02_kobisCommons.js';

let mList = null; // 영화 리스트 전역 변수

initForm();

/** 영화 리스트 10개 준비 **/
function createMovieList() {
    kobisMovieList()
        .then((list) => {
            const tcount = list.movieListResult.totCnt;
            const length = list.movieListResult.movieList.length;
            const movieList = list.movieListResult.movieList;
            console.log(`tcount ---> ${tcount}`);
            console.log(`length ---> ${length}`);
            
            mList = movieList;
            // for(let movie of mList) {
            //     console.log(movie.movieNm);
            // }
        })
        .catch((error) => console.log(error));
}

function initForm() {
    // KOBIS 데이터 영화 리스트 가져오기
    createMovieList();

    let output = `
        <h1>KOBIS 영화 검색</h1>
        <div>
            <input type="text" id="search_title" placeholder="제목을 입력해주세요">
            <button type="button" id="search_button">검색</button>
        </div>
        <div id="result">
        </div>
    `;

    document.querySelector('body').innerHTML = output;

    // searchBtn add event & valiable check
    let searchBtn = document.querySelector('#search_button');
    searchBtn.addEventListener('click', () => {
        let title = document.querySelector('#search_title');
        if (title.value.trim() === '') {
            alert('영화 제목을 입력해주세요');
            title.focus();
        } else {
            // movie list 출력 함수 호출
            searchMovieList(title.value.trim());
        }
    });
} // end of initForm

/** 영화 코드 검색 함수 **/
function searchMovieCd(title) {
    let movieCd = '';
    if(mList !== null) {
        // 1. 필터링
        let filterMovie = mList.filter((movie) => movie.movieNm === title);
        // console.log(`title -> ${filterMovie[0].movieNm}`);
        // console.log(`cole --> ${filterMovie[0].movieCd}`);
        movieCd = filterMovie[0].movieCd;
    }
    return movieCd;
}

/** 영화 상세 검색 함수 **/
function searchMovieList(title) {
    let movieCd = searchMovieCd(title);
    console.log(`code ==> ${movieCd}`);

    kobisMovieDetail(movieCd)
        .then((result) => {
            console.log(result);
            
            let info = result.movieInfoResult.movieInfo;
            console.log(info);
            let output = `
                <ul>
                    <li>
                        <label>movieCd :: </label>
                        <span>${info.movieCd}</span>
                    </li>
                    <li>
                        <label>movieNm :: </label>
                        <span>${info.movieNm}</span>
                    </li>
                    <li>
                        <label>movieNmEn :: </label>
                        <span>${info.movieNmEn}</span>
                    </li>
                    <li>
                        <label>Directors :: </label>
            `;
            info.directors.forEach((director) => {
                output += `<span>${director.peopleNm} | </span>`;
                output += `<span>${director.peopleNmEn}</span>`;
            });
            
            output += `
                    <li>
                    <label>actors :: </lable>
                        <ul>`;

            // 출연배우 출력
            info.actors.forEach((actor) => {
                output += `<li><span>${actor.peopleNm} | </span>`;
                output += `<span>${actor.peopleNmEn} </span></li>`;
            });

            output += `
                        </ul>
                    </li>
                </ul>
            `;
            document.querySelector('#result').innerHTML = output;
        })
        .catch((error) => console.log(error));
}