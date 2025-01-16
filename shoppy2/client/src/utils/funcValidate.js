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


/*************************
 * 회원가입 폼 체크
**************************/
// Object.entries() : 자바스크립트 객체를 배열로 변환해주는 메소드
// {key:value} -> [key, value]
export const signUpValidate = (refs, msgRefs) => {
    const refsEntries = Object.entries(refs);
    const msgRefsEntries = Object.entries(msgRefs);
    console.log('refsEntries -->', refsEntries);

    for (let i = 0; i < refsEntries.length; i++) {
        const item = refsEntries[i];
        const msgItem = msgRefsEntries[i];
        const name = item[0];
        const ref = item[1]; // 데이터 입력폼 객체 주소
        const msgName = msgItem[0];
        const msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소

        if (name !== 'edRef') {
            if (ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
        } else {
            if (ref.current.value === 'default') {
                alert('이메일 도메인을 선택해주세요.');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}

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