import { errorCheck } from "./errorCheck.js";

/** 
 * CgvLoginForm 유효성 체크 함수
 * @returns
**/

export const validateFormCheck = (param) => {
    // 컴포넌트가 아닌 함수이기 때문에 props 사용 불가
    let result = true;
    if (param.refs.idRef.current.value === "") {
        // alert("아이디를 입력해주세요.");
        param.setErrorMsg({...param.errorMsg, ["id"]: "아이디를 입력해주세요"});
        param.refs.idRef.current.focus();
        result = false;
    } else if (param.refs.pwdRef.current.value === "") {
        // alert("비밀번호를 입력해주세요.");
        param.setErrorMsg({...param.errorMsg, ["pwd"]: "비밀번호를 입력해주세요"});
        param.refs.pwdRef.current.focus();
        result = false;
    }
    return result;
}

/** 
 * CgvLoginForm 데이터 변경에 따른 유효성 체크 함수
**/
export const handelChangeCheck = (param) => {
    if (param.name === "id") {
        param.value === "" ? param.setErrorMsg({...param.errorMsg, ["id"]: "아이디를 입력해주세요."}) : param.setErrorMsg({...param.errorMsg, ["id"]: ""});
    } else if (param.name === "pwd") {
        param.value === "" ? param.setErrorMsg({...param.errorMsg, ["pwd"]: "비밀번호를 입력해주세요."}) : param.setErrorMsg({...param.errorMsg, ["pwd"]: ""});
    }
}

/** 
 * Login2 유효성 체크 함수
**/
export const validateLogin2 = (param) => {
    let result = true;
    // const로 선언하면 값이 고정되어 오류 발생. 반드시 let으로 변수 선언할 것!
    if (param.refs.idRef.current.value === '') {
        // alert("아이디를 입력해주세요.");
        param.setErrorMsg({...param.errorMsg, ["id"]: "아이디를 입력해주세요."});
        param.refs.idRef.current.focus();
        result = false;
    } else if (param.refs.pwdRef.current.value === '') {
        // alert("비밀번호를 입력해주세요.");
        param.setErrorMsg({...param.errorMsg, ["pwd"]: "비밀번호를 입력해주세요."});
        param.refs.pwdRef.current.focus();
        result = false;
    } 
    return result;
}

/** 
 * UserInfo 컴포넌트의 유효성 체크 함수
**/
export const validateUserInfo = (refs) => {
    let result = true;
    if (refs.nameRef.current.value == '') {
        alert("이름을 입력해주세요.");
        refs.nameRef.current.focus();
        result = false;
    } else if (refs.addRef.current.value === '') {
        alert("주소를 입력해주세요.");
        refs.addRef.current.focus();
        result = false;
    } else if (refs.ageRef.current.value === '') {
        alert("나이를 입력해주세요");
        refs.ageRef.current.focus();
        result = false;
    }
    return result;
}

/** 
 * SingUp 컴포넌트의 유효성 체크 함수
**/
export const validateSignUp = (refs, errors, setErrors) => {
    let result = true;
    if (refs.idRef.current.value === '') {
        setErrors({...errors, ["id"]:"아이디를 입력해주세요."});
        refs.idRef.current.focus();
        result = false;
    } else if (refs.pwdRef.current.value === '') {
        setErrors({...errors, ["pwd"]:"비밀번호를 입력해주세요."});
        refs.pwdRef.current.focus();
        result = false;
    } else if (refs.cpwdRef.current.value === '') {
        setErrors({...errors, ["cpwd"]:"비밀번호 확인을 입력해주세요"});
        refs.cpwdRef.current.focus();
        result = false;
    } else if (refs.nameRef.current.value === '') {
        setErrors({...errors, ["name"]:"이름을 입력해주세요"});
        refs.nameRef.current.focus();
        result = false;
    } else if (refs.phoneRef.current.value === '') {
        setErrors({...errors, ["phone"]:"전화번호를 입력해주세요"});
        refs.phoneRef.current.focus();
        result = false;
    } else if (refs.emailaddRef.current.value === '') {
        setErrors({...errors, ["emailadd"]:"이메일 주소를 입력해주세요"});
        refs.emailaddRef.current.focus();
        result = false;
    } else if (refs.emaildomainRef.current.value === 'default') {
        alert("도메인을 선택해주세요");
        refs.emaildomainRef.current.focus();
        result = false;
    }
    return result;
}


/** 
 * SingUp 컴포넌트의 아이디 중복 확인 체크 함수
**/
export const handleidCheck = (refs, idMsgRef, errors, setErrors, errorCheck) => {
        const id = refs.idRef.current;
        if (id.value === "") {
            errorCheck("id", id.value, errors, setErrors);
            id.focus();
        } else {
            const dId = "test";
            if (dId === id.value) {
                setErrors({...errors, ["id"]: "이미 사용 중인 아이디입니다."});
                id.focus();
                return false;
            } else {
                setErrors({...errors, ["id"]: "사용 가능한 아이디입니다."});
                idMsgRef.current.style.setProperty("color", "green");
                idMsgRef.current.style.setProperty("font-weight", "bold");
            }
        }
    }

/** 
 * SingUp3 컴포넌트의 유효성 체크 함수
**/
export const validateFormSignUp3 = (refs) => {
    const refsEntries = Object.entries(refs);
    console.log(refsEntries);
    const msgs = { 
        "idRef": "아이디", 
        "pwdRef":"비밀번호", 
        "nameRef":"이름", 
        "phone1Ref":"전화번호", 
        "phone2Ref":"전화번호", 
        "phone3Ref":"전화번호", 
        "addressRef":"주소", 
        "birth1Ref":"생일", 
        "birth2Ref":"생일", 
        "birth3Ref":"생일", 
        "jobRef":"직업", 
        "genderRef":"성별", 
        "emailRef":"이메일", 
        "introRef":"자기소개"
    };

    /** !!! Array.map() 또는 Array.forEach() 함수는 배열객체를 순회하는 것이 목적이므로
        if 체크 후 focus가 적용되지 않음!!! **/

    // 배열을 받아 반복하는 것이 아니기 때문에 for문 사용
    for (const item of refsEntries) {
        const name = item[0];
        const ref = item[1];
        if (ref && ref.current.value === "") {
            alert(`${msgs[name]}을/를 입력 또는 선택해주세요.`);
            ref.current.focus();
            return false;
        }
    }
    
    // if (refs.idRef.current.value === '') {
    //     alert("아이디를 입력해주세요.");
    //     refs.idRef.current.focus();
    //     checkResult = false;
    // } else if (refs.pwdRef.current.value === '') {
    //     alert("비밀번호를 입력해주세요.");
    //     refs.pwdRef.current.focus();
    //     checkResult = false;
    // } else if (refs.nameRef.current.value === '') {
    //     alert("이름을 입력해주세요.");
    //     refs.nameRef.current.focus();
    //     checkResult = false;
    // } else if (refs.phone1Ref.current.value === '') {
    //     alert("전화번호를 입력해주세요.");
    //     refs.phone1Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.phone2Ref.current.value === '') {
    //     alert("전화번호를 입력해주세요.");
    //     refs.phone2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.phone3Ref.current.value === '') {
    //     alert("전화번호를 입력해주세요.");
    //     refs.phone3Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.addressRef.current.value === '') {
    //     alert("주소를 입력해주세요.");
    //     refs.addressRef.current.focus();
    //     checkResult = false; 
    // } else if (refs.birth1Ref.current.value === '') {
    //     alert("생일을 입력해주세요.");
    //     refs.birth1Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth2Ref.current.value === '') {
    //     alert("생일을 입력해주세요.");
    //     refs.birth2Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.birth3Ref.current.value === '') {
    //     alert("생일을 입력해주세요.");
    //     refs.birth3Ref.current.focus();
    //     checkResult = false;
    // } else if (refs.jobRef.current.value === 'default') {
    //     alert("직업을 선택해주세요.");
    //     refs.jobRef.current.focus();
    //     checkResult = false;
    // } else if (refs.genderRef.current.value === '') {
    //     alert("성별을 선택해주세요.");
    //     refs.genderRef.current.focus();
    //     checkResult = false;
    // } else if (refs.emailRef.current.value === '') {
    //     alert("이메일을 입력해주세요.");
    //     refs.emailRef.current.focus();
    //     checkResult = false;
    // } else if (refs.introRef.current.value === '') {
    //     alert("자기소개 입력해주세요.");
    //     refs.introRef.current.focus();
    //     checkResult = false;
    // }
    // return checkResult
}

/** 
 * SingUp3 컴포넌트의 에러 체크 함수
**/
export const signup3ErrorCheck = (name, value, errors, setErrors) => {
    const names = [
        { "name": "id", "msg": "아이디를 입력해주세요." },
        { "name": "pwd", "msg": "비밀번호를 입력해주세요." },
        { "name": "name", "msg": "이름를 입력해주세요." },
        { "name": "phone1", "msg": "전화번호를 입력해주세요." },
        { "name": "phone2", "msg": "전화번호를 입력해주세요." },
        { "name": "phone3", "msg": "전화번호를 입력해주세요." },
        { "name": "address", "msg": "생일을 입력해주세요." },
        { "name": "birth1", "msg": "생일을 입력해주세요." },
        { "name": "birth2", "msg": "생일을 입력해주세요." },
        { "name": "birth3", "msg": "생일을 입력해주세요." },
        { "name": "job", "msg": "직업을 선택해주세요." },
        { "name": "gender", "msg": "성별을 입력해주세요." },
        { "name": "email", "msg": "이메일을 입력해주세요." },
        { "name": "intro", "msg": "자기소개를 입력해주세요." }
    ];

    names.map();
}