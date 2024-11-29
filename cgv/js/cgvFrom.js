/****************************************
 * 비밀번호/비밀번호 확인 확인
*****************************************/
function passwordCheck() {
    const pwd = document.querySelector('#pwd');
    const cpwd = document.querySelector('#cpwd');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    const cpwdMsg = document.querySelector('#error-msg-cpwd');

    if (pwd.value === '') {
        pwdMsg.style.color = 'red';
        pwd.focus();
    } else if (cpwd.value === '') {
        cpwdMsg.style.color = 'red';
        cpwd.focus();
    } else {
        // 비밀번호 동일 체크
        if (pwd.value === cpwd.value) {
            alert('비밀번호가 일치합니다.');
        } else {
            alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요.');
            pwd.value = '';
            cpwd.value = '';
            pwdMsg.style.color = 'red';
            cpwdMsg.style.color = 'red';
            pwd.focus();
        }
    }
}




/****************************************
 * 아이디 중복확인
*****************************************/
// function idCheck() {
//     const id = document.querySelector('#id');
//     const idMsg = document.querySelector('#error-msg-id');

//     if (id.value === '') {
//         idMsg.style.color = 'red';
//         id.focus();
//     } else {
//         alert('아이디 중복 체크');
//     }
// }

function idCheck(event) {
    const did  = 'test';
    const id = document.querySelector('#id');
    const idMsg = document.querySelector('#error-msg-id');

    if (id.value === '') {
        idMsg.style.color = 'red';
        id.focus();
    } else {
        // 중복 체크
        if (did === id.value.trim()) {
            alert('이미 사용 중인 아이디입니다. 다시 입력해주세요.');
            id.focus();
        } else {
            alert('사용이 가능한 아이디입니다.');
            document.querySelector('#idCheckResult').value = 'success'
            console.log(document.querySelector('#idCheckResult').value);
            
            // event.target.style.backgroundColor = 'gray';
        }
    }
}



/****************************************
 * Join Form validation check
 * +자릿수 체크하는 기능 추가해볼 것
*****************************************/
function joinFormCheck() {
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');
    const cpwd = document.querySelector('#cpwd');
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone');
    const emailname = document.querySelector('#emailname');
    const emaildomain = document.querySelector('#emaildomain');
    const idCheckResult = document.querySelector('#idCheckResult');

    const idMsg = document.querySelector('#error-msg-id');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    const cpwdMsg = document.querySelector('#error-msg-cpwd');
    const nameMsg = document.querySelector('#error-msg-name');
    const phoneMsg = document.querySelector('#error-msg-phone');
    const emailnameMsg = document.querySelector('#error-msg-emailname');

    if (id.value === '') { // 오탈자 주의!!
        idMsg.style.color = 'red';
        id.focus();
    } else if (pwd.value === '') {
        pwdMsg.style.color = 'red';
        pwd.focus();
    } else if (cpwd.value === '') {
        cpwdMsg.style.color = 'red';
        cpwd.focus();
    } else if (name.value === '') {
        nameMsg.style.color = 'red';
        name.focus();
    } else if (phone.value === '') {
        phoneMsg.style.color = 'red';
        phone.focus();
    } else if (emailname.value === '') {
        emailnameMsg.style.color = 'red';
        emailname.focus();
    } 
    else if (emaildomain.value === 'default') {
        emaildomain.style.outlineColor = 'red';
        emaildomain.focus();
    } else if (idCheckResult.value === 'default') {
        alert('아이디 중복체크를 진행해주세요.');
    } else {
        alert('가입 성공!');
    }
}
// 주의 ::: 함수 로직을 만들 때는 한 번에 한가지 기능만 넣을 것

/****************************************
 * 회원가입 폼 실시간 체크
*****************************************/
function handleChangeJoin(event) {
    const idMsg = document.querySelector('#error-msg-id');
    const pwdMsg = document.querySelector('#error-msg-pwd');
    const cpwdMsg = document.querySelector('#error-msg-cpwd');
    const nameMsg = document.querySelector('#error-msg-name');
    const phoneMsg = document.querySelector('#error-msg-phone');
    const emailMsg = document.querySelector('#error-msg-emailname');
    const emaildomain = document.querySelector('#emaildomain');

    if (event.target.id === 'id') {
        (event.target.value.trim().length !== 0) ? idMsg.style.color = 'green': idMsg.style.color = 'red';
    } else if (event.target.id === 'pwd') {
        (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'green': pwdMsg.style.color = 'red';
    } else if (event.target.id === 'cpwd') {
        (event.target.value.trim().length !== 0) ? cpwdMsg.style.color = 'green' : cpwdMsg.style.color = 'red';
    } else if (event.target.id === 'name') {
        (event.target.value.trim().length !== 0) ? nameMsg.style.color = 'green' : nameMsg.style.color = 'red';
    } else if (event.target.id === 'phone') {
        (event.target.value.trim().length !== 0) ? phoneMsg.style.color = 'green' : phoneMsg.style.color = 'red';
    } else if (event.target.id === 'emailname') {
        (event.target.value.trim().length !== 0) ? emailMsg.style.color = 'green' : emailMsg.style.color = 'red';
    } else if (event.target.id === 'emaildomain') {
        (event.target.value !== 'default') ? emaildomain.style.outlineColor = 'green' : emaildomain.style.outlineColor = 'red';
    }

    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
}




/****************************************
 * 로그인 id, pwd 실시간 체크 함수
*****************************************/
function handleChange(event) {
    const idMsg = document.querySelector('#error-msg-id');
    const pwdMsg = document.querySelector('#error-msg-pwd');

    if (event.target.id === 'id') {
        (event.target.value.trim().length !== 0) ? idMsg.style.color = 'blue': idMsg.style.color = 'red';
    } else {
        (event.target.value.trim().length !== 0) ? pwdMsg.style.color = 'blue': pwdMsg.style.color = 'red';
    }
}

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
        msgId.textContent = '아이디를 입력하세요.';
        id.focus();
    } else if (pwd.value === '') {
        // msgId.textContent = ''
        msgPwd.textContent = '패스워드를 입력하세요.';
        pwd.focus();
    } else {
        // 아이디 비교 로직 or 함수 호출
        alert('입력완료!!!');
    }
}