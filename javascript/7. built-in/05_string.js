// String class의 method 정리
let name = '홍길동';
let sname = new String('홍길동');
console.log(typeof name, typeof sname);
console.log(name === sname);
console.log(name === sname.valueOf());

let text = 'Hello JavaScript~!' // 자동으로 텍스트를 한 글자씩 배열에 저장
console.log(text.charAt(0));
console.log(text.charAt(3));
console.log(text[0]);
console.log('Welcome~ '.concat(text)); // 텍스트 추가. concat으로 연결함
console.log(text.indexOf('H')); // 원하는 문자열 찾기(인덱스에는 빈 공간도 포함)
console.log(text.indexOf('a')); // 같은 글자가 여러 개 있는 경우, 첫 글자를 return함
console.log(text.toUpperCase()); // 문자 전부 대문자로 출력
console.log(text.toLowerCase()); // 문자 전부 소문자로 출력 
// 입력폼 -->           --> DB 저장시 소문자/대문자로 저장
// 즉, 사용자들은 대소문자 구별 없이 자유롭게 입력하도록 하고, 함수를 사용하여 형식을 변경해 DB에 저장되도록 함

// 문자열 추출
console.log(text.substring(0, 2)); // 문자열 배열에 있는 인덱스 n번(start)부터 m-1번(end)까지 추출
console.log(text.substring(4, 8)); 
console.log(text.slice(0, 2)); 
console.log(text.slice(4)); // 앞자리 n+1번부터 끝까지 추출 
console.log(text.slice(-3)); // 뒷자리 n번부터 끝까지 추출 

// 문자열 공백 삭제
text = '        JavaScript!      ';
console.log(text.trim());
text = '        Java    Script!      ';
console.log(text.trim()); // 문자 사이의 공백은 문자로 인식되어 삭제되지 않음

// 구분자를 이용하여 문자열을 추출
const fruit = '🍎, 🍊, 🍏, 🍋'; // 문자열
const fruitArray = fruit.split(','); // 배열
console.log(fruit);
console.log(fruitArray);
console.log(fruitArray[0]);