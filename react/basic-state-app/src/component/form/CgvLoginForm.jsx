import React, { useRef, useState } from 'react';
import { validateFormCheck, handelChangeCheck } from '../../apis/validate.js';
import './css/cgv.css';
import './css/common.css';

export default function CgvLoginForm() {
    // 폼 데이터 저장
    const initFormData = {"id":"", "pwd":""};
    const [formData, setFormData] = useState(initFormData);

    // 유효성 체크
    // const idRef = useRef(null);
    // const pwdRef = useRef(null);
    const refs = {
        idRef: useRef(null), // refs.idRef
        pwdRef: useRef(null)
    };
    const [errorMsg, setErrorMsg] = useState(initFormData);

    // 폼 데이터 변경 이벤트
    const handleChangeForm = (event) => { 
        const {name, value} = event.target; // 오탈자 주의!!!!!!
        const param = {
            "name": name, 
            "value":value, 
            "errorMsg":errorMsg, 
            "setErrorMsg":setErrorMsg
        };
        setFormData({...formData, [name]:value});

        handelChangeCheck(param);
        
        // if (name === "id") {
        //     value === "" ? setErrorMsg({...errorMsg, ["id"]: "아이디를 입력해주세요."}) : setErrorMsg({...errorMsg, ["id"]: ""});
        // } else if (name === "pwd") {
        //     value === "" ? setErrorMsg({...errorMsg, ["pwd"]: "비밀번호를 입력해주세요."}) : setErrorMsg({...errorMsg, ["pwd"]: ""});
        // }
    }

    // 폼 데이터 전송(버튼) 이벤트
    const handleClickLogin = (event) => {
        event.preventDefault(); // 브라우저 이벤트 처리 제어
        const param = {
            // "idRef": idRef, 
            // "pwdRef": pwdRef, 
            "refs": refs,
            "errorMsg": errorMsg, 
            "setErrorMsg": setErrorMsg
        };
        // 넘겨줄 데이터가 많을 때 객체로 생성해서 넘겨줄 수 있음

        // 유효성 체크          
        if (validateFormCheck(param)) {
            console.log(formData); // 데이터 확인 
        }
    }

    // 유효성 체크
    // const validateFormCheck = () => {
    //     let result = true;
    //     if (idRef.current.value === "") {
    //         // alert("아이디를 입력해주세요.");
    //         setErrorMsg({...errorMsg, ["id"]: "아이디를 입력해주세요"});
    //         idRef.current.focus();
    //         result = false;
    //     } else if (pwdRef.current.value === "") {
    //         // alert("비밀번호를 입력해주세요.");
    //         setErrorMsg({...errorMsg, ["pwd"]: "비밀번호를 입력해주세요"});
    //         pwdRef.current.focus();
    //         result = false;
    //     }
    //     return result;
    // }

    return (
        <div className="login-form center-layout">
            <form onSubmit={handleClickLogin}>
                <div>
                    <ul>
                        <li><a href="#" target="_parent">로그인</a></li>
                        <li><a href="#" target="_parent">비회원 예매</a></li>
                        <li><a href="#" target="_parent">비회원 예매확인</a></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>
                                <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                            </li>
                            <li>
                                <div className="login-form-input">
                                    <i className="fa-solid fa-user"></i>
                                    <span>&#124;</span>
                                    <input type="text" name="id" id={formData.id} ref={refs.idRef} onChange={handleChangeForm} placeholder="아이디를 입력해주세요" />
                                </div>
                                <div>
                                    <p id="error-msg-id" style={{"color" : "red"}}>{errorMsg.id}</p>
                                </div>
                            </li>
                            <li>
                                <div className="login-form-input">
                                    <i className="fa-solid fa-lock"></i>
                                    <span>&#124;</span>
                                    <input type="password" name="pwd" id={formData.pwd} ref={refs.pwdRef} onChange={handleChangeForm} placeholder="비밀번호를 입력해주세요" />
                                </div>
                                <div>
                                    <p id="error-msg-pwd" style={{"color" : "red"}}>{errorMsg.pwd}</p>
                                </div>
                            </li>
                            <li>
                                <button type="submit" className="btn-main-color">로그인</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}

