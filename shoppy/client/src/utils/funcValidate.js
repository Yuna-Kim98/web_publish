import axios from "axios";

/*****************************
 *  title : 로그인 폼 체크
******************************/
export const validate = ({idRef, pwdRef}, errMsg, setErrMsg) => {
    if (idRef.current.value === '') {
        // alert('아이디를 입력해주세요.');
        setErrMsg({...errMsg, ['id']: '아이디를 입력해주세요.'});
        idRef.current.focus();
        return false;
    } else if (pwdRef.current.value === '') {
        // alert('비밀번호를 입력해주세요.');
        setErrMsg({...errMsg, ['pwd']: '비밀번호를 입력해주세요.'});
        pwdRef.current.focus();
        return false;
    }
}


/***************************************
 * title : 회원가입 폼 아이디 중복 체크
****************************************/
export const handleDuplicateIdCheck = (idRef, pwdRef, idMsgRef, setIdCheckResult) => {
    // 파라미터 인자로 받을 경우 변수 형태로 받음(순서대로)
    // 구조분해할당의 경우 이름에 맞게 맵핑이 진행되기 때문에 순서 상관x
    if (idRef.current.value === '') {
        idMsgRef.current.style.setProperty('color', 'red');
        idRef.current.focus();
        return false;
    } else {
        // 아이디 중복 체크 <--> 서버 연동
        axios.post('http://localhost:9000/member/idcheck', {"id": idRef.current.value})
            .then(res => {
                if (res.data.result === 1) {
                    alert('이미 사용 중인 아이디 입니다.');
                    idRef.current.focus();
                    return false;
                } else {
                    alert('사용 가능한 아이디 입니다.');
                    setIdCheckResult('complete');
                    pwdRef.current.focus();
                    return false;
                }
            })
            .catch(error => console.log(error));
    }
}

/****************************
 * title : 비밀번호 체크
*****************************/
export const handlePwdCheck = (pwdRef, cpwdRef, nameRef, pwdMsgRef, cpwdMsgRef) => {
    console.log(pwdRef, cpwdRef);
    if (pwdRef.current.value === '') {
        alert('비밀번호가 입력되지 않았습니다.');
        pwdMsgRef.current.style.setProperty('color', 'red');
        pwdRef.current.focus();
        return false;
    } else if (cpwdRef.current.value === '') {
        if (document.activeElement !== cpwdRef.current) {
            alert('비밀번호 확인이 입력되지 않았습니다.');
            cpwdMsgRef.current.style.setProperty('color', 'red');
            cpwdRef.current.focus();
        }
        // onBlur 무한루프 오류 정리할 것
        return false;
    } else {
        if (pwdRef.current.value === cpwdRef.current.value) {
            alert('비밀번호가 일치합니다.');
            nameRef.current.focus();
            return false;
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            pwdRef.current.value = '';
            cpwdRef.current.value = '';
            pwdRef.current.focus();
            return false;
        }
    }
}

/****************************
 * title : 회원가입 폼 체크
*****************************/
// Object.entries() : 자바스크립트 객체를 배열로 변환해주는 메소드
// {key:value} -> [key, value]
export const signUpValidate = (refs, msgRefs) => {
    // console.log('f-refs-->' , refs);
    // console.log('f-msgRefs-->' , msgRefs);

    const refsEntries = Object.entries(refs.current);
    const msgRefsEntries = Object.entries(msgRefs.current);
    console.log('refsEntries -->', refsEntries);

    for (let i = 0; i < refsEntries.length; i++) {
        const item = refsEntries[i];
        const name = item[0];
        const ref = item[1]; // 데이터 입력폼 객체 주소
        // const msgItem = msgRefsEntries[i];
        // const msgName = msgItem[0];
        // const msgRef = msgItem[1];

        let msgItem, msgName, msgRef = null;

        if(i < refsEntries.length - 1) {
            msgItem = msgRefsEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1]; // 데이터 입력폼의 메시지 객체 주소
        }

        if (name !== 'emaildomainRef') {
            if (ref.current.value === '') {
                msgRef.current.style.setProperty('color', 'red');
                ref.current.focus();
                return false;
            }
            else {
                msgRef.current.style.setProperty('color', 'silver');
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

/***************************************
 *  title : 회원가입 폼 에러메세지 체크
****************************************/
// export const errCheck = (name, value, ) => {
//     // const names = [
//     //     { 'name': 'id', 'msg': '아이디을/를 입력해주세요.' },
//     //     { 'name': 'pwd', 'msg': '비밀번호을/를 입력해주세요.' },
//     //     { 'name': 'cpwd', 'msg': '비밀번호 확인을/를 입력해주세요.' },
//     //     { 'name': 'name', 'msg': '이름을/를 입력해주세요.' },
//     //     { 'name': 'phone', 'msg': '휴대폰번호을/를 입력해주세요.' },
//     //     { 'name': 'emailname', 'msg': '이메일 주소을/를 입력해주세요.' }
//     // ];

//     names.map((item) =>
//         (name === item.name) ? (
//             value === '' ? msgRef.current.style.setProperty('color', 'red') : msgRef.current.style.setProperty('color', 'silver')
//         ) : ''
//     );
// }