// Set 클래스
// 다양한 데이터(원시데이터(primitive), 객체참조값(reference)) 저장
// 데이터 추가 : add(value) -> 구조 분해 할당 불가능. key값 없음.
// 데이터 확인 : has(value)
/* 
    데이터 전처리 : 정제되지 않은 데이터를 받아 정제하는 작업. 
    예를 들어 중복이 있는 데이터들을 받았을 때 이 중복된 데이터들을 Set에 추가한 후, for...of를 사용해 배열로 다시 꺼내 쓰는 식으로 거를 수 있다.
 */

let mySet = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add({age : 20});
mySet.add([1, 2, 3, 4]);
console.log(mySet);

// 데이터 순회 for...of, forEach
for(let value of mySet) {
    console.log(`value => ${value}`);
}

mySet.forEach((value, key, set) => { // key = value
    console.log(value, key, set);
});

// 데이터 확인
console.log(mySet.has(10)); //true
console.log(mySet.has(100)); // false

// 데이터 삭제
if(mySet.has(10)) {
    mySet.delete(10)
    console.log('삭제 완료!');
}
else console.log('데이터가 존재하지 않음.');

console.log(mySet); // Set(3) { '홍길동', { age: 20 }, [ 1, 2, 3, 4 ] }

// 전체 삭제
mySet.clear();
console.log(mySet);