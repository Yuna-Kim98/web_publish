import React, { useRef } from 'react';

export function initSignUp() {
  const names = ['id', 'pwd', 'cpwd', 'name', 'phone', 'emailname'];
  const namesKor = ['아이디','비밀번호', '비밀번호 확인', '이름', '휴대폰 번호', '이메일 주소'];

  const initFormData = names.reduce((acc, name) => {
    acc[name] = '';
    return acc;
  }, {});

  const labels = names.reduce((acc, name, idx) => {
    acc[name] = namesKor[idx];
    return acc;
  }, {});

  return {names, initFormData, labels};
}

export function useInitSignupRefs(names) {
  const refs = useRef(
    names.reduce((acc, name) => {
    acc[name.concat('Ref')] = React.createRef();
    return acc;
    }, {})
  );
  refs.current.emaildomainRef = React.createRef();
  // 데이터 전송 후 수정, 재전송 했을 때 오류가 발생하면 useRef로 감싸줄 것.

  return {refs};
}