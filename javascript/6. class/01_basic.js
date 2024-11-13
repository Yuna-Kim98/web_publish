// 객체를 생성하기 위한 틀 ==> class(클래스)
/*
    class 클래스명  {
        // constructor(생성자 함수)
        constructor() {
            this.필드명 = 값;
        // method
    }
*/
class Animal {
    //생성자 함수
    constructor(emoji, color) { // class에서 키워드는 반드시 constructor를 사용해야 함
        this.emoji = emoji;
        this.color = color;
    }

    //Method
    display = () => console.log(this.emoji); // 값이 들어가는 것이 아니기 때문에 this 키워드 붙지 않음.
}

const dog = new Animal('🐶', 'white & brown');
dog.display();