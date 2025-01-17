import React, { useState, useRef } from 'react';
import '../styles/signup.css';
import { signUpValidate, errCheck } from '../utils/funcValidate.js'

export default function Signup() {
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    const namesKor = ['아이디','비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];

    // 폼 초기 데이터
    const init = names.reduce((acc, name) => {
        acc[name] = '';
        return acc;
    }, {});
    // console.log('init --> ', init);

    // ref 초기 데이터
    const refs = useRef(
        names.reduce((acc, name) => {
        acc[name.concat('Ref')] = React.createRef();
        return acc;
        }, {})
    );
    refs.current.emaildomainRef = React.createRef();

    // 폼 label 이름 데이터
    const labels = names.reduce((acc, name, idx) => {
        acc[name] = namesKor[idx];
        return acc;
    }, {});

    // const init = {
    //     'id': '',
    //     'pwd': '',
    //     'cpwd': '',
    //     'name': '',
    //     'phone': '',
    //     'emailname': '',
    //     'emaildomain': 'default'
    // };

    // const names = ['id', 'pwd', 'cpwd', 'name'];
    // const initForm = (initArray) => {
    //     const init = initArray.reduce((acc, key) => {
    //         acc[key] = '';
    //         return acc;
    //     },{});
    //     return init;
    // };

    // const refs = {
    //     idRef : useRef(null),
    //     pwdRef : useRef(null),
    //     cpwdRef : useRef(null),
    //     nameRef : useRef(null),
    //     phoneRef : useRef(null),
    //     enRef : useRef(null),
    //     edRef : useRef(null) 
    // };

    // const [formData, setFormData] = useState(initForm(names));
    const [formData, setFormData] = useState(init);
    const [errMsg, setErrMsg] = useState(init);

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
        if (signUpValidate(refs, errMsg, setErrMsg)) console.log('send Data --> ', formData);
    }

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
                                    <input type="text" 
                                            name={name}
                                            // id={name}
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleSignUpForm}
                                            placeholder = "아이디 입력(6~20자)" />
                                    {
                                        name === 'id' && // id일 때만 중복확인 버튼이 출력되게 함
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








                    {/* <li>
                        <label for="" ><b>아이디</b></label>
                        <span>{errMsg.id}</span>
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
                        <span>{errMsg.pwd}</span>
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
                        <span>{errMsg.cpwd}</span>
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
                        <span>{errMsg.name}</span>
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
                        <span>{errMsg.phone}</span>
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
                        <span>{errMsg.emailname}</span>
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
                    </li> */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}