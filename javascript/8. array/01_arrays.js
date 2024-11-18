/*
 ** Data type
    1. Primitive DataType : 기본 데이터 타입 -> call stack(V.E(variable environment) 영역에 저장)
        - string, number, boolean
        - ex) 100, '홍길동', "홍길동", true...
        - ex) let number = 100;
    2. Reference DataType : 참조 데이터 타입 -> heap memory에 저장
        - object literal({}), class, array([])...
        - ex) let obj = {name : '홍길동', ...}
              let arr = [1, 2, 3 ...]
              let arrObj = [{..}, {..}, {..}] -> object literal 데이터들을 배열로 저장할 수 있음

 ** Array(배열) **
    개념 : 동일한 데이터타입의 요소를 여러 개 저장하는 공간
           인덱스 주소를 통해 요소를 저장하고 관리함. 인덱스 주소는 항상 0부터 시작
    배열 정의 방법
        1. let array1 = new Array(크기); -> class 생성자 함수 사용, 크기 정의. 크기에서 정한 수만큼 배열 안에 공간이 생성됨
        2. let array2 = [1, 2, 3, 4]; -> 크기와 요소의 초기화
           let array3 = ['1', '2', '3', '4'];
           let array4 = [{name : '홍길동'}, {name : '김철수'}, ...];
           let obj1 = {key:value, key:value ...}
           let obj2 = {key:value, key:value ...}
           let array5 = [obj1, obj2]
    배열 정의 주의 사항
        1. 배열의 생성은 값이 정해져 있을 때 []로 생성하는 것이 효율적이고 값이 정해져 있지 않을 때는 new를 이용하여 생성하는 것이 효율적
        2. CRUD 작업은 Array의 method를 사용하는 것을 권장
        3. for문의 구문을 사용하여 데이터를 가져옴
        4. 배열의 인덱스는 전체 크기보다 1 작음(0부터 시작하기 때문에)
*/

// 배열 생성
let array1 = new Array(2);
console.log(array1.length); // 크기만 할당
console.log(array1[0]); // undefined로 초기화
console.log(typeof array1); // object

let array2 = new Array(1, 2, 3); // 크기 할당 및 데이터 초기화
// let array2 = new Array([1, 2, 3])과 동일
console.log(array2[0]);

let array3 = ['🍎', '🍊', '🍋', '🍏'];
console.log(array3[array3.length - 1]); // 배열의 마지막 요소 출력

let obj1 = { name : '홍길동', age: 20 };
let obj2 = { name : '김철수', age: 21 };
let objList = [obj1, obj2];
console.log(objList[0]);
console.log(objList[0].name); // 홍길동 출력
console.log(objList[1].name); // 김철수 출력
