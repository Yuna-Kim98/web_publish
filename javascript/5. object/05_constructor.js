// constructor: 객체 생성자 함수
// 공통점이 있는 객체들을 하나의 객체로 생성(modeling)
// 객체 생성자 함수는 함수명이 대문자로 시작하고 field와 method를 구분해 진행한다.
// 호출할 때 객체를 새로 생성하기 때문에 반드시 함수명 앞에 new 키워드를 붙임
function Fruit(name, color, emoji) {
    //field
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    // call stack의 변수가 아닌 현재 객체로 값이 넘어가도록 this 키워드 사용

    // method, arrow function
    this.display = () => console.log(this.emoji);
}

// 객체 생성자 함수 호출
const apple = new Fruit("apple", "red", "🍎"); // call stack 변수. heap 생성된 객체 주소를 가져와 call stack에서 호출, 출력함
const orange = new Fruit("orange", "orange", "🍊");
const lemon = new Fruit("lemon", "yellow", "🍋");
console.log(apple);
console.log(orange);
console.log(lemon);

/*
apple : property - name, color / method - display(emoji)
const apple = {
    name: "apple",
    color: "red",
    display: function () { console.log("🍎"); }
}

orange : property - name, color / method - display(emoji)
const orange = {
    name: "orange",
    color: "orange",
    display: function () { console.log("🍊"); }
}

lemon : property - name, color / method - display(emoji)
const lemon = {
    name: "lemon",
    color: "yellow",
    display: function () { console.log("🍋"); }
}
*/