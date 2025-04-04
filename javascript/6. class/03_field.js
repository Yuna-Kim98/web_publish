// class의 field는 생성자 함수에서 정의하는 값
// field에 접근 제어(access control)를 정의 : private(#), public
class Fruit {
    // constructor 정의
    #name; // instance.name 형식으로 외부(class 밖)에서 호출하는 경우 데이터 숨김
    constructor(name, color, emoji) {
        this.#name = name;
        this.color = color;
        this.emoji = emoji;
    }
    display = () => console.log(`${this.#name}, ${this.color}, ${this.emoji}`);    
}

const apple = new Fruit('apple', 'green', '🍏')
apple.display();
console.log(apple.name); 
console.log(apple.color);
console.log(apple.emoji);

console.clear();
// 사번(# / private), 사원명, 부서명
// info() 메소드 호출시 모든 정보 출력
class Employee {
    #empno; //private
    constructor(empno, ename, dept) {
        this.#empno = empno;
        this.ename = ename;
        this.dept = dept;
    }
    info = () => console.log(`${this.ename}, ${this.dept}`);
    infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.dept}`);
}

const hong = new Employee('1234', '홍길동', '개발팀')
hong.info(); // 일반정보: 사원명, 부서명 출력
hong.infoAll();
console.log(hong.empno);