/****************************************
 * 로그인 폼 체크 함수
*****************************************/
function loginFormCheck() {
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');
    const msgId = document.querySelector('#error-msg-id');
    const msgPwd = document.querySelector('#error-msg-pwd');
    if (id.value === '') {
        // alert('아이디를 입력하세요.');
        msgId.textContent = '아이디를 입력하세요.'
        id.focus();
    } else if (pwd.value === '') {
        // msgId.textContent = ''
        msgPwd.textContent = '패스워드를 입력하세요.'
        pwd.focus();
    } else {
        // 아이디 비교 로직 or 함수 호출
        alert('입력완료!!!');
    }
}