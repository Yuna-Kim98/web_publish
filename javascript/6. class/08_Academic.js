// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member 부모 클래스(name, age, address)

/** Parent class **/
class Member {
    #name; #age; #address // private 속성의 코드는 해당 데이터가 있는 클래스에 메소드를 생성한다.
    constructor(name, age, address) { // 자식의 클래스 생성자 함수에서 super 호출될 때 실행
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name() { return this.#name; }
    get age() { return this.#age; }
    get address() { return this.#address; }
}

/** Student class **/
class Student extends Member {
    #sno; // 학번
    constructor(sno, name, age, address) {
        super(name, age, address);
        this.#sno = sno;
    }
    get sno() { return this.#sno; }
}

/** Professor class **/
class Professor extends Member {
    #subject // 강의과목
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() { return this.#subject; }
}

/** StudentParent class **/
class Parent extends Member {
    #cname; // 자녀이름
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.#cname = cname;
    }
    get cname() { return this.#cname; }
}

/** Employee class **/
class Employee extends Member {
    #department // 소속 부서
    constructor(name, age, address, department) {
        super(name, age, address);
        this.#department = department;
    }
    get department() { return this.#department; }
}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
    let type = document.querySelector('input[type=radio]:checked');
    let sno = document.querySelector('#sno');
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let address = document.querySelector('#address'); // id, class 확인 잘하기(오류에 추가)
    let cname = '';
    let department = '';

    // type에 따라서 각각의 클래스를 생성
    let member = null;
    switch(type.value) {
        case '1': member = new Student(sno.value, name.value, age.value, address.value); break;
        case '2': member = new Professor(name, age, address, subject); break;
        case '3': member = new Parent(name, age, address, cname); break;
        case '4': member = new Employee(name, age, address, department); break;
        default : 
    }
    console.log(member);
    
}

// display
const display = (type) => {
    if(type === '1') {
        document.querySelector('#student').style.display = 'block';
        document.querySelector('#professor').style.display = 'none';
        document.querySelector('#parent').style.display = 'none';
        document.querySelector('#employee').style.display = 'none';
    } else if(type === '2') {
        document.querySelector('#student').style.display = 'none';
        document.querySelector('#professor').style.display = 'block';
        document.querySelector('#parent').style.display = 'none';
        document.querySelector('#employee').style.display = 'none';
    } else if(type === '3') {
        document.querySelector('#student').style.display = 'none';
        document.querySelector('#professor').style.display = 'none';
        document.querySelector('#parent').style.display = 'block';
        document.querySelector('#employee').style.display = 'none';
    } else if(type === '4') {
        document.querySelector('#student').style.display = 'none';
        document.querySelector('#professor').style.display = 'none';
        document.querySelector('#parent').style.display = 'none';
        document.querySelector('#employee').style.display = 'block';
    }
}


// const hong = new Student('1234', '홍길동', 20, '서울시 강남구'); // 학생 정보
// const smith = new Professor('smith', 40, '서울시 서초구', 'JavaScript'); // 교수 정보
// const hongP = new Parent('홍길순', 60, '서울시 강남구', '홍길동'); // 학부모 정보
// const lee = new Employee('김철수', 30, '부산시 해운대구', '개발1팀');

// console.log(`*** 학생 정보 ***`);
// console.log(`${hong.sno}\n${hong.name}\n${hong.age}\n${hong.address}`);

// console.log(`\n*** 교수 정보 ***`);
// console.log(`${smith.name}\n${smith.age}\n${smith.address}\n${smith.subject}`);

// console.log(`\n*** 학부모 정보 ***`);
// console.log(`${hongP.name}\n${hongP.age}\n${hongP.address}\n${hongP.cname}`);

// console.log(`\n*** 직원 정보 ***`);
// console.log(`${lee.name}\n${lee.age}\n${lee.address}\n${lee.department}`);