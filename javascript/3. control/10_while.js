// 반복문 - 반복이 종료되는 시점을 알고 있을 때
/*
    while (조건식) {
        실행문;
    }
*/
// for문 : 1 ~ 5까지 출력
// 3이면 종료
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(`i = ${i}`);
    
}

// while문 : 1 ~ 5까지 출력
// 3이면 종료
let count = 1;
while (count <= 5) {
    if (count === 3) break;
    console.log(`count = ${count}`); //빠져나올 수 있는 값이 정해져있지 않아 무한루프
    count++; // count값에 증감을 주어 로직 형성. 무한루프 종료
}

// 메뉴 선택
let flag = true; // 메뉴 선택 여부와 상관 없이 첫 화면엔 무조건 메뉴 선택창이 떠야 함. false일 때는 아무 것도 나오지 않음.
let menu = 0;
while (flag) {
    console.log(`1: 🍕 \t 2: 🌭 \t 0: 종료`);
    if (menu === 1) { // switch case를 사용하는 게 더 자연스러울 수 있음!
        console.log(`선택하신 메뉴는 🍕 입니다.`);
        // while loop 자연스럽게 종료
        flag = false; // flag의 값이 true이기 때문에 무한루프. false값으로 바꾸어 무한루프 종료.
    } else if (menu === 2) {
        console.log(`선택하신 메뉴는 🌭 입니다.`);
        flag =false;
    } else if (menu === 0) {
        console.log(`선택을 종료합니다.`);
        flag= false;
    }
}