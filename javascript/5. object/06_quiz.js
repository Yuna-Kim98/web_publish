// 객체 생성자 함수 - 객체 모델링(공통된 항목들을 뽑아 객체 생성 / 반려동물, 동물병원... 등 속성(?)에 따라 모델링 달라짐)
// dog, cat, rabbit... 의 갱체 생성자 함수를 정의하고 호출하세요.
// 속성(attribute(모델링 시 객체 -> 객체 생성 후 field), property) : name, color
// Method : display, eat('🐶가 먹는다.'), sleep('🐶가 잔다.')

function Animal(emoji, color) {
    // field
    this.emoji = emoji;
    this.color = color;

    //method
    this.display = () => console.log(this.emoji); 
    this.eat = () => console.log(`${this.emoji} 먹는다.`); 
    this.sleep = () => console.log(`${this.emoji} 잔다.`); 
}

const dog = new Animal("🐶", "white & brown");
const cat = new Animal("🐱", "cheese");
const rabbit = new Animal("🐰", "white & gray");

dog.display();
dog.eat();
dog.sleep();
cat.display();
cat.eat();
cat.sleep();
rabbit.display();
rabbit.eat();
rabbit.sleep();
// console.log(dog);
// console.log(cat);
// console.log(rabbit);
