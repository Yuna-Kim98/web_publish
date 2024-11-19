// 구조 분해 할당(destructure)
let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let [a, b, ...nlist] = numbers; // 구조 분해를 통해 a, b 변수와 nlist 배열 생성
/*
    배열을 구조분해 하기 때문에 같은 형식(이 경우 배열)로 감싸주어야 함
    let a = numbers[0]; 를 요약해서 사용하는 것과 같다
*/
console.log(aa); // shallow copy
console.log(a); // 구조 분해 할당으로 만들어져 a라는 변수에 1을 값으로 넣어줌
console.log(b); 
console.log(nlist); 

let hong = {
    name: '홍길동',
    age: 20,
    address: '서울시 강남구'
};
// hong이라는 사람의 정보를 각각의 변수로 정의
let {name, age, address} = hong;
/*
    구조분해할당으로 정의되는 변수는 객체의 속성(property, key)과 동일한 이름으로 정의되어야 함
    let name = hong.name;
    let age = hong.age;
    let address = hong.address;
 */
console.log(name);
console.log(age);
console.log(address);

// 함수의 반환값을 받아 구조 분해 할당(destructure) 방식으로 정의
function createEmoji() {
    return {
        fname: 'apple',
        color: 'red',
        emoji: '🍎'
    };
}

let {color, emoji, fname, price = 1000} = createEmoji();
// 구조 분해 변수의 순서는 상관 x


// 배열일 경우, 인덱스 번호가 정해져 있으므로 그때는 순서도 정확히 맞춰주어야 한다.
console.log(fname, color, emoji, price);
// 구조 분해 할당시 새로운 데이터를 추가할 수 있으며, 반드시 초기화를 해주어야 함

let flist = ['🍎', '🍊', '🍋'];
let [apple, orage, lemon] = flist;
console.log(apple, orage, lemon);