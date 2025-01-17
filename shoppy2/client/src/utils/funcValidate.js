/*************************
 * 로그인 폼 유효성 체크
**************************/
export const validate = (refs, errMsg, setErrMsg) => {
    let result = true;
    if (refs.idRef.current.value === '') {
        // alert('아이디를 입력해주세요.');
        setErrMsg({...errMsg, ['id']: '아이디를 입력해주세요.'});
        refs.idRef.current.focus();
        result = false;
    } else if (refs.pwdRef.current.value === '') {
        // alert('비밀번호를 입력해주세요.');
        setErrMsg({...errMsg, ['pwd']: '비밀번호를 입력해주세요.'});
        refs.pwdRef.current.focus();
        result = false;
    }
    return result;
}


/*****************************
 *  title : 회원가입 폼 체크
******************************/
// Object.entries() : 자바스크립트 객체를 배열로 변환해주는 메소드
// {key:value} -> [key, value]
export const signUpValidate = (refs, errMsg, setErrMsg) => {
    const refsEntries = Object.entries(refs.current); // -> [name, ref]
    console.log('refsEntries -->', refsEntries);
    const msg = {
        'idRef': '아이디',
        'pwdRef': '비밀번호',
        'cpwdRef': '비밀번호 확인',
        'nameRef': '이름',
        'phoneRef': '휴대폰번호',
        'emailnameRef': '이메일 주소',
        'emaildomainRef': '이메일 도메인'
    };
    console.log(msg);
    // const property = {
    //     'idRef': 'id',
    //     'pwdRef': 'pwd',
    //     'cpwdRef': 'cpwd',
    //     'nameRef': 'name',
    //     'phoneRef': 'phone',
    //     'enRef': 'emailname'
    // };

    for (const item of refsEntries /* = Object.entries(refs); */) {
        const name = item[0];
        const newName = item[0].replace("Ref", '');
        const ref = item[1]; // 주소값

        // console.log('name --> ', name);
        // console.log('msg --> ', msg);
        // console.log('msg[name] --> ', msg[name]);
        // console.log('newname --> ', newName);
        // console.log('ref --> ', ref);

        if (name !== "emaildomainRef") { // 가져온 refs을 활용할 것
            if (ref.current.value === '') {
                // alert(`${msg[name]}을/를 입력해주세요.`);
                // setErrMsg({...errMsg, [property[name]]: `${msg[name]}을/를 입력해주세요.`});
                setErrMsg({...errMsg, [newName]: `${msg[name]}을/를 입력해주세요.`});
                ref.current.focus();
                return false;
            }
        } else {
            if (ref.current.value === 'default') {
                alert(`${msg[name]}을 선택해주세요.`);
                ref.current.focus();
                return false;
            }
        }
        
    }
    
    return true;
}

/***************************************
 *  title : 회원가입 폼 에러메세지 체크
****************************************/
export const errCheck = (name, value, errMsg, setErrMsg) => {
    const names = [
        { 'name': 'id', 'msg': '아이디을/를 입력해주세요.' },
        { 'name': 'pwd', 'msg': '비밀번호을/를 입력해주세요.' },
        { 'name': 'cpwd', 'msg': '비밀번호 확인을/를 입력해주세요.' },
        { 'name': 'name', 'msg': '이름을/를 입력해주세요.' },
        { 'name': 'phone', 'msg': '휴대폰번호을/를 입력해주세요.' },
        { 'name': 'emailname', 'msg': '이메일 주소을/를 입력해주세요.' }
    ];

    names.map((item) =>
        (name === item.name) ? (
            value === '' ? setErrMsg({...errMsg, [item.name]: item.msg}) : setErrMsg({...errMsg, [item.name]: ''})
        ) : ''
    );
}