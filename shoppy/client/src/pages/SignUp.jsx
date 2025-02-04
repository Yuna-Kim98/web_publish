import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';
import { signUpValidate, handleDuplicateIdCheck, handlePwdCheck, errCheck } from '../utils/funcValidate.js';
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {
    const navigate = useNavigate();
    const {names, placeholders, labels, initFormData} = initSignup();
    const {refs, msgRefs} = useInitSignupRefs(names); // 위에서 initSignup이 실행됐기 때문에 names를 받아 쓸 수 있음
    
    // console.log('labels --> ', labels);
    // console.log('init --> ', initFormData);
    // console.log('refs --> ', refs);
    // console.log('msgRefs --> ', msgRefs);

    const [formData, setFormData] = useState(initFormData);
    // console.log('formData --> ', formData);
    const [idCheckResult, setIdCheckResult] = useState('default');

    // onChange : 폼 데이터 입력 & 에러 메시지
    const handleSignUpForm = (event) => {
        const {name, value} = event.target;
        // console.log('name, value --> ', name, value);
        setFormData({...formData, [name]: value});
        // errCheck(name, value, errMsg, setErrMsg);
    }

    // onSubmit : 가입하기 버튼 이벤트
    const handleSignUpSubmit = (event) => {
        event.preventDefault();

        // console.log('idCheckResultRef --> ', refs.current['idCheckResultRef'].current.value);

        // 유효성 체크
        if (signUpValidate(refs, msgRefs)) {
            // 중복 확인 버튼 체크
            if (idCheckResult === 'default') {
                alert('중복 확인을 진행해 주세요.');
                return false;
            } else {
                console.log('submit --> ', formData);
                // 서버 --> DB 테이블에 insert
                // get : url 통해 호출 및 데이터 전달 => 패킷의 Header와 함께 넘어감 => req.params :: 데이터가 작고 보안이 필요없을 때 사용(url 길이에 제한이 있고 보안이 약하기 때문)
                // post : url 주소로 경로 호출, 데이터 전달 => 패킷의 Body와 함꼐 넘어감 => req.body :: 데이터가 크고 보안이 필요할 때 사용
                // axios.post('경로', 전송할 객체{});
                axios.post('http://localhost:9000/member/signup', formData) // => controller로 데이터 전송. post 메소드이기 때문에 url에 나타나지 않고 리액트 안에서만 확인 가능함
                    .then(res => {
                        if (res.data.result_rows === 1) {
                            alert('회원가입에 성공하셨습니다.');
                            // 3초 후 로그인 페이지 이동 --> useNavigate
                            setTimeout(() => {
                                navigate('/login');
                            }, 1000);
                            // window.location.href = '/login'; -> 리액트가 아닌 윈도우에서 실행함
                        } else {
                            alert('회원가입에 실패하셨습니다.');
                        }
                    })
                    .catch(error => {
                        alert('회원가입에 실패하셨습니다.');
                        console.log(error);
                    }); 
            }
        }
    }

    // onBlur : 비밀번호 확인 체크 이벤트
    // const handlePwdCheck = () => {
    //     const pwdRef = refs.current['pwdRef'];
    //     const cpwdRef = refs.current['cpwdRef'];
    //     const pwdMsgRef = msgRefs.current['pwdMsgRef'];
    //     const cpwdMsgRef = msgRefs.current['cpwdMsgRef'];
    //     /** 변수로 따로 선언하지 않고 refs.current[''].current.value를 사용할 경우
    //         매번 메모리로 가 refs.current['']의 주소값을 가져온 후 브라우저로 가 current.value의 주소값을 찾게 된다.
    //         변수로 따로 선언해두고 사용할 경우 브라우저 주소값만 가져오면 되기 때문에 작업시간이 줄어든다. */

    //     if (pwdRef.current.value === '') {
    //         alert('비밀번호가 입력되지 않았습니다.');
    //         pwdMsgRef.current.style.setProperty('color', 'red');
    //         pwdRef.current.focus();
    //         return false;
    //     } else if (cpwdRef.current.value === '') {
    //         alert('비밀번호 확인이 입력되지 않았습니다.');
    //         cpwdMsgRef.current.style.setProperty('color', 'red');
    //         cpwdRef.current.focus();
    //         return false;
    //     } else if (pwdRef.current.value !== cpwdRef.current.value) {
    //         alert('비밀번호가 일치하지 않습니다.');
    //         pwdRef.current.value = '';
    //         cpwdRef.current.value = '';
    //         pwdRef.current.focus();
    //         return false;
    //     }
    // }

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
                                            onBlur={ name === 'cpwd' ? 
                                                        () => handlePwdCheck(refs.current['pwdRef'], refs.current['cpwdRef'], refs.current['nameRef'], msgRefs.current['pwdMsgRef'], msgRefs.current['cpwdMsgRef']) : 
                                                        null } // 함수도 메모리에서 주소를 참조하기 때문에 빈값이 아닌 null로 작성
                                            placeholder = {placeholders[name]} />
                                        { name === 'id' &&
                                            <>
                                            <button type='button' 
                                                    onClick={() => handleDuplicateIdCheck(refs.current['idRef'], refs.current['pwdRef'], msgRefs.current['idMsgRef'], setIdCheckResult)}>
                                            중복확인</button>
                                            {/* 
                                                refs, msgRefs를 통으로 넘길 경우 전체 데이터가 넘어가기 때문에 데이터가 무겁고 효율성이 떨어질 수 있음.
                                                클릭 이벤트에서 함수를 바로 호출하며 파라미터를 넘기기 때문에 콜백함수 형태로 호출해줌
                                                handleDuplicate() 형태로 넘길 경우 리액트가 아닌 브라우저로 값이 넘어감
                                            */}
                                            <input type="hidden" value={idCheckResult} />
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
                                            <select name='emaildomain'
                                                    ref={refs.current['emaildomainRef']}
                                                    onChange={handleSignUpForm}
                                                    >
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