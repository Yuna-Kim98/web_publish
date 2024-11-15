// object literal이나 array는 데이터를 보호하는 개념이 없음
// class는 데이터 보호가 가능하며 class 안에 오브젝트나 배열을 포함시킬 수 있어 사용 범위가 넓음
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
    // 전체 값을 반환하는 함수
    // 방법1 : 객체명.values()로 호출
    // values = () => [this.name, this.age, this.address, this.#sno];
    // name ~ address는 Member 클래스의 get method로 작성된 값에 접근

    // 방법2 : 객체명.values로 호출
    get values() {
        return [this.name, this.age, this.address, this.#sno];
    }
    // 값을 받거나 입력하지 않고 return하기 때문에 사용 가능
}

/** Professor class **/
class Professor extends Member {
    #subject // 강의과목
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.#subject = subject;
    }
    get subject() { return this.#subject; }
    get values() {
        return [this.name, this.age, this.address, this.#subject];
    }
}

/** StudentParent class **/
class Parent extends Member {
    #cname; // 자녀이름
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.#cname = cname;
    }
    get cname() { return this.#cname; }
    get values() {
        return [this.name, this.age, this.address, this.#cname];
    }
}

/** Employee class **/
class Employee extends Member {
    #department // 소속 부서
    constructor(name, age, address, department) {
        super(name, age, address);
        this.#department = department;
    }
    get department() { return this.#department; }
    get values() {
        return [this.name, this.age, this.address, this.#department];
    }
}

// signup 버튼 클릭시 호출되는 함수
const signupCheck = () => {
    let type = document.querySelector('input[type=radio]:checked');
    let name, age, address, sno, subject, cname, department;
    // 각각 선언할 경우 가장 첫번째 항목인 학생에 입력된 정보만 출력됨

    // type에 따라서 각각의 클래스를 생성
    let member = null;
    switch(type.value) {
        case '1': 
        name = document.querySelector('#student #name');
        age = document.querySelector('#student #age');
        address = document.querySelector('#student #address');
        sno = document.querySelector('#student #sno');
        member = new Student(sno.value, name.value, age.value, address.value);
        break;
        case '2': 
        name = document.querySelector('#professor #name');
        age = document.querySelector('#professor #age');
        address = document.querySelector('#professor #address');
        subject = document.querySelector('#professor #subject');
        member = new Professor(name.value, age.value, address.value, subject.value); 
        break;
        case '3': 
        name = document.querySelector('#parent #name');
        age = document.querySelector('#parent #age');
        address = document.querySelector('#parent #address');
        cname = document.querySelector('#parent #cname');
        member = new Parent(name.value, age.value, address.value, cname.value); // 오류 - case 맨 밑에 작성
        break;
        case '4': 
        name = document.querySelector('#employee #name');
        age = document.querySelector('#employee #age');
        address = document.querySelector('#employee #address');
        department = document.querySelector('#employee #department');
        member = new Employee(name.value, age.value, address.value, department.value); //오류 - case 맨 밑에 작성
        break;
        default : 
    }

    console.log(member);
    // 자바스크립트로 생성되는 html을 dynamic html(DHTML)이라고 한다.

    // let list = Object.keys(member); // ['name', 'age', 'address', 'sno']
    // --> class의 field값이 private인 경우에는 외부에서 데이터를 가져올 수 없음!

    let list = '';
    // 제어문 for를 사용하기 쉽게 하기 위해 함수로 만들어줌
    // 엔진이 자동으로 배열을 돌려 배열이 끝날 때까지 실행시킴
    member.values.forEach((item) => {
        list += `<li>${item}</li>`;
    });
    
    let output = '';
    output += `<ul>${list}</ul>`
            // `<ul>
            //     <li>${member.values[0]}</li>
            //     <li>${member.values[1]}</li>
            //     <li>${member.values[2]}</li>
            //     <li>${member.values[3]}</li>
            // </ul>`
    ; 
    document.querySelector('#result').innerHTML = output; // 동적 html
    // document.querySelector('#result').innerHTML = '<span>실행 결과!</span>';
    // document.querySelector('#result').innerHTML = '<span>실행 결과!</span>';  
    // document.querySelector('#result').innerHTML = '<span>실행 결과!</span>';


} // end of signupCheck

// display : 라디오 버튼 선택시 화면 전환시키는 함수
const display = (type) => {
    // 체크박스 변경 시 결과 출력창 reset
    document.querySelector('#result').innerHTML = '';

    // 초기화면에 아무것도 보이지 않게 함
    document.querySelector('#student').style.display = 'none';
    document.querySelector('#professor').style.display = 'none';
    document.querySelector('#parent').style.display = 'none';
    document.querySelector('#employee').style.display = 'none';

    if(type === '1') {
        document.querySelector('#student').style.display = 'block';
    } else if(type === '2') {
        document.querySelector('#professor').style.display = 'block';
    } else if(type === '3') {
        document.querySelector('#parent').style.display = 'block';
    } else if(type === '4') {
        document.querySelector('#employee').style.display = 'block';
    } 
} // end of display


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