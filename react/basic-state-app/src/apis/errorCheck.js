/** 
 * SingUp 컴포넌트의 error 체크 함수
**/
export const errorCheck = (name, value, errors, setErrors) => {
    const names = [
        { "name": "id", "msg": "아이디를 입력해주세요." },
        { "name": "pwd", "msg": "비밀번호를 입력해주세요." },
        { "name": "cpwd", "msg": "비밀번호 확인을 입력해주세요." },
        { "name": "name", "msg": "이름을 입력해주세요." },
        { "name": "phone", "msg": "전화번호를 입력해주세요." },
        { "name": "emailadd", "msg": "이메일 주소를 입력해주세요." }
    ];

    names.map((item) => 
        (item.name === name) ? (
            (value === '') ? setErrors({...errors, [item.name]:item.msg}) : setErrors({...errors, [item.name]: ""})
        ) : ""
    );

    // if (name === "id") {
    //     value === "" ? setErrors({...errors, ["id"]:"아이디를 입력해주세요."}) : setErrors({...errors, ["id"]: ""});
    // } else if (name === "pwd") {
    //     value === "" ? setErrors({...errors, ["pwd"]:"비밀번호를 입력해주세요."}) : setErrors({...errors, ["pwd"]: ""});
    // } else if (name === "cpwd") {
    //     value === "" ? setErrors({...errors, ["cpwd"]:"비밀번호 확인을 입력해주세요."}) : setErrors({...errors, ["cpwd"]: ""});
    // } else if (name === "name") {
    //     value === "" ? setErrors({...errors, ["name"]:"이름을 입력해주세요."}) : setErrors({...errors, ["name"]: ""});
    // } else if (name === "phone") {
    //     value === "" ? setErrors({...errors, ["phone"]:"전화번호를 입력해주세요."}) : setErrors({...errors, ["phone"]: ""});
    // } else if (name === "emailadd") {
    //     value === "" ? setErrors({...errors, ["emailadd"]:"이메일 주소를 입력해주세요."}) : setErrors({...errors, ["emailadd"]: ""});
    // } 
}