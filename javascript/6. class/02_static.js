// static method : 객체를 생성하지 않고 class명.method 형식으로 호출이 가능함
class Fruit {
    constructor(name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    static makeFruit = () => {
        return new Fruit('orange', 'coral', '🍊'); // parameter가 없으므로 값 고정. parameter를 설정하고 외부에서 변수선언해서 사용 가능
    }
    display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display(); // instance. 메모리에 올라가 있는 객체명. 함수 안에 있기 때문에 객체 생성되지 않으며 호출 불가능
let orange = Fruit.makeFruit();
// let orange = Fruit.makeFruit('orange', 'coral', '🍊'); // parameter가 a, b, c와 같이 작성되어 있을 경우 이와 같이 사용 가능.
console.log(orange)
orange.display();

// apple.makeFruit(); // apple이라는 객체 안에서는 makeFruit를 찾을 수 없으므로 오류 발생
// static 키워드가 붙은 method는 heap에 저장되지만 static만 저장되는 memory 공간에 별도로 저장되며 클래스명.static으로 저장, 호출된다. 
// 즉, 객체 안에 있어도 저장소가 다르고 주소값이 다르기 때문에 apple.makeFruit();라는 호출은 객체 안에서 static 키워드가 붙은 makeFruit를 찾을 수 없다.