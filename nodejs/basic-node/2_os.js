// require 내장 객체는 Node.js에서 제공하는 내장 모듈을 호출할 때 사용한다. 자바스크립트의 import와 같은 역할을 한다.
const os = require('os');

// os 객체를 통해 현재 사용하고 있는 pc(node가 설치된 pc) 정보 확인 및 호출
console.log(os.type()); // 현재 사용하고 있는 os type 정보 호출
console.log(os.hostname()); // 현재 사용하고 있는 PC의 host name 정보 호출
console.log(os.homedir()); // 현재 사용하고 있는 home directory 정보 호출
// console.log(os.cpus());
console.log(os.cpus().length); // 4
console.log(os.freemem()); // 메모리 정보
console.log(os.totalmem()); 