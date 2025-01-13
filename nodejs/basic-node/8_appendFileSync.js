//  writeme.fxf 파일에 'Hello  ~nodejs 문자를 추가한 후 파일의 내력을 출력
//  파일의 내용을 출력
const  fs = require('fs');

fs.appendFileSync('writeme.txt', 'Hello~ nodejos~', (err) => console.log(err));

let data = fs.readFileSync('./writeme.txt');
console.log(data.toString());