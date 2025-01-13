const url = require('url');
const { URL } = url; // 구조분해할당 
const myURL = new URL('https://www.google.com/search?q=github&oq=github&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyBggBEEUYPDIQCAIQLhjHARixAxjRAxiABDIKCAMQABixAxiABDIGCAQQRRhBMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjkwMGowajeoAgiwAgE&sourceid=chrome&ie=UTF-8');

// console.log('url ==> ', url);
console.log('URL ==> ', URL);
console.log('myURL', myURL);
console.log('url.format', url.format(myURL));