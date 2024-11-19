// key, value를 한쌍으로 가지는 클래스
// set(key, value) : 데이터 추가
// get(key) : 데이터 출력
// has(key) : 데이터 존재 여부 확인 true, false로 return -> key값이 있어야 삭제할 수 있기 때문에 확인할 때 주로 사용
// delete(key) : 데이터 삭제
// Map은 iterable object이므로 for...of, spread, destucture 사용 가능

let fruitMap = new Map();

fruitMap.set('apple', '🍎');
fruitMap.set('apple', '🍎'); // apple은 하나만 저장됨. 즉, key값이 동일하면 마지막에 작성된 값 하나만 저장된다.
fruitMap.set('orange', '🍊');
console.log(fruitMap);

console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

console.log(fruitMap.has('orange')); // true
console.log(fruitMap.has('lemon')); // false

if(fruitMap.has('orange')) fruitMap.delete('orange');
console.log(fruitMap);