// Array built-in 객체의 method 익히기 => MDN 사이트 참조
let array1 = [1, 2, 3, 4, 5];
console.log(array1[0]); // array1.0(object literal 방식) -> 사용 불가
console.log(array1['0']);
console.log(`array1.length = ${array1.length}`);

let fruits = ['🍏', '🍋'];
console.log(fruits);
fruits[fruits.length] = '🍎'; // 배열에 빨간 사과 추가
console.log(fruits);

// 1. 배열 요소 추가 : push(item1 ... itemN);
fruits.push('🍊'); // 배열의 마지막에 하나 또는 여러 개의 데이터 추가
console.log(fruits);
fruits.push('🍏', '🍋', '🥝');
console.log(fruits);
let a = ['🍏', '🍋', '🍎']; // 배열 자체가 인덱스 마지막에 추가됨
fruits.push(a);
console.log(fruits);

// 2. fruits 배열의 전체 key값 반환 : Object.keys(인스턴스명);
// 배열의 key값은 인덴스 주소
let keyList = Object.keys(fruits);
console.log(keyList[2]);

// 3. 배열 마지막 요소 삭제
// 객체가 변경되어 원본에 영향을 주는 것을 deep copy(깊은 복사)라고 함
// 3-1. 배열 객체의 마지막 요소 삭제 - pop();
console.log(fruits);
let delItem = fruits.pop();
console.log(`delItem = ${delItem}`);
console.log(fruits);

// 3-2. 배열 객체의 처음 요소 삭제 - shift();
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);

// 3-3. 배열 특정 요소 삭제 - splice();
// 원본 배열 객체 : [ '🍋', '🍎', '🍊', '🍏', '🍋', '🥝' ]
fruits.splice(0, 1, '🍓'); // 0번 인덱스 요소(레몬)를 딸기로 교체
console.log(fruits);
fruits.splice(1, 3) // 1 ~ 3번지 요소 삭제
console.log(fruits);
fruits.splice(0, 0, '🍉') // 0번지 주소에 수박 추가
console.log(fruits);

// 3-4. 배열 객체의 특정 요소 추출 - slice(begin, end) -> begin부터 end 앞까지 추출(즉, end 미포함)
// 원본은 유지한 채 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성 -> shallow copy(얕은 복사)
// 즉, 원본에 영향을 주지 않음
let sfruits = fruits.slice(1, 3); // 원본 배열 객체([ '🍉', '🍓', '🍋', '🥝' ])에서 1, 2 인덱스의 요소 추출
console.log(sfruits);

// 3-5. 배열 합치기 - concat(배열);
console.clear();
let numList1 = [1, 2, 3];
let numList2 = [4, 5, 6];
console.log(numList1.concat(numList2));
console.log(numList2.concat(numList1));

// 3-6. 배열의 순서 바꾸기 - reverse();
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse());

// 3-7. 배열의 중첩 해제 - flat();
// 예시 : [1, 2, 3, [5, 6]] => [1, 2, 3, 5, 6]
let fnumbers = [1, 2, 3, [5, 6]];
console.log(fnumbers);
console.log(fnumbers.flat());
let fnumbers2 = [1, 2, 3, [5, 6, [7, 8]]];
console.log(fnumbers2);
console.log(fnumbers2.flat()); // 1 level 중첩 해체
console.log(fnumbers2.flat(2)); // 2 level 중첩 해체
// 내부에 만들어지는 객체가 너무 많아져 메모리 효율성이 떨어짐 -> 따로 함수를 정의해 실행하는 것이 좋음
// API나 외부에서 데이터를 받아와 사용할 때 중첩된 배열이 있을 경우 사용

// 3-8. 배열을 문자열로 만들어 반환 - join();
// split()과 같이 기억할 것
let textList = ['a', 'b', 'c'];
console.log(textList);
console.log(textList.join()); // => let text = 'a, b, c';
console.log(textList.join().split(',')); // => 다시 배열로 반환 ['a', 'b', 'c']
console.log(textList.join().split(',').join()); // => 다시 문자열로 반환