import { kobisBoxOffice as boxOffice } from './02_kobisCommons.js';

initform();

function initform() {
    const output = `
        <h1>일별 박스오피스</h1>
        <div id="search">
            <select id="type">
                <option value="default">선택</option>
                <option value="Daily">일별 박스오피스</option>
                <option value="Weekly">주간/주말 박스오피스</option>
            </select>
            <input type="text" id="searchDt" placeholder="예)20241122">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>
    `;
    document.querySelector('body').innerHTML = output;

    // 기본 박스오피스 화면 출력 : 어제(가장 최신 데이터)
    // searchBoxOffice('Daily', '20240101');
    let date = new Date(); // 현재 사용하는 시스템의 날짜를 객체로 생성
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1; // 현재 월 - 1로 출력되기 때문에 +1 필요
    let day = date.getDate() - 1; // 어제 날짜(일) 출력 = -1
    let yesterday = year.concat(month, day);

    searchBoxOffice('Daily', yesterday);

    /** SearchBtn 이벤트 추가 **/
    let searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', () => {
        // searchDt 입력창, 박스오피스 타입 유효성 체크
        let type = document.querySelector('#type');
        let searchDt = document.querySelector('#searchDt');
        if (type.value === 'default') {
            alert('박스오피스 타입을 선택해주세요.');
            type.focus();
        } else if (searchDt.value === '') {
            alert('검색일자를 입력해주세요.');
            searchDt.focus();
        } else {
            // 일별 & 주간/주말 박스오피스 정보 화면 출력
            searchBoxOffice(type.value, searchDt.value);
        }
    });
} // end of initForm

/** 일별 박스오피스 정보 화면 출력 **/
function searchBoxOffice(ktype, searchDt) {
    boxOffice(ktype, searchDt) // return daily -> Promise 객체로 리턴
        .then((result) => {
            const type = result.boxOfficeResult.boxofficeType; // 박스오피스 종류 출력
            const range = result.boxOfficeResult.showRange; // 박스오피스 조회 일자 출력

            // ktype을 체크하여 daily, weekly
            let rankList = null;
            if (ktype === 'Daily') {
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
            } else if (ktype === 'Weekly') {
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;
            }


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
                    <tbody>
                `;
            rankList.forEach(element => {
                output += `
                    <tr>
                        <td>${element.rank}</td>
                        <td>${element.movieNm}</td>
                        <td>${element.openDt}</td>
                        <td>${element.audiCnt}</td>
                        <td>${element.audiAcc}</td>
                    </tr>
                `;
            });
            output += `</tbody></table>`;
            
            // table 화면 출력
            document.querySelector('#result').innerHTML = output;
            })
        .catch();
}