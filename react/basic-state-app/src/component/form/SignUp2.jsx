import React, { useRef, useState } from 'react';
import { validateFormCheck, errorCheck } from '../../apis/validate2.js';

export default function SignUp2() {
    // 폼 데이터 관리
    const initForm = {
        "id": "",
        "pwd": "",
        "cpwd": "",
        "name": "",
        "phone": "",
        "emailname": "",
    }
    const initErrors = {
        "id": "",
        "pwd": "",
        "cpwd": "",
        "name": "",
        "phone": "",
        "emailname": ""
    }
    const [formData, setFormData] = useState(initForm);
    const [errors, setErrors] = useState(initErrors);

    // 유효성 체크
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailnameRef: useRef(null),
        emaildomainRef: useRef(null)
    };


    // 폼 데이터 입력값 변경 체크 함수
    const handelChangeSignUp = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});

        // 에러 메시지 체크 함수 호출
        errorCheck(name, value, errors, setErrors);
    }

    // 폼 submit 이벤트 함수
    const handleSubmit = (event) => {
        event.preventDefault();

        // 유효성 체크
        if (validateFormCheck(refs, errors, setErrors)) console.log(formData);
    }

    // 아이디 중복 확인
    const idCheck = () => {
        alert("중복 확인 완료!");
    }

    return (
        <div className="join-form center-layout">
            <div>
                <h1 className="center-title">회원가입</h1>
                <p>회원이 되어 혜택을 누려보세요</p>
            </div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <span id="error-msg-id" style={{"color": "red"}}>{errors.id}</span>
                        <div>
                            <input type="text" name="id" id="id" value={formData.id} ref={refs.idRef} onChange={handelChangeSignUp} placeholder="아이디 입력 (6~20자)" />
                            <button type="button" onClick={idCheck}>중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label>비밀번호</label>
                            <span id="error-msg-pwd" style={{"color": "red"}}>{errors.pwd}</span>
                        <div>
                            <input type="password" name="pwd" id="pwd" value={formData.pwd} ref={refs.pwdRef} onChange={handelChangeSignUp} placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~~20자)" />
                        </div>
                    </li>
                    <li>
                        <label>비밀번호 확인</label>
                        <span id="error-msg-cpwd" style={{"color": "red"}}>{errors.cpwd}</span>
                        <div>
                            <input type="password" name="cpwd" id="cpwd" value={formData.cpwd} ref={refs.cpwdRef} onChange={handelChangeSignUp} /*onblur="passwordCheck()"*/ placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label>이름</label>
                        <span id="error-msg-name" style={{"color": "red"}}>{errors.name}</span>
                        <div>
                            <input type="text" name="name" id="name" value={formData.name} ref={refs.nameRef} onChange={handelChangeSignUp} placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label>전화번호</label>
                        <span id="error-msg-phone" style={{"color": "red"}}>{errors.phone}</span>
                        <div>
                            <input type="tel" name="phone" id="phone" value={formData.phone} ref={refs.phoneRef} onChange={handelChangeSignUp} placeholder="휴대폰 번호 입력 ('-'제외 11자리 입력)" />
                        </div>
                        
                    </li>
                    <li>
                        <label>이메일 주소</label>
                        <span id="error-msg-emailname" style={{"color": "red"}}>{errors.emailname}</span>
                        <div>
                            <input type="text" name="emailname" id="emailname" value={formData.emailname} ref={refs.emailnameRef} onChange={handelChangeSignUp} placeholder="이메일 주소" />
                            <span>@</span>
                            <select name="emaildomain" id="emaildomain" value={formData.emaildomain} ref={refs.emaildomainRef} onChange={handelChangeSignUp}>
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

