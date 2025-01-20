import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { signUpValidate, errCheck, handleIdCheck, handlePwdCheck } from '../utils/funcValidate.js'
import { initSignUp, useInitSignupRefs } from '../utils/funcInitialize.js'

export default function Signup() {
    // 초기값 데이터 호출, 구조분해할당
    const {names, labels, initFormData} = initSignUp();
    const {refs} = useInitSignupRefs(names);

    // const [formData, setFormData] = useState(initForm(names));
    const [formData, setFormData] = useState(initFormData);
    const [errMsg, setErrMsg] = useState(initFormData);
    const [idCheck, setIdCheck] = useState('default');

    // onChange
    const handleSignUpForm = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});

        errCheck(name, value, errMsg, setErrMsg);
    }
    // console.log('errMsg --> ', errMsg);

    // onSubmit
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        // 유효성 체크
        if (signUpValidate(refs, errMsg, setErrMsg)) {
            if (idCheck === 'default') {
                alert('아이디 중복확인을 진행해 주세요.');
            } else {
                console.log('send Data --> ', formData);
            }
        }
    }

    // const handlePwdCheck = () => {
    //     if (refs.current['pwdRef'].current.value === '') {
    //         setErrMsg({...errMsg, ['pwd']: '비밀번호을/를 입력해주세요.'});
    //         refs.current['pwdRef'].current.focus();
    //     } else if (refs.current['cpwdRef'].current.value === '') {
    //         if (document.activeElement !== refs.current['cpwdRef'].current) {
    //             setErrMsg({...errMsg, ['cpwd']: '비밀번호 확인을/를 입력해주세요.'});
    //             refs.current['cpwdRef'].current.focus();
    //         }
    //     } else {
    //         if (refs.current['pwdRef'].current.value === refs.current['cpwdRef'].current.value) {
    //             setErrMsg({...errMsg, ['cpwd']: '비밀번호가 일치합니다.'});
    //             refs.current['nameRef'].current.focus();
    //         } else {
    //             setErrMsg({...errMsg, ['pwd']: '비밀번호가 일치하지 않습니다.'});
    //             refs.current['pwdRef'].current.value = '';
    //             refs.current['cpwdRef'].current.value = '';
    //             refs.current['pwdRef'].current.focus();
    //         }
    //     }
    // }
    

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form className="signup-form" onSubmit={handleSignUpSubmit}>
                <ul>
                    { names && names.map((name) => (
                        <li>
                            <label for="" ><b>{labels[name]}</b></label>
                            <span>{errMsg[name]}</span>
                            <div>
                                {/* 삼항연산자 사용 */}
                                { name !== 'emailname' ? (
                                    <>
                                    <input type={ (name === 'pwd' || name === 'cpwd') ? 'password' : 'text' }
                                            name={name}
                                            // id={name}
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleSignUpForm}
                                            onBlur={ name === 'cpwd' ? () => {
                                                // const param = {
                                                //     'pwdRef' : refs.current['pwdRef'], 
                                                //     'cpwdRef' : refs.current['cpwdRef'], 
                                                //     'nameRef' : refs.current['nameRef'], 
                                                //     'errMsg' : errMsg, 
                                                //     'setErrMSg': setErrMsg
                                                // };
                                                handlePwdCheck(refs.current['pwdRef'], refs.current['cpwdRef'], refs.current['nameRef'], errMsg, setErrMsg)
                                            } : null }
                                            placeholder = "아이디 입력(6~20자)" />
                                    {
                                        name === 'id' && // id일 때만 중복확인 버튼이 출력되게 함
                                        <>
                                        <button type="button" onClick={() => handleIdCheck(refs.current['idRef'], refs.current['pwdRef'], errMsg, setErrMsg, setIdCheck)}>
                                        중복확인</button>
                                        <input type="hidden" id="idCheckResult" value={idCheck} />
                                        </>
                                    }
                                    </>
                                ) : (
                                    <>
                                    <input type="text" 
                                            name={name}
                                            // id = "emailname"
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleSignUpForm}
                                            placeholder="이메일 주소" />
                                    <span>@</span>       
                                    <select name='emaildomian'
                                            // id="emaildomain"
                                            ref={refs.current['emaildomainRef']}>
                                        <option value="default">선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}