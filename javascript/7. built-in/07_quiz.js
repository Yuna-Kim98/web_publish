// 1. 'Hello~ JavaScript!!!' 문자열을 한 문자씩 출력해주세요
let str = 'Hello~ JavaScript!!!';
for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// 2. '독서, 수영, 영화, 게임, 사이클' 배열을 하나씩 출력
let hobbys = '독서, 수영, 영화, 게임, 사이클';
// 방법 1
hobbys = hobbys.split(',');
console.log(hobbys);
for(let i = 0; i < hobbys.length; i++) {
    console.log(hobbys[i].trim());
}
// 방법 2
hobbys.forEach((hobby) => console.log(hobby.trim()));