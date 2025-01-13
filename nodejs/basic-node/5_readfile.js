// readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습
const fs = require('fs');
const fsp = require('fs').promises; //프로미스 타입은 then, catch를 통해 데이터를 불러와야 한다.

// console.log(fs);
// fs.readFile('파일의 경로', function() {} 콜백함수);
fs.readFile('./readme.txt', (err, text) => { /* 파일을 읽은 후 실행 함수 :: 콜백함수 */
    if (err) { 
        console.log('!파일 읽기 실패!'); 
    } else {
        console.log(text);
        console.log(text.toString());
    }
});

// 프로미스 타입으로 리턴
fsp.readFile('./readme.txt')
    .then((data) => {
        console.log('fsp -->', data.toString());
    })
    .catch((err) => {
        console.log(err);
    });
