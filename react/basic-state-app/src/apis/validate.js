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