// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// KOBIS - 일별 박스오피스
let key = `a8b332937ccc33a57fd849262c540ef6`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;
// let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=a8b332937ccc33a57fd849262c540ef6&targetDt=20241121`;

// 1. Response 객체
// fetch(url) // fetch를 실행했을 때 반환값이 Promise이면 확인 가능
//     .then((response) => { console.log(response) })
//     .catch((error) => { console.log(error) });
    
// 2. JSON 데이터 가져오기
let result = await fetch(url);
let jsonData = await result.json();
// fecth() 함수 사용 시 Response 객체로 데이터가 넘어오는데, 이때 JSON객체가 문자열 데이터 타입으로 가져옴
// 이를 json 객체로 변환해주는 함수가 json()으로 fetch() 함수 사용시 반드시 같이 사용해주어야 함
// fetch() 함수는 비동기식으로 result로 선언 후 jsonData 선언으로 실행해 불러와도 result로 선언된 fetch()가 background에 있기 때문에 error 발생
// await 키워드는 해당 함수가 실행될 때까지 기다리라는 의미로, fetch() 함수가 바로 실행됨. 즉, 비동기식 처리를 할 때 순차적으로 처리하도록 해주는 키워드
// 비동기식 처리가 들어간 함수를 구현할 때는 async 키워드를 사용
console.log(`jsonData => ${jsonData.boxOfficeResult.boxofficeType}`);
console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
console.log(`ranklist => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`);
console.log(`movieNm => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`);
// json 객체의 프로퍼티는 반드시 대소문자 구분을 해주어야 함

// {
//     boxOfficeResult: {
//         boxofficeType: '일별 박스오피스',
//         showRange: '20241121~20241121',
//         dailyBoxOfficeList: [
//             [Object], [Object],
//             [Object], [Object],
//             [Object], [Object],
//             [Object], [Object],
//             [Object], [Object]
//     ]
//     }
// }