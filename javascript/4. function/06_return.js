// 함수의 실행결과 반환 키워드 :: return
function add(a, b) {
    // console.log(parseInt(a) + parseInt(b));
    return (parseInt(a) + parseInt(b)); //  ! return 중요 !로직을 다 처리한 후 결과값을 return하는 형태로, 반드시 함수의 끝에 있어야 함.
}
// 함수의 결과값을 함수 안에서 찍게 되면 외부에서 사용할 수 없으무로 외부에서 호출해서 사용할 수 있도록 함
let result = add(1, 2); // return 값을 변수 선언해야 계속해서 사용할 수 있음
console.log(`result = ${result}`);

// 이름, 나이를 매개변수로 입력하여 객체(object)를 생성한 후 반환하는 함수를 정의해주세요.
function createObject(name, age) { // function은 어떤 위치에 작성해도 된다. 
    // 객체 생성
    let obj = {
        name: name, // 호출명: 값
        age: age //샐행 후 삭제됨
    };
    return obj; // obj 주소값 반환 -> 호출한 곳으로 / 여기까지 오면 함수는 종료됨. 그렇기 때문에 변수 선언을 통해 외부에 저장하여 사용.
}

// createObject("홍길동", 30); object가 들어오긴 했으나 저장되지 않아 결과값 출력x
let resultObj = createObject("홍길동", 30); // 변수 선언을 통해 객체를 저장, 출력할 수 있도록 함
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

// 두 수를 입력 받아 곱한 값을 반환하는 함수 구성
// 두 수는 0보다 커야 함
console.clear();
function multi(a, b) {
    let result = 0; //초기화
    if ((a > 0) && (b > 0)) {
        result = a * b;
    } else {
        result = "a와 b는 0보다 커야합니다.";
    }
    return result;
}

let result2 = multi(10, 2); // 지역변수를 전역변수로 확장(값의 확장)
console.log(result2);

/*
// 파일 구조
6_return.js
{
    //전역 변수(Global variable)
    let a = undefined;
    let obj = null;
    const START_COUNG = 0; // 상수는 보통 전역으로 선언. 파일 전체에 사용되는 것은 전역에 선언하며 파일의 가장 위에 선언한다.

    function aa {
        // 기능을 구현하는 작업 진행
        // 변수 선언시 반드시 초기화
        // 지역 변수(local variable)
        let result = 0; // 초기화 - 지역 변수는 값을 바로 할당 받아서 진행하기 때문에 초기값을 지정해 초기화
    }
}
*/

// 파일을 실행하면 함수는 heap에 저장하고, 함수를 호출할 경우 그 값을 가져와 call stack에서 실행한다.