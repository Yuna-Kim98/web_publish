// 1 ~ 6까지 출력
for (i = 1; i <= 6; i++) {
    // i = 3일 때 로직 빠져나오기
    if (i === 3) {
        break;
    }
    console.log(i);
}

// for문 자연스럽게 빠져나오기
for (i = 1; i <= 6; i++) {
    // i = 3일 때 로직 빠져나오기
    if (i === 3) {
        i = 10; // 변수 값을 크게 설정해 조건식을 빠져나옴
    } else {
        console.log(i);
    }
}

// break를 사용해서 로직을 종료해도 되지만, for문으로 종료시키는 것이 좀 더 부드러운 작동법임.