// 1. 배열의 사과('🍎') 요소를 딸기('🍓')로 교체해 주세요.
let fruits = ['🍎', '🍋', '🍎'];
// output = ['🍓', '🍋', '🍓']

// 1. for문의 index 주소 활용
for (let i = 0;  i < fruits.length; i++) {
    if(fruits[i] === '🍎') fruits[i] = '🍓';
    console.log(fruits[i]);
}
// for문을 실행할 때만 사용 가능. 외부에서 사용 불가

// 1-2. 함수 : 파라미터(배열 객체, old, new)
// 교체한 값을 콘솔창에 출력
function replace(array, oldValue, newValue) {
    let result = '';
    for (let i = 0;  i < array.length; i++) {
        if(array[i] === oldValue) array[i] = newValue;
        result += `${array[i]}`;
    }
    console.log(result);
}

replace(fruits, '🍎', '🍓');
let numbers = [1, 2, 3, 1, 2, 1, 5];
replace(numbers, 1, 9);

// 1-3. 함수 : 파라미터(배열 객체, old, new)
// 배열 타입으로 객체를 반환
function replace2(array, oldValue, newValue) {
    let resultArray = Array.from(array);
    for (let i = 0;  i < resultArray.length; i++) {
        if(resultArray[i] === oldValue) resultArray[i] = newValue;
    }
    return resultArray;
}
let names = ['hong', 'kim', 'park', 'hong'];
let resultObj = replace2(names, 'hong', 'gong');
console.log(resultObj);
// 함수로 객체를 받아 사용하게 되면 객체에 있는 인덱스를 그대로 사용하는 것이 아니라 카피본을 만들어 사용하는 것을 권장한다(원본 유지). -> Array.from(); (shallow copy)