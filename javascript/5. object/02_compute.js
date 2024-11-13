// 오브젝트를 관리하고 처리하는 기능
const person  = {
    name: "홍길동", 
    age: 20,
    job: "개발자"
}
const fruit  = {
    name: "사과",
    emoji: "🍎"
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.job)

/*
 * CRUD - person 객체를 CRUD로 관리하는 함수를 정의
 * C(create), R(read), U(update), D(delete)
 * setValue(), getdValue(), udpapteValue(), deleteValue()
 */

// function setValue(object, newKey, Value) {
//     object[newKey] = Value;
// }
const setValue = (object, newKey, Value) => object[newKey] = Value;

// function getValue(object, key) {
//     return object[key];
// }
const getValue = (object, key) => object[key];

// function updateValue(object, key, newValue) {
//     object[key] = newValue;
// }
const updateValue = (object, key, newValue) => object[key] = newValue;

// function deleteValue(object, key) {
//     delete object[key];
// }
const deleteValue = (object, key) => delete object[key];

setValue(person, "address", "서울시"); // 값을 입력할 때 사용. 자바스크립트에서는 key값에 따옴표 사용
setValue(fruit, "color", "Red");
console.log(person);
console.log(fruit);

console.log(getValue(person, "name"));
console.log(getValue(fruit, "color"));

updateValue(person, "name", "김철수");
updateValue(fruit, "color", "Green");
console.log(person);
console.log(fruit);

deleteValue(person, "age");
deleteValue(fruit, "name");
console.log(person);
console.log(fruit);