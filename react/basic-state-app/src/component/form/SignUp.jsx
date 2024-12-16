import React, { useRef, useState } from 'react';
import { validateSignUp } from '../../apis/validate.js';
import { errorCheck } from '../../apis/errorCheck.js';

export default function SignUp() {
    // 폼 데이터 관리
    const initForm = {
        "id": "", 
        "pwd": "", 
        "cpwd": "",
        "name": "",
        "phone": "",
        "emailadd": ""
    };
    const initErrors = {
        "id": "", 
        "pwd": "", 
        "cpwd": "",
        "name": "",
        "phone": "",
        "emailadd": ""
    };
    const [formData, setFormData] = useState(initForm);

    // 유효성 체크
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        cpwdRef: useRef(null),
        nameRef: useRef(null),
        phoneRef: useRef(null),
        emailaddRef: useRef(null),
        emaildomainRef: useRef(null)
    };

    // 에러 메시지
    const [errors, setErrors] = useState(initErrors);

    // 폼 입력값 변경 이벤트 함수
    const handleChangeSignUp = (event) => {
        const {name, value} = event.target; // 구조분해할당
        setFormData({...formData, [name]:value});

        // 에러 메시지 체크 함수 호출
        errorCheck(name, value, errors, setErrors);
    }

    // Sumbmit 이벤트 함수
    const handleSubmitSignUp = (event) => {
        event.preventDefault();

        if (validateSignUp(refs, errors, setErrors)) console.log(formData);
    }

    return (
        <div className="join-form center-layout">
            <div>
                <h1 className="center-title">회원가입</h1>
                <p>회원이 되어 혜택을 누려보세요</p>
            </div>
            <form action="#" method="post" onSubmit={handleSubmitSignUp}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <span style={{"color" : "red"}}>{errors.id}</span>
                        <div>
                            <input type="text" name="id" value={formData.id} ref={refs.idRef} onChange={handleChangeSignUp} placeholder="아이디 입력 (6~20자)" />
                            <button type="button">중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label>비밀번호</label>
                            <span style={{"color" : "red"}}>{errors.pwd}</span>
                        <div>
                            <input type="password" name="pwd" value={formData.pwd} ref={refs.pwdRef} onChange={handleChangeSignUp} placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~~20자)" />
                        </div>
                    </li>
                    <li>
                        <label>비밀번호 확인</label>
                        <span style={{"color" : "red"}}>{errors.cpwd}</span>
                        <div>
                            <input type="password" name="cpwd" value={formData.cpwd} ref={refs.cpwdRef} onChange={handleChangeSignUp} /* onblur="passwordCheck()" */ placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label>이름</label>
                        <span style={{"color" : "red"}}>{errors.name}</span>
                        <div>
                            <input type="text" name="name" value={formData.name} ref={refs.nameRef} onChange={handleChangeSignUp} placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label>전화번호</label>
                        <span style={{"color" : "red"}}>{errors.phone}</span>
                        <div>
                            <input type="tel" name="phone" value={formData.phone} ref={refs.phoneRef} onChange={handleChangeSignUp} placeholder="휴대폰 번호 입력 ('-' 제외 11자리 입력)" />
                        </div>
                        
                    </li>
                    <li>
                        <label>이메일 주소</label>
                        <span style={{"color" : "red"}}>{errors.emailadd}</span>
                        <div>
                            <input type="text" name="emailadd" value={formData.emailadd} ref={refs.emailaddRef} onChange={handleChangeSignUp} placeholder="이메일 주소" />
                            <span>@</span>
                            <select name="emaildomain" value={formData.emaildomain} ref={refs.emaildomainRef} onChange={handleChangeSignUp}>
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

