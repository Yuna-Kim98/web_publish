// Map 클래스 생성
const fList = new Map([[ 1, 'one' ],[ 2, 'two' ]]); // 내부적으로 구조 분해 할당 실행
// 하나의 Array 혹은 키-값 쌍인 요소를 가진 반복 가능 객체. (예를 들어 [[ 1, 'one' ],[ 2, 'two' ]]과 같이 2개의 요소를 가진 배열). 각각의 키-값 쌍은 새로운 Map에 추가됩니다.

console.log(fList);
console.log(fList.get(1));
console.log(fList.get(2));

// 사이즈 확인
console.log(`size => ${fList.size}`);

// 데이터 추가
fList.set(3, 'three');
// fList.set([[4, 'four'], [5, 'five']]); // 배열 자체를 key값으로 받음. set은 key, value
// [ [ 4, 'four' ], [ 5, 'five' ] ] => undefined -> 즉, set()는 구조 분해 할당 불가능 
console.log(fList);

// 데이터 확인
if(fList.has(3)) console.log(fList.get(3));

// console.log(fList.has(3));
// console.log(fList.has(5));

// 모든 키값 출력
console.log(fList.keys());

// 모든 value 출력
console.log(fList.values());

// key, value를 입력된 순서대로 배열 형태 전환
let iteratocOjb = fList.entries();
console.log(iteratocOjb);
console.log(iteratocOjb.next().value)

// 순회 : forEach 
// 구문 : Map.forEach(key, value, map);
fList.forEach((element) => console.log(element)); // value값만 출력
fList.forEach((value, key) => console.log(value, key)); // value 먼저 출력
// Map에서의 forEach는 무조건 value값이 먼저 출력

// 순회 : for...of
for(let element of fList) console.log(element); // entries();와 동일한 형태로 return 

// key만 출력 : 1...
for(let key of fList.keys()) console.log(`key => ${key}`);
// console.log(fList.keys()); => [Map Iterator] { 1, 2, 3 }

// value만 출력 : one...
for(let value of fList.values()) console.log(`value => ${value}`);

// entries 출력 : 1, one...
for(let entry of fList.entries()) console.log(`entry => ${entry}`);
// for(let entry of fList.entries()) console.log(`entry => ${entry.value()}`); // 외부 접근 불가능
for(let entry of fList.entries()) console.log(typeof entry, `entry => ${entry}`); // object entry => 1,one...

// 데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList);

// 전체 삭제
fList.clear();
console.log(fList);