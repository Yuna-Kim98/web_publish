/**
 * class간의 상속 관계
 * class간의 상속 관계에서 부모 클래스는 memory에 따로 생성되지 않고, 자식 클래스가 생성될 때마다 하나씩 생성된다.
 * 즉, 자식 클래스가 3개면 부모 클래스도 메모리에 각각 하니씩 총 3개가 생성된다.
**/

// E 동물원에서 동물 관리 포르그램을 생성
// 흰색 사자, 회색 사자, 흰색 호랑이, 회색 호랑이, 푸들, 말티즈
// Object Modeling ==> Lion, Tiger, Dog

/**
 * Lion, Tiger, Dog class를 modeling하여 부모 클래스 생성 ==> Animal
 * Animal class 속성 : name, color, emoji, taste
 * Animal class method: display, sleep, eat
**/
class Animal {
    constructor(name, color, emoji, taste) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }
    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name}가(이) 잔다.`);
    eat = () => console.log(`${this.name}가(이) 먹는다.`);
}

/**
 * Lion class 
 * 속성 : name, color, emoji, taste(식성)
 * method : display(emoji), sleep, eat
**/
class Lion extends Animal { // Lion class는 Animal class의 자식이다
    constructor(name, color, emoji, taste) {
        super(name, color, emoji, taste);
        // 자식 클래스의 값을 부모 클래스에게 넘겨주는 키워드 super는 항상 생성자 함수 맨 윗줄에 있어야 한다.
    }
    // display = () => console.log(`${this.name} : ${this.emoji}`);
    // sleep = () => console.log(`${this.name}가(이) 잔다.`);
    // eat = () => console.log(`${this.name}가(이) 먹는다.`);
    // 부모 클래스와 연결되어 있기 때문에 실행에 문제 없음
}

/**
 * Tiger class 
 * 속성 : name, age, color, emoji, taste(식성)
 * method : display(emoji), sleep, eat
**/
class Tiger extends Animal {
    constructor(name, age, color, emoji, taste) {
        super(name, color, emoji, taste);
        this.age = age;
    }
    getAge = () => console.log(this.age);
}

/**
 * Dog class 
 * 속성 : name, color, emoji, taste(식성)
 * method : display(emoji), sleep, eat
**/
class Dog extends Animal {
    constructor(name, color, emoji, taste, type) {
        super(name, color, emoji, taste)
        this.type = type;
    }
    getType = () => console.log(this.type);
}

/**
 * 동물원에서 동물들을 관리를 위한 클래스
 * 속성 : #type, #동물의 객체(Lion, Tiger, Dog)
 * 메소드 :  setter/getter
**/
class Zoo {
    // 다른 영역에 있는 객체를 생성하지 않고 호출
    static LION = 1;
    static TIGER = 2;
    static DOG = 3;

    #type; #animal;
    constructor(type, animal) {
        this.#type = type;
        this.#animal = animal;
    }
    get type() { return this.#type; }
    get animal() { return this.#animal; }

    set type(type) { this.#type = type; }
    set animal(animal) { this.#animal = animal; }
}


// 호출
const tom = new Lion('tom', 'white', '🦁', 'meat');
const smith = new Tiger('smith', 3, 'gray', '🐯', 'meat');
const judy = new Dog('judy', 'white', '🐶', 'meat', '푸들');
tom.display(); tom.sleep(); tom.eat();
smith.display(); smith.sleep(); smith.eat(); smith.getAge();
judy.display(); judy.sleep(); judy.eat(); judy.getType();

const everZoo = new Zoo(Zoo.LION, tom);
console.log(everZoo.type, everZoo.animal);
// const로 선언한 객체 이름으로 호출해야 함
