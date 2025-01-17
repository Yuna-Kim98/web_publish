import React, { useRef } from 'react';

/**********************************
 * SignUp 컴포넌트 초기화 작업
***********************************/
export function initSignup() {
    const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
    const namesKor = ['아이디', '비밀번호', '비밀번호 확인', '이름', '휴대폰번호', '이메일 주소'];
    const placeholdersKor = ['아이디(6~12자 이내)', '비밀번호', '비밀번호 확인', '이름', '휴대폰번호', '이메일 주소'];

    /** forEach문으로 initFormData 생성 
        let initFromData = {}
        names.forEach((name) => {
            initFromData = {...initFromData, [name]: ''};
        });
    */

    /** reduce() 함수로 데이터 생성 
        Array.reduce(콜백함수, 리턴 데이터 타입 정의)
    */
    const initFormData = names.reduce((acc, name) => {
        // 실행코드
        acc[name] = '';
        return acc; // 누적되는 값을 반환해주어야 함
    }, {}/* => 반환되는 타입 */);

    const labels = names.reduce((acc, name, idx) => {
        acc[name] = namesKor[idx];
        return acc;
    }, {});
    
    const placeholders = names.reduce((acc, name, idx) => {
        acc[name] = placeholdersKor[idx];
        return acc;
    }, {});
    
    // const refs = useRef(
    //     names.reduce((acc, name) => {
    //     acc[name.concat('Ref')] = React.createRef(); 
    //     // 리액트 훅은 콜백함수 안에 호출할 수 없어 리액트에서 제공하는 생성자 함수를 호출해 생성함
    //     return acc;
    //     }, {})
    // );
    // refs.current.emaildomainRef = React.createRef();
    
    // const msgRefs = useRef(
    //     names.reduce((acc, name) => {
    //         acc[name.concat('MsgRef')] = React.createRef();
    //         return acc;
    //     }, {})
    // );

    return {names, placeholders, labels, initFormData};
}

export function useInitSignupRefs(names) { // Customer Hook
    const refs = useRef(
        names.reduce((acc, name) => {
        acc[name.concat('Ref')] = React.createRef(); 
        // 리액트 훅은 콜백함수 안에 호출할 수 없어 리액트에서 제공하는 생성자 함수를 호출해 생성함
        return acc;
        }, {})
    );
    refs.current.emaildomainRef = React.createRef();
    
    const msgRefs = useRef(
        names.reduce((acc, name) => {
            acc[name.concat('MsgRef')] = React.createRef();
            return acc;
        }, {})
    );

    return {refs, msgRefs};
}