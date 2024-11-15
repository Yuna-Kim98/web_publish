// 날짜 형식 - Date class
console.log(Date.now()); // 현재 날짜, 시간을 숫자로 변환해서 출력
console.log(new Date); // 현재 시스템 날짜, 시간 출력

let date = new Date(); // 현재 사용하는 시스템의 날짜를 객체로 생성
console.log(date.getFullYear()); // 현재 연도 출력
console.log(date.getMonth() + 1); // 현재 월 - 1로 출력되기 때문에 +1 필요
console.log(date.getDate()); // 현재 날짜(일) 출력

let year = date.getFullYear().toString();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// '2024년 11월 15일' => String.concat();
let display = year.concat('년 ', month, '월 ', day, '일');
console.log(display);

// '2024년 11월 15일' => 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
console.log(display);

// 날짜 출력 타입 지정
console.log(date.toLocaleString('ko-KR')); // 서버 시간을 설정 국가에 날짜, 시간을 맞춰 변형, 출력
console.log(date.toLocaleString('en-US')); 

console.log(date.toLocaleDateString('ko-KR')); // 서버 시간을 현재 국가의 날짜에 맞춰 변형, 출력
console.log(date.toLocaleDateString('en-US')); 