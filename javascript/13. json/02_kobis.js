import { kobisBoxOffice as boxOffice, searchMoviePoster, kmdbMovieDetail } from './02_kobisCommons.js';

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
            <input type="text" id="searchDt" placeholder="예)YYYYMMDD">
            <button type="button" id="searchBtn">Search</button>
        </div>
        <div id="result"></div>

        <div id="imageModal" class="modal">
            <div class="modal-content">
                <span id="closeModal" class="close">&times;</span>
                <img id="modalImage" src="" alt="Modal Image" style="width:100%">
            </div>
        </div>
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
            let rankList = null; // rankList = 타입별 박스오피스 리스트
            let posterList = [];
            
            if (ktype === 'Daily') {
                rankList = result.boxOfficeResult.dailyBoxOfficeList;
            } else if (ktype === 'Weekly') {
                rankList = result.boxOfficeResult.weeklyBoxOfficeList;
            }

            // 영화 포스터 가져오기
            // kmdb api 호출 -> kobis에서 영화제목, 개봉일 넘겨서 해당하는 영화 포스터 kobis 박스오피스 리스트에 출력되도록 하기
            rankList.forEach((element) => {
                let movieNm = element.movieNm
                let openDt = element.openDt.replaceAll('-','');

                posterList.push(getPoster(movieNm, openDt));
            });
            
            Promise.all(posterList) // 비동기식 처리는 모두 종료가 되도록 실행
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
                            <tbody>
                        `;
                    rankList.forEach((element, i) => {
                        output += `
                            <tr>
                                <td>${element.rank}</td>
                                <td>
                                    <img src="${poster[i]}" width="100px" class="poster" id="${element.movieNm},${element.openDt.replaceAll('-', '')}">
                                    ${element.movieNm}
                                </td>
                                <td>${element.openDt}</td>
                                <td>${element.audiCnt}</td>
                                <td>${element.audiAcc}</td>
                            </tr>
                        `;
                    });
                    output += `</tbody></table>`;
            
                    // table 화면 출력
                    document.querySelector('#result').innerHTML = output;

                    // 이미지 클릭 이벤트
                    const images = document.querySelectorAll('.poster');
                    images.forEach((image) => image.addEventListener('click', onMovieDetail)); // 파라미터 인자로 함수를 넣을 때 괄호없이 함수명만 넣어주면 return adress없이 호출만 됨 
                })
                .catch();
        });

}

/** 이미지 이벤트 처리 함수 **/
function onMovieDetail(event) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');

    let [movieNm, openDt] = event.target.id.split(','); // 구조분해할당(문자를 배열로 만듦)


    kmdbMovieDetail(movieNm, openDt)
        .then((result) => {
            // console.log(result.Data[0].Result[0].title);
            const imageSrc = event.target.src; // 클릭한 이미지의 src를 가져옴
            modalImage.src = imageSrc; // 모달 창에 이미지 넣기
            modal.style.display = 'block'; // 모달 창 표시 / 부호 실수 error 주의!
        })
        .catch((error) => console.log(error))

        // 모달 닫기 버튼 클릭시 모달 닫기
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        //모달 바깥쪽 클릭시 모달 닫기
        window.addEventListener('click', () => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
} // end ofonMovieDetail

// 같은 이벤트를 공유하는(반복하는) 요소들에는 class는 동일하게 주어 이벤트를 줌
// id를 각기 다르게 지정해 따로 쓸 수 있게 함

/** 순차적으로 비동기식 호출을 위해 getPoster 함수 생성 **/
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}