// 파일 관련 작업은 비동기식 처리이므로 하나의 파일을 읽고 쓰는 작업만 진행한다면 readFile(),writeFile()을 사용
// 여러 개의 파일을 순서대로 읽고 쓰는 작업은 readFileSync(), writerFileSync();
const fs = require('fs');

// console.log(fs);
// fs.writeFile('파일 경로', 데이터, 콜백함수);
fs.writeFileSync('./writeme3.txt', '새로운 글이 작성됩니다.', (err) => console.log('에러 발생!!!'));

const data = fs.readFileSync('./writeme3.txt');
console.log(data.toString());
