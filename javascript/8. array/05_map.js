// 순회 method가 적용되는 map 함수는 파라미터 인자로 콜백함수를 입력받아 처리한 결과를 새로운 배열객체로 생성하여 반환한다.
// 전체 데이터에 모두 적용하는 경우에는 map(), 일부 데이터에만 사용해 결과를 받는 경우 filter() 사용

let numbers = [1, 2, 3, 4, 5];
let fnumbers = [1.001, 2.002, 3.03, 4.04, 5.05];

// numbers 배열 요소에 각각 10을 곱한 결과 출력
// react에서 많이 사용
let numbers2 = numbers.map((item) => item * 10);
console.log(`numbers = ${numbers2}`);

// fnumbers 배열 요소의 소수점을 절삭하여 출력
let fnumbers2 = fnumbers.map((item) => Math.floor(item));
// let fnumbers2 = fnumbers.map(Math.floor);
console.log(`fnumbers = ${fnumbers2}`);

// 배열의 요소로 Object literal 값이 있는 경우 
let objects = [
    { name : '홍길동', age : 20},
    { name : '김철수', age : 21},
    { name : '최영희', age : 22}
];

objects.forEach((obj, index) => {console.log(index, obj)}); /* callback 함수 형태 */
// [ {홍길동 : 홍길동, age: 20} ~~ ]
let objects2 = objects.map((obj) => { // obj ==> { name : '홍길동', age : 20 }
    let resultObj = {};
    resultObj[obj.name] = obj.value; // key
    resultObj[obj.name] = 'name'; // value
    resultObj[obj.age] = obj.value;
    resultObj[obj.age] = 'age';
    return resultObj;
});
console.log(objects2);

// 홍길동, 최영희 이름을 가진 학생 정보만 배열 출력
let objects3 = objects.map((obj) => {
    let rObj = {};
    if(obj.name === '홍길동') {
        rObj = obj;
    } else if(obj.name === '최영희') {
        rObj = obj;
    }
    return rObj;
});

console.log(objects3);