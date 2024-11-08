// 과일 리스트 출력
let fruitList = ['apple', 'orange', 'lemon'];
let emojiList = ['🍎', '🍊', '🍋']; // 인덱스 번호에 맞게 이모지 순서 지정
let length = fruitList.length-1
for(let i = 0/* 변수 선언 키워드를 생략할 경우 자동으로 var로 선언됨 */; i <= length; i++) {
    // lemon만 출력
    if(fruitList[i] === 'lemon') {
        console.log(fruitList[i]);
    }
}
// 위의 로직을 좀 더 유연하게 표현. 한 눈에 알아볼 수 있게 구성함
for(let i = 0; i <= length; i++) {
    let fruit = fruitList[i] // 변수 선언됐으나 사용되지 않은 변수(dead code)는 음영처리 되어 표시됨
    let emoji = emojiList[i]; // emoji 변수 선언 후 데이터 값을 emojiList에서 fruitList 배열의 인덱스 값과 맞춰 출력
    if(fruit === 'lemon') {
        console.log(emoji);
    }
}