// text 배열을 입력 받아, 텍스트의 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환해주세요.
const textFilter = (object) => {
    // let result = object.filter((text) => text.length >= 3);
    // return result;
    return object.filter((text) => text.length >= 3);
}

function textFillter2(object) {
    return object.filter((text) => text.length >= 3);
}

// const textFilter2() {}
let textArray = ['nodeJS', 'javascript', 're', 'ja'];
let result = textFilter(textArray);
let result2 = textFillter2(textArray);
console.log(result);
console.log(result2);

// 2. 숫자 배열을 입력 받아 짝수만 필터링하여 출력하는 함수 생성해주세요.
// 출력되는 값들은 배열 객체에 담아 반환해주세요.
const evenNumber = (array) => {
    return array.filter((number) => !(number % 2)); // (number % 2)의 값은 0으로 false가 되어 홀수가 출력된다. 때문에 부정 연산자를 사용하여 짝수만 출력되도록 한다.
}

const oddNumber = (array) => {
    return array.filter((number) => number % 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(evenNumber(numbers));
console.log(oddNumber(numbers));

// 3. 사원의 아이디를 받아서 7자리 번호를 랜덤하게 생성하여 아이디와 번호를 조합하여 사번을 생성해주세요.
// 사원의 아이디는 배열 객체로 입력 받고, 출력도 새로 배열 형태로 출력해주세요.
const createEmployeeNumber = (array) => {
    // return array.map((id) => { // map에서 return -> 실행된 함수로 return됨
    //     let number = Math.floor(Math.random() * 10000000);
    //     return id.concat('_', number); // 블럭 내에서 return -> parameter의 배열 값으로 return
    // });

    // 중복된 데이터 처리
    let array2 = new Set(array);
    // console.log(Array.from(array2)); // Set을 배열로 변환 후 출력

    return Array.from(array2).map((id) => id.concat('_', Math.floor(Math.random() * 10000000)));
}
// !!!블럭({})에는 반드시 return이 들어가야 함!!! 

const employeeIds = ['hong', 'test', 'abcd', 'test1234', 'hong', 'test'];
const employeeNumbers = createEmployeeNumber(employeeIds);
console.log(employeeIds);
console.log(employeeNumbers);