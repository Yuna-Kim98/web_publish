window.addEventListener("DOMContentLoaded", (event) => createNoticeList());

/**********************************************
 * jsonData 호출 & 기본 화면(전체 리스트) 출력
***********************************************/
function createNoticeList() {
    fetch('../data/notice.json')
        .then((result) => result.json())  // fetch 결과 => result(문자열) => json data로 변환
        .then((jsonData) => {
            showNoticeList(jsonData.list);
        })
        .catch((error) => console.log(error));

    // searchNtc 버튼 이벤트


} // end of createNoticeList()

/***********************************
 * 공지 메뉴 필터링 & 탭 변경
************************************/
function onChangeNoticeList(code) {
    // 1. list 배열에서 code를 filtering하여 새로운 배열로 반환
    fetch('../data/notice.json')
        .then((result) => result.json())
        .then((jsonData) => {
            if (code === 'total') {
                showNoticeList(jsonData.list); 
            } else {
                let filterList = jsonData.list.filter((object) => object.code === code); // 새로운 배열 생성됨
                console.log(filterList);
                showNoticeList(filterList); 
            }
        })
        .catch((error) => console.log(error));
}

/***********************************
 * 공지 검색 함수
************************************/
function searchNtc() {
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', () => {
        const type = document.querySelector('#type');
        const searchNtc = document.querySelector('#searchNtc');
        fetch('../data/notice.json')
        .then((result) => result.json())
        .then((jsonData) => {
            if ((type.value === 'title') && (searchNtc.value !== '')) {
                let filterList = jsonData.list.filter((object) => object.title === searchNtc.value);
                showNoticeList(filterList);
            }
        })
        .catch((error) => console.log(error));
    });
}
// 함수 로직시에는 한 가지의 기능만 하도록 할 것!

/***********************************
 * 공지 검색 폼 체크
************************************/
function searchNtcCheck() {
    const searchNtc = document.querySelector('#searchNtc');
    if (searchNtc.value === '') {
        alert('검색어를 입력해주세요.');
        searchNtc.focus();
    }
}

/***********************************
 * 화면 출력 함수
************************************/
function showNoticeList(list) {
    let output = `
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
            `;

            list.forEach((notice, i) => {
                output += `
                    <tr>
                        <td>${i+1}</td>
                        <td>${notice.type}</td>
                        <td><a href="#">${notice.title}</a></td>
                        <td>${notice.date}</td>
                        <td>${notice.hits}</td>
                    </tr>
                `;
            });

            output += `
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">1 2 3 4 5 6</td>
                    </tr>
                </tfoot>
            `;

            document.querySelector('table').innerHTML = output;
}