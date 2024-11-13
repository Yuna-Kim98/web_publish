// 객체에서 기능을 실행하는 메소드(객체 리터럴 안에 포함됨) -> 객체 안 이름 없는 함수 사용
const apple = {
    name : "사과",
    color : "Red",
    emoji : "🍎",
    display : function () { console.log("🍎"); }, // 메소드
    getName : function () { console.log(this.name); },
    getColor : function () { console.log(this.color); },
    getEmoji : function () { console.log(this.emoji); } 
    // console.log();같은 명령어를 실행하면 call stack에서 변수 선언으로 저장된 데이터를 찾아 가져오기 때문에 name을 출력하면 값을 찾지 못해 오류 발생
    // 현재 객체 안에서 값을 찾아 출력할 수 있도록 this 키워드를 사용
}

console.log(apple);
apple.display();
// display(); 객체이기 때문에 단독으로 호출 불가능
apple.getName();
apple.getColor();
apple.getEmoji();