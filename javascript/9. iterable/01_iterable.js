// iterable(이터러블) object - Iteration Protocol : 순회를 위한 규칙, 조약
// for...of, ...(Spread 연산자:전개구문), 구조분해할당(destruting object) -> ECMA6에서만 사용 가능
// String, Array, Map, Set ...

// 'Hello JavaScript~!!!'
const text = new String('Hello JavaScript~!!!');
for (let element of text) {
    console.log(`element = ${element}`);
}

// [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) console.log(`number = ${number}`);

// Number 클래스 생성 및 실행
const numberClass = new Number(12345);
// for(n of numberClass) console.log(n);
// TypeError: numberClass is not iterable
