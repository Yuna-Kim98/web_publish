// 중복된 배열을 입력 받아 중복을 제거한 후 출력(정의)
let numbers = [1, 2, 3, 4, 1, 2, 1, 2, 3, 3, 5, 6, 7, 8, 9];
let nSet = new Set(numbers); // iterable object만 들어갈 수 있다(String, Array, Map, Set)
console.log(numbers.length, numbers);
console.log(nSet.size, nSet); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 } -> 중복된 데이터 걸러짐

// 중복된 배열을 입력 받아 중복을 제거하는 함수 생성 후 출력(정의)
function fillter(iterable) {
    return new Set(iterable);
}

let numObj = [1, 2, 3, 4, 1, 2, 1, 2, 3, 3, 5, 6, 7, 8, 9];
let names = ['홍길동', '최영희', '최철수', '홍길동'];
let resultObj = fillter(numObj);
let resultObj2 = fillter(names)
console.log(resultObj);
console.log(resultObj2);

// 사원의 이름을 입력 받아, 사번을 생성하고 각각의 변수로 반환(구조분해할당)하는 함수 작성
function createEmployeeNumber(array) {
    // 배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환될 때는 map();을 사용하는 것이 효율적
    return array.map((ename) => 
        ename.concat('_', Math.floor(Math.random() * 10000000))
        // 블럭({})으로 묶은 상태에서 실행한 경우 반드시 return
    );
}

let employeeNames = ['smith', 'kelly'];
let [smith, kelly] = createEmployeeNumber(employeeNames); // ['smith_123456', 'kelly_678905'] 숫자는 랜덤
// console.log(`result => ${result}`);
console.log(`smith => ${smith}`);
console.log(`kelly => ${kelly}`);