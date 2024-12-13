import React, { useState } from 'react';
import './css/cgv.css';
import './css/common.css';

export default function CgvLoginForm() {
    // 폼 데이터 저장
    const initFormData = {"id":"", "pwd":""};
    const [formData, setFormData] = useState(initFormData);

    // 폼 이벤트
    const handleChangeForm = (event) => {
        const {name, value} = event.target; // 오탈자 주의!!!!!!
        setFormData({...formData, [name]:value});
    }

    // 폼 데이터 전송(버튼) 이벤트
    const handleClickLogin = (event) => {
        event.preventDefault(); // 브라우저 이벤트 처리 제어
        console.log(formData); // 데이터 확인 
    }

    return (
        <div className="login-form center-layout">
            <form onSubmit={handleClickLogin}>
                <div>
                    <ul>
                        <li><a href="#" target="_parent">로그인</a></li>
                        <li><a href="#" target="_parent">비회원 예매</a></li>
                        <li><a href="#" target="_parent">비회원 예매확인</a></li>
                    </ul>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>
                                <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                            </li>
                            <li>
                                <div className="login-form-input">
                                    <i className="fa-solid fa-user"></i>
                                    <span>&#124;</span>
                                    <input type="text" name="id" id={formData.id} onChange={handleChangeForm} placeholder="아이디를 입력해주세요" />
                                </div>
                                <div>
                                    <p id="error-msg-id"></p>
                                </div>
                            </li>
                            <li>
                                <div className="login-form-input">
                                    <i className="fa-solid fa-lock"></i>
                                    <span>&#124;</span>
                                    <input type="password" name="pwd" id={formData.pwd} onChange={handleChangeForm} placeholder="비밀번호를 입력해주세요" />
                                </div>
                                <div>
                                    <p id="error-msg-pwd"></p>
                                </div>
                            </li>
                            <li>
                                <button type="submit" className="btn-main-color">로그인</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
}

