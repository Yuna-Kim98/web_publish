// call stack => 호출되는 코드(함수)를 순차적으로 진행 
// 자바스크립트 v8 엔진은 single thread 형식(call stack이 thread 역할. 비동기 처리 영역이 따로 존재하는 이유)
// 실행 컨텍스트 구조 : variable environment(실제 데이터 저장, 실행 담당), lexical(데이터 정보 저장), eval function
// 변수를 선언하면 실행 컨텍스트 안에서 각 영역별로 scope가 생성되며 scope의 environment record에 데이터의 정보를 저장한 후 variable environment에 데이터를 저장한다.
// 저장한 데이터를 호출하면 실행 컨텍스트에서 해당 데이터의 정보가 저장된 scope로 가 정보를 탐색하고 variable environment에서 데이터를 호출해 실행한다.
// !!변수의 선언시 let, const를 활용하여 정확한 scope 범위 설정이 중요하다!!
/** 
 * lexical(렉시컬) - 실행컨텍스트 안에 포함된 개념으로 scope 별로 메모리를 효율성 있게 관리하는 영역. 변수선언, 실행코드, 외부호출 코드 담당
 * lexical 영역에서 데이터를 영역 별로 나누어 저장. 각 영역은 environment record(환경 레코드), outer environment record reference(외부 환경 레코드 참조)로 나누어져 있음
 * 지역변수는 전역변수 안에 속해있으므로 지역변수는 전역변수를 외부참조 함. 이때 외부참조를 하며 단계별로 읽는 것을 scope chainning이라고 함. 무조건 하위 영역에서 상위 영역으로만 연결이 된다.
 * lexical 환경은 파일 단위이므로 실행이 완전히 종료되어야 초기화되며 새로 실행될 때마다 새로운 lexical 환경이 생성된다.
**/
{
    let a = 10;
    console.log(`a ---> ${a}`);
    console.log(`aa ---> ${aa}`); // 스코프 체이닝은 무조건 하위에서 상위로만 가능하지만, var는 무조건 전역선언되기 때문에 오류 없이 출력됨
    {
        let b = 20;
        var aa = 100;
        console.log(`b ---> ${b}`);
        console.log(`aa ---> ${aa}`);
        {
            let c = 30;
            console.log(`c---> ${c}`);
            console.log(`a ---> ${a}`);
            console.log(`b ---> ${b}`);
        } //level 
    } //level 2
} // level 1(전역 scope)

// const a = 100;
// let b = 200;
// {
//     let c = 10;
//     const d = 20;
//     console.log(a, b);
//     {
//         let e = 30;
//         console.log(e);
//         {
//             let k = 50;
//         }
//     }
// }
/**
위와 같은 경우, 할당시 call stack 실행 컨텍스트의 lexical에 전역, level1, level2, level3 총 3영역의 scope가 생성된다.
전역scope의 environment record에는 a = 100, b = 200을 레코딩,
level1의 environment record에는 c = 10, d = 20가 레코딩,
level2의 environment record에는 e = 30이 레코딩,
level3의 environment record에는 k = 40을 레코딩되며
레코딩 된 데이터들은 environment record에 저장된다.
console.log(a, b) 실행시 level1 scope에서 전역scope로 외부 참조(scope chainning)해 a값을 호출하고 level1 scope에서 b값을 호출해 데이터값을 출력한다.
console.log(e) 실행시 level2 scope에서 e값을 호출해 데이터값을 출력한다.

 * let과 const는 이렇듯 level에 맞춰 선언, 할당이 가능하다. 그러나 var의 경우 무조건 전역변수로 선언된다.
 * 이 경우 var의 데이터는 해당 level의 scope에 레코딩, 할당되지만 전역scope에도 변수선언되어 전역scope까지 참조하게 되고 
 * 해당 scope에서는 할당만 되어있을 뿐 값이 레코딩 되어있지 않기 때문에 undefined로 값이 나타나 오류가 나타난다.
**/