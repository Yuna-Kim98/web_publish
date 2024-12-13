import React, { useRef, useState } from 'react';

export default function UserInfo() {
    // form 데이터 저장소
    const initForm = {"name": "", "address": "", "age": ""}
    const [formData, setFormData] = useState(initForm);

    // 유효성 체크 Hook
    const nameRef = useRef(null);
    const addRef = useRef(null);
    const ageRef = useRef(null);
    
    // input 이벤트
    const handleChangeForm = (event) => {
        const {name, value} = event.target; // 구조분해할당
        setFormData({...formData, [name]:value}); // ({...기존데이터, [property]:value})
    }

    // 유효성 체크 함수
    const validateForm = () => {
        let result = true;
        if (nameRef.current.value == '') {
            alert("이름을 입력해주세요.");
            nameRef.current.focus();
            result = false;
        } else if (addRef.current.value === '') {
            alert("주소를 입력해주세요.");
            addRef.current.focus();
            result = false;
        } else if (ageRef.current.value === '') {
            alert("나이를 입력해주세요");
            ageRef.current.focus();
            result = false;
        }
        return result;
    }
    
    const handleSubmit = (event) => { 
        event.preventDefault();

        // 유효성 체크
        if (validateForm()) {
            console.log(formData); // 데이터 전송 전 확인
        }
    }

    return (
        <div>
            <h1>UserInfo</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} ref={nameRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>Address</label>
                        <input type="text" name="address" value={formData.address} ref={addRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <label>Age</label>
                        <input type="text" name="age" value={formData.age} ref={ageRef} onChange={handleChangeForm} />
                    </li>
                    <li>
                        <button type="submit">Send</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

/*********************************************** 
 * 공식처럼 외울 것!
 1. form 변수로 입력 데이터 저장
    const [form, setForm] = useState({초기값});
 2. 각 입력폼 값 변경 --> 이벤트(onChange)
    --> form 변수에 저장 : setForm()
************************************************/

/*********************************************** 
 * 리액트 유효성 체크
 1. React Hook 사용 ::: useRef
    const ref = useRef();
 2. 유효성 체크 함수 생성
 3. 버튼 이벤트 처리 함수에 유효성 체크 함수 호출
************************************************/