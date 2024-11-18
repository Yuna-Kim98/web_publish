// 배열의 데이터 출력
// for, forEach -> 배열 전용
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
}
// 어디에서든 반복해서 사용 가능

// forEach => 순회(iterable) method 지원
numbers.forEach((element, i) => console.log(`numbers = ${i} = ${element}`)); 

// replace3 함수를 forEach 형태로 생성(shallow copy)
function replace3(array, origin, target) {
    let arrayObj = Array.from(array);
    arrayObj.forEach((element, index) => {
        // if(element === origin) arrayObj[index] = target;
        if(element === origin) arrayObj.splice(index, 1, target);
    });
    return arrayObj;
}
let fruits = ['🍎', '🍋', '🍎'];
let result = replace3(fruits, '🍎', '🍋');
console.log(result);