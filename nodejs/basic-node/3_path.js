// path 내장 모듈
const path = require('path');
const string = __filename; // 현재 실행 중인 파일의 경로

console.log(path.sep); // 구분 기호 - \
console.log(string); // 현재 실행 중인 파일 경로 출력
console.log(path.dirname(string)); // 현재 실행 중인 파일 경로에서 파일 이름까지만 출력
console.log(path.extname(string)); // 현재 실행 중인 파일의 확장자 출력
console.log(path.basename(string)); // 현재 실행 중인 파일의 파일명+확장자 출력
console.log(path.basename(string, path.extname(string))); // 현재 실행 중인 파일의 파일명만 출력
console.log(path.dirname(string), path.join('/images')); // 현재 실행 중인 파일 경로에 경로 추가 :: C:\dev\web_publish\nodejs\basic-node \images