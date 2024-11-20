// 에러 처리 : try ~ catch()
let numbers = [1, 2, 3]; // length : 3, index : 0 ~ 2
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); // java에서는 error가 뜨지만, JavaScript는 error가 뜨지 않고 undefined로 출력된다.

numbers[0] = 100;
console.log(numbers[0]);
// 자바스크립트에서는 엔진에서 동적으로 배열을 재생성한 후 값을 입력한다. -> 데이터가 유실되는 것을 막음
// 자바언어에서는 동적으로 배열을 재생성하지 않음 -> ArrayIndexOutOfBoundsException 예외상황이 발생함
numbers[9] = 900;
console.log(numbers[9]); 
console.log(numbers); // [ 100, 2, 3, <6 empty items>, 900 ]

// JavaScript error 발생 상황
// 문법적으로는 맞지만, number가 iterable 객체가 아니기 때문에 오류가 발생한다.
// 이때 try~catch 구문을 사용하면, 에러가 발생한 부분은 엔진에 넘어가면서 실행되지 않는다.
let number = 1234;
try {
    for(n of number)
        console.log(n);   
} catch (error) {
    console.log('에러는 엔진한테 넘김!');
}

console.log('-- 프로그램 종료 --');
