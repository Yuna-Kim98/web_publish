import React, { useRef, useState } from 'react';
import { validateLogin2 } from '../../apis/validate.js';

export default function Login2() {
    // 폼 데이터 관리
    const initForm = {"id": "", "pwd": ""};
    const [formData, setFormData] = useState(initForm);
    // 데이터 유효성 관리
    // const idRef = useRef(null);
    // const pwdRef = useRef(null);
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null)
    }
    const [errorMsg, setErrorMsg] = useState(initForm);

    // 폼 데이터 변경 이벤트
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});

        if (name === 'id') {
            (value === '') ? setErrorMsg({...errorMsg, ["id"]: "아이디를 입력해주세요."}) : setErrorMsg({...errorMsg, ["id"]: ""})
        } else if (name === 'pwd') {
            (value === '') ? setErrorMsg({...errorMsg, ["pwd"]: "비밀번호를 입력해주세요."}) : setErrorMsg({...errorMsg, ["pwd"]: ""})
        }
    }

    // 버튼 이벤트
    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {
            // "idRef": idRef,
            // "pwdRef": pwdRef,
            "refs": refs,
            "errorMsg": errorMsg,
            "setErrorMsg": setErrorMsg
        };

        // 유효성 체크 함수 호출
        if (validateLogin2(param)) {
            console.log(formData); // 데이터 전송 전 확인
        }
    }

    // 유효성 체크 함수
    // const validateForm = () => {
    //     let result = true;
    //     // const로 선언하면 값이 고정되어 오류 발생. 반드시 let으로 변수 선언할 것!
    //     if (idRef.current.value === '') {
    //         // alert("아이디를 입력해주세요.");
    //         setErrorMsg({...errorMsg, ["id"]: "아이디를 입력해주세요."});
    //         idRef.current.focus();
    //         result = false;
    //     } else if (pwdRef.current.value === '') {
    //         // alert("비밀번호를 입력해주세요.");
    //         setErrorMsg({...errorMsg, ["pwd"]: "비밀번호를 입력해주세요."});
    //         pwdRef.current.focus();
    //         result = false;
    //     } 
    //     return result;
    // }

    return (
        <div>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text" name="id" value={formData.id} ref={refs.idRef} onChange={handleChangeForm} />
                        <span style={{"color" : "red"}}>{errorMsg.id}</span>
                    </li>
                    <li>
                        <label>비밀번호</label>
                        <input type="password" name="pwd" value={formData.pwd} ref={refs.pwdRef} onChange={handleChangeForm} />
                        <span style={{"color" : "red"}}>{errorMsg.pwd}</span>
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}