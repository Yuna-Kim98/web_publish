import React, { useRef, useState } from 'react';
import './css/signup.css';
import { validateFormSignUp3, signup3ErrorCheck } from '../../apis/validate.js';
import { initFormNames } from '../../apis/initial.js';

export default function SignUp3() {
    // 폼 데이터 저장 & 유효성 체크
    // 배열 + reduce 함수 설정
    const init = {
        "id": "",
        "pwd": "",
        "name": "",
        "phone1": "",
        "phone2": "",
        "phone3": "",
        "address": "",
        "birth1": "",
        "birth2": "",
        "birth3": "",
        "job": "",
        "gender": "",
        "email": "",
        "intro": ""
    };
    const initMsg = {
        "id": "",
        "pwd": "",
        "name": "",
        "phone1": "",
        "phone2": "",
        "phone3": "",
        "address": "",
        "birth1": "",
        "birth2": "",
        "birth3": "",
        "job": "",
        "gender": "",
        "email": "",
        "intro": ""
    };
    // 배열 + reduce 함수
    const initArray = [ 
        "idRef", "pwdRef", "nameRef", "phone1Ref", "phone2Ref", "phone3Ref", "addressRef",
        "birth1Ref", "birth2Ref", "birth3Ref", "jobRef", "genderRef", "emailRef", "introRef"
    ];

    /* React 전용 useRef 함수는 custom hook을 활용 */
    // const refs2 = refArray.reduce((acc, key) => {
    //     acc[key]=useRef(null);
    //     return acc
    // }, {});
    // console.log(refs2);

    
    const refs = {
        idRef: useRef(null),
        pwdRef: useRef(null),
        nameRef: useRef(null),
        phone1Ref: useRef(null),
        phone2Ref: useRef(null),
        phone3Ref: useRef(null),
        addressRef: useRef(null),
        birth1Ref: useRef(null),
        birth2Ref: useRef(null),
        birth3Ref: useRef(null),
        jobRef: useRef(null),
        genderRef: useRef(null),
        emailRef: useRef(null),
        introRef: useRef(null)
    };

    console.log(initFormNames(initArray));
    const [formData, setFormData] = useState(initFormNames(initArray));
    const [errors, setErrors] = useState(initMsg);

    // 폼 입력값 변경 이벤트 -> 변수로 선언되어 호이스팅 되지 않음
    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});

        // 에러 체크 메시지 함수
        signup3ErrorCheck(name, value, errors, setErrors);
    }

    // 폼 데이터 전송 이벤트
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // 유효성 체크
        if (validateFormSignUp3(refs)) console.log(formData);
    }
    
    return (
        <div className="form-container">
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디:</label>
                        <input type="text" name="id" value={formData.id} ref={refs.idRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>비밀번호:</label>
                        <input type="password" name="pwd" value={formData.pwd} ref={refs.pwdRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>이름:</label>
                        <input type="text" name="name" value={formData.name} ref={refs.nameRef} onChange={handleChangeForm} />
                    </li>
                    <li className="phone-li">
                        <label>전화:</label>
                        <div>
                            <input type="text" name="phone1" value={formData.phone1} ref={refs.phone1Ref} onChange={handleChangeForm} />
                            <span>-</span>
                            <input type="text" name="phone2" value={formData.phone2} ref={refs.phone2Ref} onChange={handleChangeForm} />
                            <span>-</span>
                            <input type="text" name="phone3" value={formData.phone3} ref={refs.phone3Ref} onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label>주소:</label>
                        <input type="text" name="address" value={formData.address} ref={refs.addressRef} onChange={handleChangeForm} />
                    </li>
                    <li className="birth-li">
                        <label>생일:</label>
                        <div>    
                            <input type="text" name="birth1" value={formData.birth1} ref={refs.birth1Ref} onChange={handleChangeForm} />
                            <span>/</span>
                            <input type="text" name="birth2" value={formData.birth2} ref={refs.birth2Ref} onChange={handleChangeForm} />
                            <span>/</span>
                            <input type="text" name="birth3" value={formData.birth3} ref={refs.birth3Ref} onChange={handleChangeForm} />
                        </div>
                    </li>
                    <li>
                        <label>직업:</label>
                        <select name="job" id="job" value={formData.job} ref={refs.jobRef} onChange={handleChangeForm}>
                            <option value="default">선택</option>
                            <option value="front">프론트엔드 개발자</option>
                            <option value="back">백엔드 개발자</option>
                            <option value="system">시스템 관리자</option>
                        </select>
                    </li>
                    <li>
                        <label>성별:</label>
                        <div>
                            <input type="radio" name="gender" value="m" ref={refs.genderRef} onChange={handleChangeForm} /><span>남</span>
                            <input type="radio" name="gender" value="f" ref={refs.genderRef} onChange={handleChangeForm} /><span>여</span>
                        </div>
                        
                    </li>
                    <li>
                        <label>이메일:</label>
                        <input type="email" name="email" value={formData.email} ref={refs.emailRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>자기소개:</label>
                        <textarea name="intro" value={formData.intro} ref={refs.introRef} onChange={handleChangeForm}></textarea>
                    </li>
                    <li>
                        <button type="sumbit">회원가입</button>
                        <button type="reset">취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

