// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
    console.log(`i --> ${i}`);
}
// for문에서는 loop가 돌아갈 때마다 lexical 환경에 새로운 레코드 영역이 별도로 생성됨 -> 별도로 관리되어 충돌 방지
// 즉, 위의 경우 전역scope 하나와 5개의 레코드가 생성

/** for 루프의 인덱스, 값으로 var 키워드는 권장하지 않음 **/ 
let a = [1, 2, 3];

// for
for (var i = 0; i < a.length; i++) {
    console.log(`a[${i}] --> ${a[i]}`);
}
console.log(`a[${i}] --> ${a[0]}`);
console.log(`a[${i}] --> ${a[1]}`);
console.log(`a[${i}] --> ${a[2]}`);
// 위의 경우 전역scope와 5개의 레코드가 생성되지만, i가 var로 선언되어 전역에 저장, 할당되기 때문에 i값이 3으로만 출력됨

// for...of
for(let element of a) {
    console.log(element);
}