import React, { useRef, useState } from 'react';
import { validateSignUp, handleIdCheck, handlepwdCheck } from '../../apis/validate.js';
import { errorCheck } from '../../apis/errorCheck.js';
import { initFormNames } from '../../apis/initial.js';

export default function SignUp() {
    // 폼 데이터 관리
    const names = ["id", "pwd", "cpwd", "name", "phone", "emailadd"];
    // const initErrors = {
    //     "id": "", 
    //     "pwd": "", 
    //     "cpwd": "",
    //     "name": "",
    //     "phone": "",
    //     "emailadd": ""
    // };
    
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
    const idMsgRef = useRef(null);
    const pwdMsgRef = useRef(null);
    
    const [formData, setFormData] = useState(initFormNames(names));
    const [errors, setErrors] = useState(initFormNames(names));

    // 폼 입력값 변경 이벤트 함수
    const handleChangeSignUp = (event) => {
        const {name, value} = event.target; // 구조분해할당
        setFormData({...formData, [name]:value});
        idMsgRef.current.style.setProperty("color", "red");
        idMsgRef.current.style.setProperty("font-weight", "normal");
        pwdMsgRef.current.style.setProperty("color", "red");
        pwdMsgRef.current.style.setProperty("font-weight", "normal");

        // 에러 메시지 체크 함수 호출
        errorCheck(name, value, errors, setErrors);
    }

    // Sumbmit 이벤트 함수
    const handleSubmitSignUp = (event) => {
        event.preventDefault();

        if (validateSignUp(refs, errors, setErrors)) console.log(formData);
    }

    // 아이디 중복 확인 이벤트 함수
    // const handleidCheck = () => {
    //     const id = refs.idRef.current;
    //     if (id.value === "") {
    //         errorCheck("id", id.value, errors, setErrors);
    //         id.focus();
    //     } else {
    //         const dId = "test";
    //         if (dId === id.value) {
    //             setErrors({...errors, ["id"]: "이미 사용 중인 아이디입니다."});
    //             id.focus();
    //             return false;
    //         } else {
    //             setErrors({...errors, ["id"]: "사용 가능한 아이디입니다."});
    //             idMsgRef.current.style.setProperty("color", "green");
    //             idMsgRef.current.style.setProperty("font-weight", "bold");
    //         }
    //     }
    // }

    // 비밀번호 확인 이벤트 함수
    // const handlepwdCheck = () => {
    //     const pwd = refs.pwdRef.current;
    //     const cpwd = refs.cpwdRef.current;
    //     if (pwd.value === "") {
    //         errorCheck("pwd", pwd.value, errors, setErrors);
    //         pwd.focus();
    //     } else if (cpwd.value === "") {
    //         errorCheck("cpwd", cpwd.value, errors, setErrors);
    //         cpwd.focus();
    //     } else {
    //         if (pwd.value === cpwd.value) {
    //             setErrors({...errors, ["cpwd"]: "비밀번호가 일치합니다."});
    //             pwdMsgRef.current.style.setProperty("color", "green");
    //             pwdMsgRef.current.style.setProperty("font-weight", "bold");
    //         } else {
    //             setErrors({...errors, ["pwd"]: "비밀번호가 일치하지 않습니다."});
    //             setFormData({...formData, ["pwd"]:"", ["cpwd"]: ""});
    //             pwd.focus();
    //             return false;
    //         }
    //     }
    // }

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
                        <span style={{"color" : "red"}} ref={idMsgRef}>{errors.id}</span>
                        <div>
                            <input type="text" name="id" value={formData.id} ref={refs.idRef} onChange={handleChangeSignUp} placeholder="아이디 입력 (6~20자)" />
                            <button type="button" onClick={() => {
                                const param = {
                                    "refs.idRef": refs.idRef,
                                    "errorCheck": errorCheck,
                                    "errors": errors,
                                    "setErrors": setErrors,
                                    "idMsgRef": idMsgRef
                                }
                                handleIdCheck(param)
                                }}>중복확인</button>
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
                        <span style={{"color" : "red"}} ref={pwdMsgRef}>{errors.cpwd}</span>
                        <div>
                            <input type="password" name="cpwd" value={formData.cpwd} ref={refs.cpwdRef} onChange={handleChangeSignUp} 
                            onBlur={() => {
                                const param = {
                                    "refs": refs,
                                    "errorCheck": errorCheck,
                                    "errors": errors,
                                    "setErrors": setErrors,
                                    "pwdMsgRef": pwdMsgRef,
                                    "formData": formData,
                                    "setFormData": setFormData
                                }
                                handlepwdCheck(param)
                            }} 
                            placeholder="비밀번호 재입력" />
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

