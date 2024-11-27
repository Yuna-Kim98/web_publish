import { kobisBoxOffice, kmdb } from './commons.js';

initForm();

function initForm() {
    const output = `
        <h1>박스오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별 박스오피스</option>
                <option value="Weekly">주간/주말 박스오피스</option>
            </select>
            <input type="text" id="searchDt" placeholder="예)YYYYMMDD">
            <button type="button" id="searchBtn">search</button>
        </div>
        <div id="result"></div>
    `;

    // output 화면 출력
    document.querySelector('body').innerHTML = output;

    /* 기본 박스오피스 정보 화면 출력 */
    // 최신 데이터 설정(어제)
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 1;
    let yesterday = year.concat(month, day);
    
    searchBoxOffice('Daily', yesterday);

    // searchBtn 이벤트
    let searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', () => {
        let type = document.querySelector('#type');
        let searchDt = document.querySelector('#searchDt');
        if (type.value === 'default') {
            alert('타입을 선택하세요!');
        } else if (searchDt.value === '') {
            alert('검색 일자를 입력하세요!');
        } else {
            searchBoxOffice(type.value, searchDt.value);
        }
    });

} // end of initForm()

/** 일별 박스오피스 정보 화면 출력 함수 **/
function searchBoxOffice(ktype, searchDt) { // ktype = Daily or Weekly
    kobisBoxOffice(ktype, searchDt)
        .then((result) => {
            const type = result.boxOfficeResult.boxofficeType; // 박스오피스 타입 출력
            const range = result.boxOfficeResult.showRange; // 박스오피스 검색 일자 출력

            // ktype 체크 후 타입별 박스오피스 리스트 출력
            let rankList = null;
            if (ktype === 'Daily') {
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
            } else if (ktype === 'Weekly') {
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;
            }

            // 박스오피스 정보 화면 출력
            // KMDb에서 poster 가져오기
            let posterList = [];
            rankList.forEach((element) => {
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-', '');

                // posterList
                posterList.push(getPoster(movieNm, openDt));
            });

            // 화면 출력
            Promise.all(posterList) // posterList 배열이 Promise 타입으로 넘어오므로 이렇게 진행
                .then((poster) => {
                    let output = `
                        <h3>박스오피스 타입 : ${type}</h3>
                        <h3>박스오피스 일자 : ${range}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>제목</th>
                                    <th>개봉일</th>
                                    <th>일별 관객수</th>
                                    <th>누적 관객수</th>
                                </tr>
                                </thead>
                                <tbody>`;
                            rankList.forEach((element, i) => {
                                output += `
                                    <tr>
                                        <td>${element.rank}</td>
                                        <td>
                                            <img src="${poster[i]}" width="100px" class="poster">
                                            ${element.movieNm}
                                        </td>
                                        <td>${element.openDt}</td>
                                        <td>${element.audiCnt}</td>
                                        <td>${element.audiAcc}</td>
                                    </tr>
                                `;
                            });
                            output += `</tbody></table>`;

                    document.querySelector('#result').innerHTML = output;
                })
                .catch((error) => console.log(error));

        }) // end of kobisBoxOffice.then()
        .catch((error) => console.log(error));   
} // end of kobisBoxOffice()

/** 포스트 리스트 호출시, 순차적으로 비동기식 호출하기 위해 getPoster 함수 생성 **/
async function getPoster(movieNm, openDt) {
    return await kmdb(movieNm, openDt);
}