// 로그인 체크를 위한 클래스 정의
class User {
    #id;
    #pass;
    constructor(id, pass) {
        this.#id = id;
        this.#pass = pass;
    }
    get id() { return this.#id; }
    get pass() { return this.#pass; }

    set id(id) { this.#id = id; }
    set pass(pass) { this.#pass = pass; }
}

/**
 * 로그인 버튼 클릭시 호출하는 함수
**/
// 함수를 생성할 때는 최소한의 기능만 할 수 있도록 하는 것이 좋음.
// 다수의 기능을 넣어놓을 경우 하나의 기능 처리가 끝나도 다른 기능들의 처리를 위해 call stack에서 해당 함수가 계속 실행되고 있기 때문.
let user = null; //전역변수 선언
const DID = "test";
const DPASS = "1234";
function loginCheck() {
    let id = document.querySelector("#id"); // id값이 입력되는 폼 객체 호출
    let pass = document.querySelector("#pass");
    
    // 유효성 체크
    if(id.value === "") {
        alert("아이디를 입력해주세요");
        id.focus();
    } else if(pass.value === "") {
        alert("비밀번호를 입력해주세요");
        pass.focus();
    } else {
        // id, pass ==> User 클래스 객체 생성, 처리작업
        // :: 각각 처리하는 것보다 클래스 객체를 생성해서 처리하는 것이 효율적이고 private로 접근 제어가 가능해 보안성도 높음
        user = new User(id.value, pass.value); // 지역변수
        
        // DID, DPASS와 id, pass가 각각 일치하는지 체크
        if(DID === user.id && DPASS === user.pass) alert("로그인 성공");
        else alert("로그인 실패");
    }
}

// const hong = new User('hong1234', '1234');
// console.log(`id : ${hong.id}\npass : ${hong.pass}`);
// hong.id = 'hong12';
// hong.pass = '3456';
// console.log(`id : ${hong.id}\npass : ${hong.pass}`);