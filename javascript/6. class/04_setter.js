// setter : class에서 정의되는 method로, #(private)으로 접근 제어가 설정된 field에 새로운 값을 입력하기 위한 method이다.
// setter필드명(입력되는 값) --출력--> getter필드명()
class Employee {
    #empno;
    constructor(empno, ename, dept) {
        this.#empno = empno;
        this.ename = ename;
        this.dept =dept;
    }
    // setter 함수
    setEmpno = (empno) => this.#empno = empno;
    setEname = (ename) => this.ename = ename;
    setDept = (dept) => this.dept = dept;

    getEmpno = () => this.#empno;
    getEname = () => this.ename;
    getDept = () => this.dept;
    // 내부에서만 접근 가능. 외부에서 접근 불가능

    info = () => console.log(`${this.ename}, ${this.dept}`);
    infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.dept}`);
}

const hong = new Employee('1234', '홍길동', '개발1팀');
hong.info();
hong.infoAll();
hong.setEmpno('12345');
hong.setEname('홍홍');
hong.setDept('개발2팀');
hong.infoAll();
console.log(hong.getEmpno());
console.log(hong.getEname());
console.log(hong.getDept());
