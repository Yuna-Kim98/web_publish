// filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter((item) => item.length > 6)); // []
// console.log(words.filter((item) => { return item.length > 6 })); // []
// 콜백함수에 {}를 추가하면 반드시 return 키워드를 붙여서 값을 반환해야 함

let numbers = [1, 2, 3, 4, 5, 6, 7];
// 5 이상 숫자 출력
let array = [];
// forEach 사용
numbers.forEach((x) => {
    if(x >= 5) array.push(x);
});
console.log(array);
// filter 사용
// let array2 = numbers.filter((x) => { return x >= 5 });
let array2 = numbers.filter((x) => x >= 5);
console.log(array2);

let numbers2  = [1.4, 2.5, 3.2, 4.7, 5, 6, 7];
// 3보다 큰 숫자만 출력
console.log(numbers2.filter((x) => x >= 3 ));

// numbers2의 모든 값을 반올림한 후, 3 이상의 값을 출력
console.log(numbers2.map((x) => Math.round(x)).filter((x) => x >= 3));
// console.log(numbers2.map(Math.round).filter((x) => x >= 3));

// 아이템을 검색하여 갯수를 반환
// filter() 사용
function searchItem(array, sItem) {
    return array.filter((item) => item === sItem).length;
}
// forEach() 사용
function searchItem2(array, sItem) {
    let count = 0;
    array.forEach((item) => {
        if(item === sItem) count++;
    })
    return count;
}

let fList = ['🍋', '🍓', '🍎', '🍊', '🍋'];
let nList = [1, 2, 4, 5, 7, 4, 6, 4, 33, 90];

console.log(`count => ${searchItem(fList, '🍋')}`); //2
console.log(`count => ${searchItem(nList, 4)}`); //3