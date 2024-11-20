// Iterable Object - 순회 가능한 객체들을 의미 -> String, Array, Map, Set...
// for...of, Spread Operator(전개 구문), Destructring Object(구조 분해 할당) -> Iterable Object에서 사용 가능한 속성들
// Map : key, value를 한 쌍의 데이터로 저장함 -> key가 있기 때문에 따로 index가 없음 / set, get, has, keys, values, clear, entries...
// Set : value값만 가짐. 중복 없이 데이터를 하나씩만 넣어줄 수 있으며 순서는 상관 없음 / add, get, has, delete, keys(value와 동일), values, clear...

// 1. Spread Operator
function display(...params) {
    for(number of params) console.log(number);
}
display(1, 2);
display(1, 2, 3, 4);

const hong = {
    name : '홍길동',
    age : 20
};

const hongUpdate = {
    ...hong,
    address : '서울시 강남구'
};
console.log(hongUpdate);

// 2. Destructring Object(구조 분해 할당)
const getObject = () => {
    return { name : '공유', age : 30 };
}
const {name, age} = getObject();
console.log(name, age);

const getObject2 = () => {
    return [1, 2, 3];
}

const [n1, n2, n3] = getObject2();
// const n1 = 1;과 같음
console.log(n1, n2, n3);

// 3. forEach ->  인스턴스객체.forEach(콜백함수);로 호출
const numbers = [1, 2, 3];
numbers.forEach((item) => console.log(item));

const myMap = new Map();
myMap.set('name', '홍길동');
myMap.set('age', 20);
myMap.forEach((value, key) => console.log(key, value));

const mySet = new Set();
mySet.add('홍길동');
mySet.add('홍길동');
mySet.add('서현진');
console.log(mySet);
mySet.forEach((value, key) => console.log(key, value));
// key값이 없어 value값이 key값에도 동일하게 쓰임
