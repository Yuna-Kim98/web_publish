import React, { useRef, useState } from 'react';
import '../styles/signup.css';
import { signUpValidate } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {
    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names); // 위에서 initSignup이 실행됐기 때문에 names를 받아 쓸 수 있음
    
    console.log('labels --> ', labels);
    console.log('init --> ', initFormData);
    console.log('refs --> ', refs);
    console.log('msgRefs --> ', msgRefs);

    const [formData, setFormData] = useState(initFormData);

    // onChange : 폼 데이터 입력 & 에러 메시지
    const handleSignUpForm = (event) => {
        const {name, value} = event.target;
        console.log('name, value --> ', name, value);
        setFormData({...formData, [name]: value});
    }

    // onSubmit : 가입하기 버튼 이벤트
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
                    { names && names.map((name) => ( // return 키워드 없이 화면에 바로 출력(반환)할 수 있도록 {} 대신 () 사용
                        <li>
                            <label for="" ><b>{labels[name]}</b></label>
                            <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}을(를) 입력해주세요.</span>
                            <div>
                                { name !== 'emailname' ? (
                                    <>
                                        <input type={ (name === 'pwd' || name === 'cpwd') ? 'password' : 'text' }
                                            name={name}
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleSignUpForm}
                                            placeholder = {placeholders[name]} />
                                        { name === 'id' &&
                                            <>
                                            <button type="button" >중복확인</button>
                                            <input type="hidden" id="idCheckResult" value="default" />
                                            </>
                                        }
                                    </>
                                ) : (
                                    <>
                                        <input type="text" 
                                                    name={name}
                                                    ref={refs.current[name.concat('Ref')]}
                                                    onChange={handleSignUpForm}
                                                    placeholder="이메일 주소" />
                                            <span>@</span>       
                                            <select name={name}
                                                    ref={refs.current['emaildomainRef']}  >
                                                <option value="default">선택</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="daum.net">daum.net</option>
                                            </select>
                                    </>
                                )}
                            </div>
                        </li>
                    ))} {/** end of map */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}