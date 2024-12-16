/**
 * SignUp2 폼 유효성 체크
**/
export const validateFormCheck = (refs, errors, setErrors) => {
    let result = true;
    if (refs.idRef.current.value === "") {
        setErrors({...errors, ["id"]: "아이디를 입력해주세요."});
        refs.idRef.current.focus();
        result = false;
    } else if (refs.pwdRef.current.value === "") {
        setErrors({...errors, ["pwd"]: "비밀번호를 입력해주세요."});
        refs.pwdRef.current.focus();
        result = false;
    } else if (refs.cpwdRef.current.value === "") {
        setErrors({...errors, ["cpwd"]: "비밀번호 확인을 입력해주세요."});
        refs.cpwdRef.current.focus();
        result = false;
    } else if (refs.nameRef.current.value === "") {
        setErrors({...errors, ["name"]: "이름을 입력해주세요."});
        refs.nameRef.current.focus();
        result = false;
    } else if (refs.phoneRef.current.value === "") {
        setErrors({...errors, ["phone"]: "전화번호를 입력해주세요."});
        refs.phoneRef.current.focus();
        result = false;
    } else if (refs.emailnameRef.current.value === "") {
        setErrors({...errors, ["emailname"]: "이메일 주소를 입력해주세요."});
        refs.emailnameRef.current.focus();
        result = false;
    } else if (refs.emaildomainRef.current.value === "default") {
        alert("이메일 도메인을 선택해주세요.");
        refs.emaildomainRef.current.focus();
        result = false;
    }
    return result;
}

/**
 * SignUp2 에러 메시지 체크
**/
export const errorCheck = (name, value, errors, setErrors) => {
    const names = [
        { "name": "id", "msg": "아이디를 입력해주세요." },
        { "name": "pwd", "msg": "비밀번호를 입력해주세요." },
        { "name": "cpwd", "msg": "비밀번호 확인을 입력해주세요." },
        { "name": "name", "msg": "이름을 입력해주세요." },
        { "name": "phone", "msg": "전화번호를 입력해주세요." },
        { "name": "emailname", "msg": "이메일 주소를 입력해주세요." }
    ];

    names.map((item) =>
        (name === item.name) ? (
            value === "" ? setErrors({...errors, [item.name]: item.msg}) : setErrors({...errors, [item.name]:""})
        ) : ""
    );
}