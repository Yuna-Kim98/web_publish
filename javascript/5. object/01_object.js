// 자바스크립트에서의 object는 다양한 타입의 데이터(굉장히 광범위 함)들을 저장하고 관리하는 방식
// object literal : { property(key):value, property:value... } (-확장-> JSON)
// 동일한 데이터 타입이 반복되면 배열을 사용하지만 그렇지 않을 경우 object를 사용함
const obj = { //obj의 주소값 재할당 불가능
    name : "홍길동",
    age: 20
}

// 1. obj 데이터 출력
console.log(obj);
console.log(obj.name, typeof obj.name);
console.log(obj.age, typeof obj.age);

// 2. name을 '김철수'로 변경
obj.name = "김철수"
console.log(obj.name); 

// 3. age를 삭제
delete obj.age;
console.log(obj.age);

console.log(obj);