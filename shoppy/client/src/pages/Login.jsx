import React, { useRef, useState } from 'react';
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { validate } from "../utils/funcValidate.js"

export default function Login() {
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null)
    };
    const initForm = {
        'id': '',
        'pwd': ''
    };
    const [ formData, setFormData ] = useState(initForm);
    const [ errMsg, setErrMsg ] = useState(initForm);

    /* form 데이터 입력 함수 */
    const handleChageForm = (event) => {
        // setFormData에 아이디, 패스워드 저장
        const {name, value} = event.target;
        setFormData({...formData, [name]: value}); // property값이 변수에 저장된 경우 []로 구분하여 호출

        if (name === 'id') {
            value === '' ? setErrMsg({...errMsg, ['id']: '아이디를 입력해주세요'}) : setErrMsg({...errMsg, ['id']: ''});
        } else if (name === 'pwd') {
            value === '' ? setErrMsg({...errMsg, ['pwd']: '아이디를 입력해주세요'}) : setErrMsg({...errMsg, ['pwd']: ''});  
        }
    }

    /* Submit 함수 */
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (validate(refs, errMsg, setErrMsg)) {
            console.log('send data --> ', formData); // 조건식이기 때문에 반환받는 값이 있어야 실행됨
            // React --> 노드 서버(express) 데이터 전송
        }
    }

    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaUser/></span>
                            <input type="text" 
                                    name="id" 
                                    id="id"
                                    ref={refs.idRef} 
                                    onChange={handleChageForm}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id">{errMsg.id}</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaLock/></span>
                            <input type="password" 
                                    name="pwd" 
                                    id="pwd" 
                                    ref={refs.pwdRef}
                                    onChange={handleChageForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd">{errMsg.pwd}</p>
                    </li>
                    <li>
                        <button type="submit" className="login-button">로그인</button>
                    </li>
                    <li>
                        <div  className="login-form-checkbox">
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">패스워드 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button type="button" className="login-button-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div className="loginplus-image">
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}

