// ...(spread Operator, 전개구문)
// 모든 Iterable Object에서 사용 가능
// function 함수명(...param) -> parameter의 갯수를 정하지 않고 limit로 받을 때 사용
// [ ...iterable ] -> 배열에 요소를 제한 없이 받겠다는 뜻
// { ...iterable }

// 1. function 함수명(...param) -> 함수명에 적용하는 형식
function add(...numbers) { // => 배열 numbers[파라미터..] 
    let sum = 0;
    for(number of numbers) sum += parseInt(number); 
    return sum;
}

let sum = add(123, 456, 7, 8, 9, 432, '6');
console.log(`sum = ${sum}`);

// 2. [iterable]
let fruits = ['🍏', '🍋'];
let fruits2 = ['🍎', '🍓', '🍊'];
// fruit와 fruits2 사이에 파인애플('🍍') 추가
let fruits3 = fruits.concat('🍍', fruits2);
let fruits4 = [...fruits, '🍍', fruits2];
console.log(`fruits3 = ${fruits3}`);
console.log(`fruits4 = ${fruits4}`);

// 3. { ...iterable }
const hong = {
    name: '홍길동',
    age: 20,
    addrress: '서울시 강남구'
};

const hongUpdate = {
    ...hong, // 전개구문 호출
    job: '개발자'
};

console.log(hongUpdate);