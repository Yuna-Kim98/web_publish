// object : Array(배열: []). JSON({})...
let apple = null; 
apple = {
    //property: value,
    name: 'apple',
    color: 'red',
    display: '🍎'
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

// orange JSON 객체 생성 후 출력
let orange = {
    name: 'orange',
    color: 'orange',
    display: '🍊'
}
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);
//종류가 다른 데이터 여러 개를 생성할 때는 JSON을 사용

//1~5까지 출력 -> 데이터 종류가 같으므로 배열 사용. property가 없으므로 데이터값에 번지(0부터 시작)를 부여
let nuberList = [1, 2, 3, 4, 5];
console.log(nuberList);
console.log(nuberList[0]);
console.log(nuberList[5]); //데이터값이 없으므로 undefined로 출력
console.log(nuberList[4]);