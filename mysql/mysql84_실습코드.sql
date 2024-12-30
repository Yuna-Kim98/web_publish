/*
	* 데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.
	SQL(Structured Query Language): 데이터베이스에서 사용하는 구조화된 언어
    --> DBMS(Database Management System)에 접속하여 CRUD 작업을 수행하는 언어
		대소문자 구분하지 않음
    
    (1) DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
        - 명령어 : CREATE, ALTER, TRUNCATE, DROP
	(2) DML(Data Manipulation Language) : 데이터 조작어(작업어) -> 가장 많이 접하게 되는 언어
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
	(3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
	(4) DTL(Data Transacition Language) : 데이터 트랜잭션 제어어
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ...
*/

/**
	데이터베이스 선택 및 조회
    show databases; -- 모든 데이터베이스 목록 출력
    use [선택한 데이터베이스명]; -- 사용할 데이터베이스 선택
    select database(); -- 데이터베이스 선택
    show tables; -- 데이터베이스에 저장된 테이블 전체 조회
*/

show databases;
use hrdb2019;
select database();
show tables;

/**
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/

show tables;
desc department;
desc employee;
desc unit;
desc vacation;

/**
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼리스트(FILED 리스트)] FROM [테이블명];
		  SELECT *(전체 컬럼리스트) FROM [테이블명];
*/
SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
desc department;
select dept_id, dept_name from department;
select * from unit;

show tables;
desc employee;
-- 사원 테이블에서 사원아이디, 사원명, 성별, 입사일 조회
select emp_id, emp_name, gender, hire_date from employee;

-- 사원 테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉을 조회
show tables;
desc employee;
select emp_name, dept_id, hire_date, phone, salary from employee;

-- 부서테이블의 모든 컬럼을 조회
show tables;
select * from department;

-- [조회한 컬럼명을 alias(별칭)으로 출력]
-- 형식 : select [컬림명 as '별칭', 컬럼명 as '별칭'...] from [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 컬럼을 조회
show tables;
desc employee;
select emp_id as '아이디', emp_name as '성명', hire_date as '입사일', dept_id as '부서명', salary as '연봉' from employee;
select emp_id '사원 아이디', emp_name 성명, hire_date 입사일, dept_id 부서명, salary 연봉 from employee;

-- 사원테이블에서 사원명, 부서, 연봉을 조회 
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상의 컬럼 생성 - 연봉 10% 인센티브 컬럼
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
show tables;
desc employee;
select emp_name 사원명, dept_id 부서, salary 연봉, salary*0.1 인센티브 from employee;

-- 현재의 날짜를 조회, 컬럼명을 'date'로 변경
select curdate();
select curdate() as 'DATE';
 
/**
	테이블 조회(단순 -> 테이블 하나만 가지고 조회하는 환경) : SELECT ~ FROM ~ WHERE
    - 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼리스트(FILED 리스트)] FROM [테이블명] WHERE [조건절];
*/
-- 사원 테이블에서 SYS 부서에 근무하는 모든 사원을 조회
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS';
-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
SELECT * FROM EMPLOYEE WHERE EMP_NAME = '정주고';
-- 사원 테이블에서 사원아이디가 'S0011'인 사원의 정보를 모두 조회
SELECT * FROM EMPLOYEE WHERE EMP_ID = 'S0011';
-- 사원 테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT * FROM EMPLOYEE WHERE SALARY = 5800;
-- 사원 테이블에서 여성 사원들의 아이디, 이름, 입사일, 이메일 정보를 조회 
select emp_id, emp_name, hire_date, email from employee where gender = 'F';
-- 사원 테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용
select emp_id '사원 번호', emp_name, hire_date from employee where dept_id = 'SYS';

-- where절 조건에 별칭으로 조회가 가능한가?
select emp_id '사원 번호', emp_name, hire_date, dept_id '부서 번호' from employee where '부서 번호' = 'SYS';
-- 별칭을 사용할 경우 결과를 조회한 후 출력 직전에 컬럼의 이름만 바꾼다. 즉, 필터링이 먼저 이루어지기 때문에 별칭으로 검색이 불가능하다.

-- 사원 테이블에서 마케팅 부서의 모든 사원 정보를 조회
desc employee;
select * from employee;
select * from employee where dept_id = 'MKT';
-- 사원 테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
-- date 타입은 표현은 문자처럼, 처리는 숫자
select * from employee where hire_date = '2014-08-01';
-- 사원 테이블에서 연봉이 5000인 사원 정보 조회
select * from employee where salary = 5000;

/** 
	NULL 타입 
	- 숫자 컬럼에서의 null은 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식
    - NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행
*/
-- 사원 테이블에서 eng_name이 null인 모든 사원의 정보 조회
select * from employee where eng_name is null;
-- 연봉이 정해지지 않은 모든 사원 조회
select * from employee where salary is null;

/**
	ifnull() : NULL 값을 다른 값으로 대체해주는 함수
	형식 : ifnull(null 포함 컬럼명, 대체할 값);
	컬럼리스트에서 호출
*/
select emp_name, salary, ifnull(salary, 0) as salary2 from employee;
-- eng_name이 null인 사원들은 'smith' 이름으로 변경 후 조회
-- 출력되는 컬럼명은 eng_name으로 변경
select emp_id, emp_name, eng_name, hire_date, ifnull(eng_name, 'smith') as eng_name from employee;
-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무 중인 사원의 퇴사일에 현재의 날짜를 출력해주세요
select emp_id, emp_name, hire_date, ifnull(retire_date, curdate()) as retire_date from employee;

/**
	distinct : 데이터 중복 배제, 중복된 데이터 하나만 출력
    형식 : select [distinct 컬럼리스트(중복데이터포함)] from [테이블명] where [조건절];
*/
-- 사원 테이블의 부서 컬럼을 조회
select distinct dept_id from employee;
-- 완전히 중복된 데이터의 경우에만 적용됨
select distinct emp_id, dept_id from employee;

/**
	order by : 데이터 정렬(오름차순, 내림차순)
    가장 마지막에 실행
    형식 : select ~ from ~ where ~ order by 컬럼리스트(정렬 기준, 반드시 출력되는 데이터 중 하나여야 함) [asc/desc];
*/
-- 사원 아이디, 사원명, 입사일, 연봉을 조회
select emp_id, emp_name, hire_date, salary from employee order by emp_id asc;
-- 사원 아이디 기준 오름차순, 입사일 기준 내림차순
select emp_id, emp_name, hire_date, salary from employee order by emp_id asc, hire_date desc;
-- 급여를 기준으로 오름차순 정렬 후 조회
select * from employee order by salary asc;
-- eng_name이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
select * from employee where eng_name is null order by hire_date desc;
-- 퇴직한 사원들을 급여가 높은 순으로 조회
select * from employee where retire_date is not null order by salary desc;
-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
select * from employee where dept_id = 'SYS' order by salary desc;
-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
select * from employee where dept_id = 'SYS' order by hire_date desc, salary asc;

/**
	특정 범위의 데이터 검색 : where [조건절 + 비교연산자]
    형식 : select [컬럼리스트] from [테이블명] where [컬럼명 비교연산자 조건절]
*/
-- 사원 중 연봉이 5000 이상인 사원들을 조회
select * from employee where salary >= 5000 order by salary desc;

-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회
-- date 타입은 표현은 문자처럼, 처리방식은 숫자처럼
select * from employee where hire_date <= '2016-01-01';

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000 이상인 사원들을 조회
-- and(~이고) : 두 개의 조건이 모두 만족한 데이터만 조회
select * from employee where hire_date >= '2015-01-01' and salary >= 6000;

-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회
-- or(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
select * from employee where hire_date >= '2015-01-01' or salary >= 6000;

-- 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
select * from employee where hire_date > '2015-01-01' and hire_date < '2017-12-31';

-- 연봉 구간이 5000 이상 7000 미만인 사원들을 모두 조회
select * from employee where salary >= 5000 and salary < 7000;


/**
	between ~ and : 특정 구간 조회시 사용 -> and보다 해당 조건식을 많이 사용함
    형식 : select ~ from ~ where 컬럼명 between [시작구간] and [종료구간];
*/
-- 2016년 입사자들을 조회
select * from employee where hire_date between '2016-01-01' and '2016-12-31';

-- 사원 아이디가 S0001, S0010, S0020인 사원의 모든 정보를 조회
select * from employee where emp_id = 'S0001' or emp_id = 'S0010' or emp_id = 'S0020';

-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
select * from employee where dept_id = 'MKT' or dept_id = 'GEN' or dept_id = 'HRD';

/**
	in 연산자 : 하나의 컬럼에 추가되는 or 연산식을 대체하는 연산자
	형식 : select ~ from ~ where 컬럼명 in (조건1, 조건2, 조건3 ...) ;
*/
-- 사원 아이디가 S0001, S0010, S0020인 사원의 모든 정보를 조회
select * from employee where emp_id in ('S0001', 'S0010', 'S0020');

-- 부서 아이디가 MKT, GEN, HRD인 부서에 속한 모든 사원을 조회
select * from employee where dept_id in ('MKT', 'GEN', 'HRD');


/**
	와일드 카드 문자 : 특정 문자열 검색
    종류 : %(전체), _(한 문자)
    사용법 : like 연산자와 함께 조건식을 추가하여 사용됨. = 기호 사용 불가
    형식 : select ~ from ~ where 컬럼명 [와일드 카드 문자를 이용한 특정문자열 검색 조건]
*/
-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
select * from employee where eng_name like 'f%';

-- '한'씨 성을 가진 모든 사원들을 조회
select * from employee where emp_name like '한%';

-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회
select * from employee where email like '_a%';

-- 이메일 주소가 4자리인 모든 사원을 조회
select * from employee where email like '____@%';

-- 이름에 '삼'이 들어가는 모든 사원을 조회
select * from employee where emp_name like '%삼%';

/****************************************************
	내장함수(Built-in) : 숫자, 문자, 날짜 함수
    - 함수 테스트를 위한 테이블 dual
    - 형식 : select [함수 실행] from dual;
****************************************************/
-- 1. 숫자 함수 : abs(), rand(), trunc()...
-- (1) abs 함수 : 절대값 표현 함수
select 100, -100, abs(100), abs(-100) from dual;

-- (2) floor 함수 : 소수점을 버리는(삭제) 함수 -> 자릿수 지정 불가능
-- 	   truncate 함수 : 소수점을 삭제하는 함수 -> 자릿수 지정 가능 truncate(데이터, 자릿수)
--     ㄴ이전 버전에서는 trunc 명령어도 사용 가능
select 123.456, floor(123.456) from dual;
select 123.456, truncate(123.456, 0) as '소수점0' , truncate(123.456, 2) as '소수점2' from dual;

-- (3) rand 함수 : 임의의 수를 생성
select rand(), rand() * 1000, rand() * 100000 from dual;
--     정수만 출력하는 쿼리 생성
select 
	floor(rand()) rand1, truncate(rand() * 1000, 0) rand2, 
    truncate(rand() * 100000, 0) rand3, 
    truncate(rand() * 100000, 2) rand4 
from dual;

-- (4) mod 함수 : 모듈러 연산을 실행하는 함수 - mod(숫자데이터, 연산숫자)
select mod(100, 2) 짝수, mod(101, 2) 홀수 from dual;

-- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요
select mod(truncate(rand() * 1000, 0), 2) result from dual;

-- 사원 테이블에서 사원 아이디, 사원명, 부서 아이디, 입사일, 연봉, 인센티브(연봉의 20%)를 조회
-- 인센티브의 소수점 생략
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력(인센티브 포함)
-- 연봉 5000 미만의 사원들 정보만 출력
select emp_id, emp_name, dept_id, hire_date, ifnull(salary, 0) salary, ifnull(truncate(salary * 0.2, 0), 0) incentive from employee where salary < 5000 or salary is null;


-- 2. 문자 함수 : concat(), substring() ...
-- (1) concat(문자열, 문자열...) : 문자열 결합 
select concat('My', 'SQL', '-84') concat from dual;

-- 사원테이블의 사원명과 영어 이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 test_name으로 실행
-- 예시) 홍길동/hong
-- 영어 이름이 정해지지 않은 사원은 빈 문자열로 치환해서 실행
select emp_name, eng_name, concat(emp_name, '/', ifnull(eng_name, '')) as test_name from employee;

-- 사원 테이블의 사원 아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회
-- 사원 아이디, 사원 번호, 사원명, 입사일, 연봉, 퇴사일 컬럼리스트를 조회
-- 현재 근무 중인 사원은 현재 날짜 출력
select emp_id, concat(emp_id, '_', truncate(rand() * 100000, 0)) as emp_number, emp_name, hire_date, salary, ifnull(retire_date, now()) as retire_date from employee;

-- (2) substring(문자열, 위치, 추출 자릿수) : 문자열 추출 함수
select substring('대한민국 홍길동 만세 1234!!', 1, 4) 대한민국,
	   substring('대한민국 홍길동 만세 1234!!', 6, 3) 홍길동,
       substring('대한민국 홍길동 만세 1234!!', 10, 2) 만세,
       substring('대한민국 홍길동 만세 1234!!', 17, 2) '!!'
from dual;

-- 사원 테이블에서 사원 아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
select emp_id, emp_name, substring(hire_date, 1, 4) as hire_year, substring(hire_date, 6, 2) as hire_month, substring(hire_date, 9, 2) as hire_day, salary from employee;

-- 2015년도에 입사한 모든 사원들을 조회
select * from employee where substring(hire_date, 1, 4) = '2015';

-- 2018년도에 정보 시스템 부서에 입사한 모든 사원들을 조회
select * from employee where dept_id = 'SYS' and substring(hire_date, 1, 4) = '2018';

-- (3) left(문자열, 추출숫자), right(문자열, 추출숫자)
select left('대한민국 홍길동 만세 1234!!', 4) 대한민국, 
	   right('대한민국 홍길동 만세 1234!!', 2) '!!'
from dual;

-- 2015년도에 입사한 모든 사원들을 조회
select * from employee where left(hire_date, 4) = '2015';

-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(마지막 4자리) 조회
select emp_name, emp_id, left(hire_date, 4) as hire_date, right(phone, 4) as phone from employee;

-- (4) upper(대문자), lower(소문자)
select * from employee where upper(dept_id) = upper('sys');
-- 단, MySQL에서는 대소문자를 구분하지 않으므로 굳이 사용하지 않음

-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 조회
select emp_id, emp_name, upper(eng_name) eng_name, lower(email) email from employee;

-- (5) trim() : 공백 제거
select trim('          MySQL84') trim1, 
       trim('MySQL84              ') trim2, 
	trim('         MySQL     84        ') trim3
from dual;
-- 문자 사이의 공백은 문자열로 취급되어 삭제되지 않음

-- (6) format(문자열 또는 숫자, 소수점자리) : 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
select format(123456, 0) format1, format(123456, 2) format2 from dual; 

-- 사원 테이블의 사원 아이디, 사원명, 입사일, 연봉을 조회
-- 연봉 협상 전인 사원은 0으로 변환 후 조회 -> format을 사용할 경우 문자열로 데이터 타입이 바뀌므로 변환을 먼저 해주어야 함
-- 연봉은 3자리씩 콤마로 구분하여 출력
select emp_id, emp_name, hire_date, 
       concat(format(ifnull(salary, 0), 0), '만원') salary 
from employee; 

-- 사원 아이디, 사원명, 부서 아이디, 입사일, 연봉, 보너스(연봉의 0.05%) 컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력
select emp_id, emp_name, dept_id, hire_date, concat(format(ifnull(salary, 0), 0), ' 만원') as salary, concat(format(ifnull(salary, 0) * 0.05, 1), ' 만원') as bonus from employee;














show databases; -- 모든 데이터베이스 목록을 출력
use hrdb2019;
select database();
show tables;
select * from employee;
select * from department;
select * from unit;
select * from vacation;