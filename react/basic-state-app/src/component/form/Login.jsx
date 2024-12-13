import React, { useState, useRef } from 'react';

export default function Login() {
    // const [id, setId] = useState('');
    // const [pwd, setPwd] = useState('');
    const initForm = {"id": "", "pwd": ""};
    const [form, setForm] = useState(initForm);
    // 폼에서 입력되는 정보 관리 -> 하나하나 처리하면 코드가 너무 많고 복잡해지기 때문에 한번에 관리

    // 유효성 체크 Hook
    const idRef = useRef(null); // 객체의 주소값이 들어가기 때문에 null이 초기값
    const pwdRef = useRef(null);

    const handleChageForm = (event) => {
        // id, pwd가 입력, 변경되면 setForm 함수를 이용하여 "id":"test" 형식으로 데이터 저장
        const {name, value} = event.target;
        /** 
            form = {"id": "", "pwd": ""}
            --id input--> form = {"id": "hong"}
            --pwd input--> form ={"pwd": "1234"}
            즉, 이벤트가 발생할 때마다 계속해서 새로운 객체가 생성되기 때문에 마지막으로 입력된 정보만 넘어감
            기존에 있던 데이터들을 불러오면서 새로운 데이터를 추가하기 위해 spread 연산자 사용
            props 넘기고 받는 것과 유사
        **/
        setForm({...form, [name]:value}); 
        // object literal의 필드(property)값을 변수로 입력하는 경우에는 []로 감싼 후 적용

        /** 
         * login-form에 입력된 값 --전송--> 서버(express, WAS, ...)
         * 폼에 입력된 값들은 object literal 형태로 넘어감
         * const formData = {
         *     "id": "test",
         *     "pwd": "1234"
         * };
        **/
    }

    const validate = () => {
        let result = true;
        if (idRef.current.value === '') {
            alert("아이디를 입력해주세요.");
            idRef.current.focus(); // 현재 위치에 포커스 적용
            result = false; // stirct 모드 때문에 정확하게 값 반환
        } else if (pwdRef.current.value === '') {
            alert("비밀번호를 입력해주세요.");
            pwdRef.current.focus();
            result = false;
        }
        return result;

        console.log(idRef.current.value); // 현재 참조하고 있는 객체가 가지고 있는 value 확인
        console.log(pwdRef.current.value); 
    }

    const handleSubmit = (event) => {
        // 이벤트 처리는 브라우저가 우선 순위를 갖기 때문에 리액트에서 실행하기 위해 브라우저 실행을 막음
        event.preventDefault(); 

        // 유효성 체크
        if (validate()) {
            console.log(form); // 데이터 전송 전 확인
        }
        // submit(form);
    }

    return (
        <div>
            <h1>Login</h1>
            <form name="login-form" onSubmit={handleSubmit}>
            {/* 로그인 정보 submit 이벤트 함수는 form에 적용 */}
                <div>
                    <label>아이디</label>
                    <input type="text" name="id" value={form.id} ref={idRef} onChange={handleChageForm} />
                    {/* 입력할 때마다 값이 바뀌고 배열에 추가될 수 있도록 이벤트 함수처리 */}
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" name="pwd" value={form.pwd} ref={pwdRef} onChange={handleChageForm} />
                </div>
                <div>
                    <button type="submit">로그인</button>
                    {/* 리액트에서는 버튼 타입보다 onSubmit 이벤트가 중요! */}
                </div>
            </form>
        </div>
    );
}