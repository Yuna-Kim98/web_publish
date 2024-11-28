import { kobisBoxOffice, searchMoviePoster } from "./02_kobisCommons.js"; 
// 호출 오류 :: 파일에 반드시 확장자 붙여줄 것!

createMovieChartList(1); // 5개의 무비차트 리스트가 출력되는 화면을 1페이지로 지정

/*** index -> 무비차트 리스트 생성 함수 ***/
function createMovieChartList(page) {
    // 하루 전 날짜 생성
    const date = new Date();
    const searchDt = date.getFullYear().toString()
                        .concat(date.getMonth()+1, date.getDate()-1);

    kobisBoxOffice('Daily', searchDt)
        .then((result) => {
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = []; // Promise 객체 타입으로 10개의 이미지 poster 추가

            rankList.forEach((element) => {
                // console.log(element.movieNm, element.openDt.replaceAll('-', ''));
                posterList.push(getPoster(element.movieNm, element.openDt.replaceAll('-', '')));
            });

            Promise.all(posterList) // 비동기식 처리를 묶어서 한번에 실행 및 관리 함수
                .then((poster) => {
                    let output = `<ul>`; 
                    (page === 2)? output += `<li><span class="movie-chart" id="arrow-left">&lt;</span></li>`: output += '';
                    let idx = 0;
                    (page !== 1) ? idx +=5 : idx =0;
                    // 삼항연산자 사용. 다음 페이지로 넘기면 다음 목차 5개가 뜨도록 함
                    rankList.forEach((movie, i) => {
                        i += idx;
                        if(i < page * 5) {
                            output += ` 
                                <li>
                                    <div><img src="${poster[i]}" alt="movie chart1" width="150px"></div>
                                    <div><strong>${rankList[i].movieNm}</strong></div>
                                    <div><span>${rankList[i].audiAcc}</span></div>
                                </li>
                            `;
                        }
                    });
                    (page === 1)? output += `<li><span class="movie-chart" id="arrow-right">&gt;</span></li>`: output += '';
                    output += `</ul>`;
                    // output += `<li><span id="arrow-right">&gt;</span></li>`;
                    document.querySelector('.moviechart-list').innerHTML = output;

                    // arrow click event -> 공식처럼 외울 것!!!
                    const arrows = document.querySelectorAll('.movie-chart');
                    arrows.forEach((arrow) => 
                        arrow.addEventListener('click', (event) => {
                            (event.target.id === 'arrow-right')?
                                createMovieChartList(2) : createMovieChartList(1);
                        })
                    );

                    // try {
                    //     document.querySelector('#arrow-right')
                    //             .addEventListener('click', () => {
                    //                 createMovieChartList(2);
                    //             });
                    // } catch (error) {
                    // }

                    // try {
                    //     document.querySelector('#arrow-left')
                    //         .addEventListener('click', () => {
                    //             createMovieChartList(1);
                    //         });
                    // } catch (error) { 
                    // }
                })
                .catch((error) => console.log(error)); 

        })
        .catch();

} // end of createMovieChartList

/*** kobisCommons.js 파일의 searchMoviePoster 비동기식 함수를 순서대로 호출하는 함수 생성  ***/
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}

