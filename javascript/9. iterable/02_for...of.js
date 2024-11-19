// iterabla object의 요소를 순회하여 출력함
// 형식 : for(variable of iterabla_object) { 실행문(statement); }

// 1. 배열의 요소를 교체하는 함수를 정의 : for...of 사용
function replace(array, origin, target) {
    let resultArray = Array.from(array); // shallow copy
    let index = 0;
    for(element of resultArray) {
        if(element === origin) {
            //splice(인덱스, 1, 교체할 요소)
            resultArray.splice(index, 1, target);
        }
    index ++;
    }
    return resultArray;
}
// 포함 관계 신경쓸 것 {}

// 2. 기본 for문 사용
function replace2(array, origin, target) {
    let resultArray = Array.from(array);
    for (let i = 0; i < array.length; i++) {
        let element = resultArray[i];
        if(element === origin) {
            // resultArray[i] = target;
            resultArray.splice(i, 1, target);
        }
    }
}
// 3. forEach 사용
function replace3(array, origin, target) {
    let resultArray = Array.from(array);
    resultArray.forEach((element, index) => {
        if(element === origin) resultArray.splice(index, 1, target);
    });
}

// 4. map() 사용

// 5. filter() 사용


let fruits = ['🍊', '🍎', '🍓', '🍎', '🍋', '🍎'];
let result = replace(fruits, '🍎', '🍏');
let result2 = replace(fruits, '🍎', '🍏');
let result3 = replace(fruits, '🍎', '🍏');

console.log(`result = ${result}`);
console.log(`result2 = ${result2}`);
console.log(`result3 = ${result3}`);

let numbers = [1, 2, 3, 4, 2, 2, 5, 2];
let result4 = replace(numbers, 2, 7);
console.log(`result4 = ${result4}`);