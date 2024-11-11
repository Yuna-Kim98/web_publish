// 구구단 3 ~ 5단까지 출력
// row : 1 ~ 9 반복
// column : 3 ~ 5 반복
for (row = 1; row <= 9; row++) {
    let output = '';
    for (col = 3; col <= 5; col++) {
        output += `${col} * ${row} = ${col * row}`
    }
    console.log(output);
}

// 별 찍기
for (row = 1; row <= 3; row++) {
    let output = ''
    for (col = 1; col <= row; col++) {
        output += `*`
    }
    console.log(output);
}

// 사과 찍기, 3번째 줄만 빨간 사과
for (row = 1; row <= 5; row ++) {
    let output = ''
    for (col = 1; col <= row; col++) {
        if (row === 3) {
            output += `🍎\t`
        } else {
            output += `🍏\t`
        }
    }
    console.log(output);
}
// call stack은 로직이 끝날 때까지 빠져나오지 않으므로, 최대한 로직을 깔끔히 작성하는 것이 좋다.