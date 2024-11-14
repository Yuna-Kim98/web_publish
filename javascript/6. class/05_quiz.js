// 학생(student) class
// 속성 : #이름, #나이, #주소, 별칭
// 메소드 : setter/getter 메소드 정의

class Student {
    // field
    #name; #age; #address;
    constructor(name, age, address, nickName) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.nickName = nickName; 
    }
    //java 형식
    //getter, setter method
    // getName = () => this.#name;
    // getAge = () => this.#age;
    // getAddress = () => this.#address;
    // getNickname = () => this.nickName; 

    // setName = (name) => this.#name = name;
    // setAge = (age) => this.#age = age;
    // setAddress = (address) => this.#address = address;
    // setNickname = (nickName) => this.nickName = nickName;
    
    //javascript 형식
    // private로 정의된 field값은 반드시 set 함수 필요
    // set/get 함수 형식은 private 정 의된 필드값에 한해서 생성한다.
    get name() { return this.#name; }; 
    get age() { return this.#age; };
    get address() { return this.#address; };
    // get nickName() { return this.nickName; };

    set name(name) { this.#name = name; }
    set age(age) { this.#age = age; }
    set address(address) { this.#address = address; }
    // set nickName(nickName) { this.nickName = nickName; }
    // setNickname = (nickName) => this.nickName = nickName;
    

    info = () => console.log(`학생 정보 : ${this.nickName}`);
    infoAll = () => console.log(`학생 정보 : ${this.#name}, ${this.#age}, ${this.#address}, ${this.nickName}`);
}

const hong = new Student('홍길동', 20, '서울시 강남구', 'hong');
// console.log(`${hong.getName()}\n${hong.getAge()}\n${hong.getAddress()}\n${hong.getNickname()}`); // \n -> enter키 기능
console.log(`${hong.name}\n${hong.age}\n${hong.address}\n${hong.ickname}`);
console.log(`${hong.name}`);
hong.name ='홍길순';

hong.info();
hong.infoAll();