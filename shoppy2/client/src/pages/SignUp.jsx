import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { signUpValidate, errCheck } from '../utils/funcValidate.js';

export default function Signup() {
    const init = {
        'id': '',
        'pwd': '',
        'cpwd': '',
        'name': '',
        'phone': '',
        'emailname': '',
        'emaildomain': 'default'
    }; 
    const refs = {
        idRef : useRef(null),
        pwdRef : useRef(null),
        cpwdRef : useRef(null),
        nameRef : useRef(null),
        phoneRef : useRef(null),
        enRef : useRef(null),
        edRef : useRef(null) 
    };
    const msgRefs = {
        msgIdRef : useRef(null),
        msgPwdRef : useRef(null),
        msgCpwdRef : useRef(null),
        msgNameRef : useRef(null),
        msgPhoneRef : useRef(null),
        msgEnRef : useRef(null),
        msgEdRef : useRef(null)
    };
    const [formData, setFormData] = useState(init);

    // 폼 데이터 입력 & 에러 메시지
    const handleSignUpForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});

        // errCheck(name, value, errMsg, setErrMsg);
    }

    // 가입하기 버튼 이벤트
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        // 유효성 체크
        if (signUpValidate(refs, msgRefs)) console.log('send Data --> ', formData);
    }

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSignUpSubmit}>
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.msgIdRef}>아이디를 입력해주세요.</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    ref={refs.idRef}
                                    onChange={handleSignUpForm}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span ref={msgRefs.msgPwdRef}>12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    ref={refs.pwdRef}
                                    onChange={handleSignUpForm}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span ref={msgRefs.msgCpwdRef}>비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    ref={refs.cpwdRef}
                                    onChange={handleSignUpForm}
                                    placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span ref={msgRefs.msgNameRef}>이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    ref={refs.nameRef}
                                    onChange={handleSignUpForm}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span ref={msgRefs.msgPhoneRef}>휴대폰번호를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    ref={refs.phoneRef}
                                    onChange={handleSignUpForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.msgEnRef}>이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    ref={refs.enRef}
                                    onChange={handleSignUpForm}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain"
                                    ref={refs.edRef}  >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

