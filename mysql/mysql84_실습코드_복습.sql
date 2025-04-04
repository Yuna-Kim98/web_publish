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
show databases;
use hrdb2019;
select database();
show tables;

select distinct dept_id from employee;

-- 완전히 중복된 데이터의 경우에만 적용됨


/**
	order by : 데이터 정렬(오름차순, 내림차순)
    가장 마지막에 실행
    형식 : select ~ from ~ where ~ order by 컬럼리스트(정렬 기준, 반드시 출력되는 데이터 중 하나여야 함) [asc/desc];
*/
-- 사원 아이디, 사원명, 입사일, 연봉을 조회
select emp_id, emp_name, hire_date, salary from employee;

-- 사원 아이디 기준 오름차순, 입사일 기준 내림차순
select emp_id, emp_name, hire_date, salary from employee order by emp_id asc;

-- 급여를 기준으로 오름차순 정렬 후 조회
select emp_id, emp_name, hire_date, salary from employee order by salary asc;

-- eng_name이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
select * from employee where eng_name is null order by hire_date asc;

-- 퇴직한 사원들을 급여가 높은 순으로 조회
select * from employee where retire_date is not null order by salary desc;

-- 정보시스템 부서의 사원들 중 급여가 높은 순으로 조회
select * from employee where dept_id = 'SYS' order by salary desc; 

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
select * from employee order by hire_date desc, salary asc;

/**
	특정 범위의 데이터 검색 : where [조건절 + 비교연산자]
    형식 : select [컬럼리스트] from [테이블명] where [컬럼명 비교연산자 조건절]
*/
-- 사원 중 연봉이 5000 이상인 사원들을 조회
select * from employee where salary >= 5000;

-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회
-- date 타입은 표현은 문자처럼, 처리방식은 숫자처럼
select * from employee where hire_date < '2016-01-01';

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000 이상인 사원들을 조회
-- and(~이고) : 두 개의 조건이 모두 만족한 데이터만 조회
select * from employee where hire_date > '2015-01-01' and salary >= 6000;

-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회
-- or(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
select * from employee where hire_date > '2015-01-01' or salary >= 6000;

-- 2015년 1월 1일부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
select * from employee where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';

-- 연봉 구간이 5000 이상 7000 미만인 사원들을 모두 조회
select * from employee where salary >= 5000 and salary < 7000;


/**
	between ~ and : 특정 구간 조회시 사용 -> and보다 해당 조건식을 많이 사용함
    형식 : select ~ from ~ where 컬럼명 between [시작구간] and [종료구간];
*/
-- 2016년 입사자들을 조회
select * from employee where hire_date between '2016-01-01' and '2016-12-31';


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
    형식 : select ~ from ~ where 컬럼명 like [와이드 카드 문자를 이용한 특정문자열 검색 조건]
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
select abs(-100) from dual;


-- (2) floor 함수 : 소수점을 버리는(삭제) 함수 -> 자릿수 지정 불가능
-- 	   truncate 함수 : 소수점을 삭제하는 함수 -> 자릿수 지정 가능 truncate(데이터, 자릿수)
--     ㄴ이전 버전에서는 trunc 명령어도 사용 가능
select floor(123.456), truncate(123.456, 0) from dual;


-- (3) rand 함수 : 임의의 수를 생성
select rand() from dual;

--     정수만 출력하는 쿼리 생성
select floor(rand() * 10) from dual;


-- (4) mod 함수 : 모듈러 연산을 실행하는 함수 - mod(숫자데이터, 연산숫자)
select mod(100, 2) from dual;

-- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요
select mod(truncate(rand() * 1000, 0), 2) from dual;

-- 사원 테이블에서 사원 아이디, 사원명, 부서 아이디, 입사일, 연봉, 인센티브(연봉의 20%)를 조회
-- 인센티브의 소수점 생략
-- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력(인센티브 포함)
-- 연봉 5000 미만의 사원들 정보만 출력
select emp_id, emp_name, dept_id, hire_date, salary, truncate((salary * 0.2), 0) as incentive from employee where salary < 5000;


-- 2. 문자 함수 : concat(), substring() ...
-- (1) concat(문자열, 문자열...) : 문자열 결합 
select concat('MySQL', '84') from dual;

-- 사원테이블의 사원명과 영어 이름을 결합하여 새로운 컬럼을 생성하고 컬럼명은 test_name으로 실행
-- 예시) 홍길동/hong
-- 영어 이름이 정해지지 않은 사원은 빈 문자열로 치환해서 실행
select concat(emp_name, '/', ifnull(eng_name, '')) test_name from employee;

-- 사원 테이블의 사원 아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회
-- 사원 아이디, 사원 번호, 사원명, 입사일, 연봉, 퇴사일 컬럼리스트를 조회
-- 현재 근무 중인 사원은 현재 날짜 출력
select emp_id, concat(emp_id, truncate(rand() * 100000, 0)) 사원번호, emp_name, hire_date, salary, ifnull(retire_date, curdate()) from employee;


-- (2) substring(문자열, 위치, 추출 자릿수) : 문자열 추출 함수
select substring('1234', 1, 2) from dual;

-- 사원 테이블에서 사원 아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
select emp_id, emp_name, substring(hire_date, 1, 4) 입사년도, substring(hire_date, 6, 2) 입사월, substring(hire_date, 9, 2) 입사일, salary from employee;

-- 2015년도에 입사한 모든 사원들을 조회
select * from employee where substring(hire_date, 1, 4) = 2015; 

-- 2018년도에 정보 시스템 부서에 입사한 모든 사원들을 조회
select * from employee where substring(hire_date, 1, 4) = 2018 and dept_id = 'SYS';


-- (3) left(문자열, 추출숫자), right(문자열, 추출숫자)
select left('hello', 3), right('hello', 2) from dual;

-- 2015년도에 입사한 모든 사원들을 조회
select * from employee where left(hire_date, 4) = 2015;

-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(마지막 4자리) 조회
select emp_name, dept_id, hire_date, right(phone, 4) from employee;


-- (4) upper(대문자), lower(소문자)
select upper('hello'), lower('HELLO') from dual;
-- 단, MySQL에서는 대소문자를 구분하지 않으므로 굳이 사용하지 않음

-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 조회
select upper(eng_name) eng_name, upper(email) email from employee;


-- (5) trim() : 공백 제거
select trim('                 hello'), trim('hello        '), trim('    hel     lo    ') from dual;
-- 문자 사이의 공백은 문자열로 취급되어 삭제되지 않음


-- (6) format(문자열 또는 숫자, 소수점자리) : 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
select format(truncate(rand() * 100000000, 0), 0) from dual;

-- 사원 테이블의 사원 아이디, 사원명, 입사일, 연봉을 조회
-- 연봉 협상 전인 사원은 0으로 변환 후 조회 -> format을 사용할 경우 문자열로 데이터 타입이 바뀌므로 변환을 먼저 해주어야 함
-- 연봉은 3자리씩 콤마로 구분하여 출력
select emp_id, emp_name, hire_date, format(ifnull(salary, 0), 0) from employee;

-- 사원 아이디, 사원명, 부서 아이디, 입사일, 연봉, 보너스(연봉의 0.05%) 컬럼들을 조회
-- 연봉과 보너스 컬럼은 3자리 콤마로 구분하여 출력 후 '만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력
select emp_id, emp_name, dept_id, hire_date, concat(format(salary, 0), '만원') salary, concat(format(salary * 0.05, 0), '만원') as bonus from employee;


-- 3. 날짜 함수 : curdate(), now(), sysdate()
-- (1) curdate() : 현재 시스템(현재 사용 중인 PC) 날짜를 출력. 연월일만 출력
select curdate();

-- (2) now(), sysdate() : 현재 시스템 날짜를 출력. 연월일 시분초 출력
select now(), sysdate();


-- 4. 형변환 함수 : cast(), convert() -> convert의 경우 오래된 함수로 요즘은 잘 사용하지 않음
-- cast(변경데이터 as 변경할 데이터타입)
select 12345 숫자, cast(12345 as char) 문자;

-- 입력폼에서 '20150101' 데이터 날짜를 가진 사원을 조회
-- MySQL에서는 자동으로 문자를 날짜 타입으로 변환해 검색해주지만, 다른 데이터베이스 프로그램에서는 적용되지 않음
select * from employee where hire_date = cast('20150101' as date);

-- floor 함수를 적용한 cast 함수
select floor('12-34-5') 문자, floor(cast('12-34-5' as unsigned integer)) 정수 from dual;


-- 5. 문자열 치환 함수 : replace(문자열, old, new)
select replace('12-34-56', '-', '/') from dual;

-- 사원 테이블의 입사일 포맷 변경 '2015-01-01' --> '2015/01/01'
select replace(hire_date, '-', '/') hire_date from employee;


/***********************************************************
	그룹함수(집계함수) : sum(), avg(), min(), max(), count() ...
    - group by : 그룹 함수를 적용하기 위해 일반컬럼을 그룹핑 하는 단위
    - having : 그룹함수의 조건절을 적용하는 구문
************************************************************/
-- 1. sum(숫자 또는 숫자 칼럼)
-- 사원 테이블에서 모든 사원의 연봉 총합을 조회
-- 3자리 구분, '만원' 단위 추가
select concat(format(sum(salary), 0), '만원') 연봉총합 from employee;


-- 2. avg(숫자, 숫자컬럼) : 평균값 출력
-- 사원들의 총연봉, 평균연봉 조회
-- 3자리 구분, '만원' 단위 추가
-- 소수점 1자리까지 유지
-- format 대신 truncate 사용 가능. format은 사용시 자동으로 반올림이 됨
select concat(format(sum(salary), 0), '만원') 총연봉, concat(format(avg(salary), 0), '만원') 평균연봉 from employee;


-- 3. min(숫자, 숫자컬럼) : 최솟값 출력
-- 사원들의 총연봉, 평균 연봉, 최소 연봉을 출력
-- 3자리 구분, 만원 추가, 소수점 자리 생략
select concat(format(sum(salary), 0), '만원') 총연봉, 
	   concat(format(avg(salary), 0), '만원') 평균연봉, 
       concat(format(min(salary), 0), '만원') 최소연봉
from employee;


-- 4. max(숫자, 숫자컬럼) : 최댓값 출력
-- 사원들의 총연봉, 평균 연봉, 최대 연봉을 출력
-- 3자리 구분, 만원 추가, 소수점 자리 생략
select concat(format(sum(salary), 0), '만원') 총연봉,
       concat(format(avg(salary), 0), '만원') 평균연봉,
       concat(format(max(salary), 0), '만원') 최대연봉
from employee;


-- 5. count(컬럼명) 
-- 테이블의 row count를 출력
-- null을 포함한 데이터의 카운트는 계산하지 않는다
select count(*) from employee;

-- 총사원수, 퇴직한 사원수, 현재사원수를 조회
-- 인원수 뒤에 '명'단위 추가
select concat(count(*), '명') 총사원수, concat(count(retire_date), '명') '퇴직한 사원수', concat(count(*) - count(retire_date), '명') '현재 사원수' from employee;

-- 사원 테이블에서 정보시스템 부서의 사원수를 조회
select concat(count(*), '명') '정보시스템 부서 사원수' from employee where dept_id = 'SYS';

-- 2015년도에 입사한 사원수와 총연봉 조회
select concat(count(*), '명') '2015년 입사 사원수', concat(format(sum(salary), 0), '만원') 총연봉 from employee where left(hire_date, 4) = '2015'; 

-- 가장 최근 입사자와 오래된 입사자의 입사일 조회
select max(hire_date), min(hire_date) from employee;

-- HRD 부서 기준 최근 입사자와 오래된 입사자의 입사일 조회
select max(hire_date) '가장 최근 입사자', min(hire_date) '가장 오래된 입사자' from employee;

-- 마케팅부서 기준 가장 낮은 연봉과 높은 연봉을 조회
select min(salary), max(salary) from employee where dept_id = 'MKT';


-- 6. group by ~ 적용 : ~별(부서별, 월별 ...) 그룹 함수를 적용해야 하는 경우 사용
-- group by에 사용된 일반 컬럼은 그룹 함수와 함께 조회 가능
-- 사원 테이블에서 부서별 사원수 조회

-- 입사년도별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
select left(hire_date, 4) 입사년도,
	sum(salary) 총연봉, avg(salary) 평균연봉, min(salary) 최저연봉, max(salary) 최대연봉, count(*) 입사사원수
    from employee
    group by left(hire_date, 4);
    
-- 부서별 총연봉, 평균연봉, 최저연봉, 최고연봉, 입사사원수를 조회
select dept_id 부서,
	sum(salary) 총연봉, avg(salary) 평균연봉, min(salary) 최저연봉, max(salary) 최대연봉, count(*) 입사사원수
    from employee
    group by dept_id;


-- 7. having 절 : group by를 통해 그룹핑한 결과에 조건절을 추가하는 구문
-- 부서별 평균 연봉 조회
-- null값이 포함된 경우 0으로 변환
-- 소수점 자리는 절삭
-- 부서 아이디 함께 출력
-- 부서 평균연봉이 6000만원 이상인 부서만 출력
-- 평균연봉 기준 오름차순으로 정렬
-- group by까지 작업을 끝낸 후 having이 실행되기 때문에 having 절에서는 alias 사용 가능
select dept_id 부서,
	concat(format(avg(ifnull(salary, 0)), 0), '만원') '부서별 평균 연봉'
    from employee
    group by dept_id
    having avg(salary) >= 6000
    order by avg(salary) asc;

-- 입사년도 기준 총연봉, 평균연봉을 조회
-- 총연봉이 2500 이상인 사원들만 출력
-- null값을 포함한 경우 0으로 초기화
select left(hire_date, 4) 입사년도,
	concat(format(sum(ifnull(salary, 0)), 0), '만원') 총연봉,
	concat(format(avg(ifnull(salary, 0)), 0), '만원') 평균연봉
from employee
group by left(hire_date, 4)
having sum(salary) >= 2500;

-- 부서별 남녀사원의 사원수 조회
select dept_id 부서, gender 성별,
	count(*) 사원수
from employee
group by dept_id, gender;


-- 8. rollup 함수 : reporting을 위한 함수
-- 형식 : select [컬럼리스트]  from [테이블명] where [조건절] group by [그룹핑 컬럼] with rollup;
-- 부서별 총연봉을 조회, 연봉이 정해지지 않은 부서는 포함하지 않음
select if(grouping(dept_id), '부서총합계', ifnull(dept_id, '_')) 부서,
	concat(format(sum(ifnull(salary, 0)), 0), '만원') 부서별총연봉
from employee
where salary is not null
group by dept_id
with rollup;

-- 입사년도별 평균연봉을 조회
-- 연봉이 정해지지 않은 부서는 포함하지 않음
-- 평균 연봉이 4000 이상인 입사년도만 출력
-- 3자리 구분, '만원' 단위 추가
-- 리포팅 함수 사용
select left(hire_date, 4) 입사연도,
	concat(format(avg(salary), 0), '만원') 평균연봉
from employee
group by left(hire_date, 4)
with rollup
having avg(salary) >= 4000;

show tables;
-- 사원들의 휴가사용 내역 조회
select * from vacation;

-- 사원 아이디별 휴가 사용 횟수 조회
-- 총 휴가 사용일 기준으로 내림차순 정렬
select emp_id 사원아이디,
	count(*) 휴가상신횟수,
    sum(duration) 총휴가사용일
from vacation
group by emp_id
order by count(*) desc;

-- 2016 ~ 2017년도 사이에 사원 아이디별 휴가사용 횟수 조회
-- 총휴가사용일 기준으로 내림차순 정렬
select emp_id '사원 아이디',
	sum(duration) 총휴가사용일
from vacation
where left(begin_date, 4) between 2016 and 2017
group by emp_id with rollup
order by sum(duration) desc;

select * from vacation;


/******************************************
	DDL : 테이블 생성, 수정, 삭제 작업 진행
    명령어 : create, alter, drop, truncate
*******************************************/
-- 1. 테이블 생성 : create
-- 형식 : create table [생성할 테이블명] (컬럼명 데이터타입(크기) [제약사항], ...) 
-- 동일한 이름의 table 생성 불가능

show databases;
use hrdb2019;
select database();
show tables;

-- test 테이블 생성 및 제거
show tables;
create table test(
	emp_id char(4)
);
desc test;
select * from test;
drop table test;

-- data type(데이터 타입) : 숫자, 문자, 날짜(시간)
-- 1. 숫자 데이터 타입
-- (1) 정수 : smallint(2), int(4) -> 가장 기본적인 데이터 타입, bigint(8)
-- (2) 실수 : float(4), double(8) -> default 설정
-- (3) 문자 : char(크기:고정형), varchar(크기:가변형)
-- 			예) name char(20), name varchar(20)
-- (4) 텍스트 : text - 긴 문장을 저장하는 데이터 타입
-- (5) blob 타입 : blob - 큰 바이너리 타입의 데이터 저장
-- (6) 날짜 : date - 년, 월, 일만 저장, datetime : 시, 분, 초까지 저장
-- 			 데이터타입에 맞는 날짜 함수 호출 필요
desc employee;
select * from employee;

-- emp 테이블 생성
-- 컬럼리스트 : emp_id 고정형(4), emp_name 가변형(10), retire_date 날짜/시간, salary 정수(5)
create table emp(
	emp_id 	char(4),
    emp_name 	varchar(10),
    retire_date 	datetime,
    salary	int(5)
);
show tables;
desc emp;

-- dept  테이블 생성: dept_id 고정형(3), dept_name 가변형(10), loc 가변형(20)
create table dept(
	dept_id char(3),
    dept_name varchar(10),
    loc varchar(20)
);
show tables;
desc dept;

-- emp, dept 테이블의 모든 데이터 조회
select * from emp;
select * from dept;


-- 2. 테이블 생성(복제) : create table ~ as ~ select 
-- 물리적으로 메모리 생성 -> 테스트가 끝나고 나면 삭제하는 것이 좋음
-- 기본키, 참조키 등의 제약사항은 복제 불가능. 복제 후 alter table 명령으로 제약사항 추가
/* 형식 : create table [생성(복제)할 테이블명]
		 as
         select [컬럼리스트]
			from [테이블명]
			where [조건절];
         -> 첫 글자를 따 cas라고 부름
*/
-- 정보시스템 부서의 사원들만 별도로 테이블 복제
-- 테이블명 : employee_sys
create table employee_sys
as
select * from employee where dept_id = 'SYS';
show tables;
select * from employee_sys;
desc employee;
-- emp_id	char(5)	NO  PRI
-- emp_name	varchar(4)	NO
-- eng_name	varchar(20)	YES
desc employee_sys;
-- emp_id	char(5)	NO -> 제약 사항 복제 안됨
-- emp_name	varchar(4)	NO
-- eng_name	varchar(20)	YES

-- 퇴직한 사원들을 복제하여 employee_retire 테이블로 관리
show tables;
create table employee_retire
as
select * from employee where retire_date is not null;
select * from employee_retire;

-- 2015년, 2017년 입사자들을 복제하여 별도로 관리
-- 테이블명 : employee_2015_2017
create table employee_2015_2017
as
select * from employee where left(hire_date, 4) = 2015 and left(hire_date, 4) = 2017;
show tables;


/*********************************
	테이블 제거 : drop table
    형식 : drop table [제거할 테이블명]
    DDL 명령어는 명령 즉시 실행된다.
    복구 불가능.
**********************************/
show tables;
-- employee_2015_2017 테이블 제거
drop table employee_2015_2017;

-- employee_retire 테이블 제거
drop table employee_retire;

-- 재직 중인 사원 테이블 생성(복제)
-- employee_working
create table employee_working
as
select * from employee where retire_date is null;
show tables;


/***********************************************
	테이블 데이터 제거 : truncate table
    형식 : truncate table [제거할 데이터를 가진 테이블명]
    DDL 명령어는 명령 즉시 실행된다.
    복구 불가능.
************************************************/
show tables;
select * from employee_working;

-- employee_working 테이블의 모든 데이터(row)를 제거
select * from employee_working;
truncate table employee_working;


/**************************************************************
	테이블 구조 변경 : alter table
    형식 : alter table [변경할 테이블병]
    1) 컬럼 추가 : add column [new 컬럼명 데이터타입(크기) 제약사항]
    2) 컬럼 변경 : modify column [변경할 컬럼명 데이터타입(크기) 제약사항]
    3) 컬럼 삭제 : drop column [삭제할 컬럼명]
***************************************************************/
show tables;
select * from employee_working;
-- 데이터가 없는 경우 컬럼 추가, 변경, 삭제하는 명령어를 제약사항 없이 사용할 수 있음
-- 그러나 데이터가 있을 경우 제약사항이 발생함. 예를 들어 emp_id가 5글자로 정의되어 있을 경우, 데이터 크기를 늘일 수는 있으나 줄일 수는 없는 제약사항이 생김. 
-- 이는 데이터 유실을 방지하기 위함으로 모든 데이터베이스 프로그램에 동일하게 적용됨.
desc employee_working;

-- employee_working 테이블에 bonus 컬럼 추가, 데이터 타입은 int, null값 허용
alter table employee_working
add column bonus int;
desc employee_working;

-- employee_working 테이블에 dname(부서명) 추가, 데이터타입은 가변형(10), null값 허용
alter table employee_working
add column dname varchar(10);
desc employee_working;

-- employee_working 테이블의 이메일 주소 컬럼 크기를 30으로 수정
alter table employee_working
modify column email varchar(30);
desc employee_working;

-- employee_working 테이블의 salary 컬럼을 실수타입(double)로 수정
alter table employee_working
modify column salary double;
desc employee_working;

select * from employee_sys;
-- employee_sys 테이블의 이메일 주소 컬럼 크기를 가변형(10)으로 수정
alter table employee_sys modify column email varchar(10); -- 1개의 데이터가 유실될 가능성이 있으므로 에러 발생
desc employee_sys;
select count(*) from employee_sys;

-- employee_working 테이블의 bonus 컬럼 삭제
-- 컬럼 삭제는 한번에 한개씩만 가능!
alter table employee_working drop column bonus;
desc employee_working;

-- employee_working 테이블의 email, dname 컬럼 삭제
alter table employee_working drop column email;
alter table employee_working drop column dname;
desc employee_working;

-- employee_working 테이블 제거
drop table employee_working;
show tables;

-- employee 테이블에서 HRD 부서에 속한 사원들의 사원 아이디, 사원명, 입사일, 연봉, 보너스(연봉의 10%) 정보를 별칭을 사용하여 조회한 후 employee_hrd 이름으로 복제
create table employee_hrd
as
select emp_id, emp_name, hire_date, salary, salary*0.1 bonus from employee where dept_id = 'HRD';
show tables;
select * from employee_hrd;


/*****************************************************
	DML : insert(c), select(r), update(u), delete(d)
******************************************************/
-- 1. insert : 데이터 추가
-- 형식 : insert into [테이블명](컬럼리스트) values(데이터리스트...);

-- S001, 홍길동, 현재날짜, 1000 데이터 추가
show tables;
select * from emp;
insert into emp(emp_id, emp_name, retire_date, salary) values('S001', '홍길동', curdate(), 1000);

-- S002, 홍길순, 현재날짜, 2000 데이터 추가
insert into emp(emp_id, emp_name, retire_date, salary) values('S002', '홍길순', now(), 1000);
select * from emp;

-- S003, 김철수, 현재날짜, 3000 데이터 추가
-- 컬럼리스트 생략시에는 데이터 생성시 컬럼순서대로 insert가 실행된다.
insert into emp values('S003', '김철수', now(), 3000);
select * from emp;

-- S004, 이영희, 현재날짜, 연봉협상 전 데이터 추가
insert into emp values('S004', '이영희', now(), null);

-- employee 테이블에서 정보시스템 부서의 사원들 정보 중 사원 아이디, 사원명, 입사일, 부서아이디, 연봉을 복제하여 employee_sys 테이블 생성
-- 2016년 이전에 입사한 사원들
create table employee_sys
as
select emp_id, emp_name, hire_date, dept_id, salary from employee where left(hire_date, 4) < 2016 and dept_id = 'SYS';
show tables;
select * from employee_sys;

-- employee_sys 테이블에 2016년도 이후에 입사한 정보시스템 부서 사원 정보 추가
-- 서브쿼리를 이용한 데이터 추가
insert into employee_sys(emp_id, emp_name, hire_date, dept_id, salary)
select emp_id, emp_name, hire_date, dept_id, salary from employee
where left(hire_date, 4) >= 2016 and dept_id = 'SYS';
select * from employee_sys;

-- dept 테이블 구조 확인 및 데이터 추가
show tables;
desc dept;

-- sys, 정보시스템, 서울
-- mkt, 마케팅, 뉴욕
-- hrd, 인사, 부산
-- acc, 회계, 정해지지않음
insert into dept(dept_id, dept_name, loc) values('SYS', '정보시스템', '서울');
insert into dept(dept_id, dept_name, loc) values('MKT', '마케팅', '뉴욕');
insert into dept(dept_id, dept_name, loc) values('HRD', '인사', '부산');
insert into dept(dept_id, dept_name, loc) values('ACC', '회계', null);
select * from dept;

-- 컬럼리스트를 명시하지 않았을 시 발생할 수 있는 실수
insert into dept values('영업', null, 'sales');
select * from dept;

-- 에러 발생!! - 컬럼리스트와 매칭 카운트가 다름
insert into dept(dept_name, loc) values('영업', null, 'sales');

-- 에러 발생!! - loc의 데이터 크기가 맞지 않음
insert into dept(dept_name, loc, dept_id) values('영업', null, 'sales');
-- solution



/******************************************************
	constraint(제약사항) : 데이터 무결성의 원칙을 적용하기 위한 규칙
    - unique : 유니크(중복방지) 제약
    - not null : null값을 허용하지 않는 제약
    - primary key(기본키) : unique + not null 제약을 지정
    - foreign key(= multiple, 참조키) : 타 테이블을 참조하기 위한 제약 
    - default : 기본으로 저장되는 데이터를 정의하는 제약
    
    사용형식 : create table + 제약사항
			alter table + 제약사항
    - 단독으로 사용 불가능
*******************************************************/
-- DB의 스키마 구조를 통해 각 테이블의 제약사항 확인
-- information_schema.table_constraints


show tables;
desc emp;

-- emp_const 테이블 생성
-- 기본키 제약 : emp_id 
-- 유니크 제약 : emp_name
-- not null 제약 : salary
create table emp_const(
	emp_id char(4) primary key,
    emp_name varchar(10) unique,
    salary int not null
);
show tables;
desc emp_const;

alter table emp_const add column hire_date datetime;

-- emp_const 테이블에 S001, 홍길동, 현재날짜, 1000 데이터 추가
insert into emp_const(emp_id, emp_name, salary, hire_date) values('S001', '홍길동', 1000, now());
select * from emp_const;

-- emp_const 테이블에 S001, 김철수, 현재날짜, 1000 데이터 추가 - 제약사항 확인용
-- 에러 발생 - S001은 유니크 제약이 있고 이미 존재하는 데이터이기 때문에 중복되는 데이터는 들어갈 수 없음
-- primary 키로 설정되어 있는 컬럼은 입력폼에서 아이디 중복체크 기능을 통해 확인함 
insert into emp_const(emp_id, emp_name, hire_date, salary) values('S001', '김철수', now(), 1000);
-- solution : 중복된 'S001'을 'S002'로 변경 후 실행
insert into emp_const(emp_id, emp_name, salary, hire_date) values('S002', '김철수', 1000, now());
select * from emp_const;

-- 에러 발생. emp_id는 not null 제약이 있기 때문에 null값이 들어갈 수 없음
insert into emp_const(emp_id, emp_name, hire_date, salary) values(null, '김철수', now(), 1000);
-- solution : null 또는 중복된 값을 배제하여 진행 
insert into emp_const values('S003', '김철수', 1000, now());

-- 에러 발생. emp_name에 유니크 제약이 있기 때문에 이미 사용 중인 '김철수'는 사용 불가능
insert into emp_const(emp_id, emp_name, hire_date, salary) values('S003', '김철수', now(), 1000);
-- solution : 이미 저장된 '김철수' 대신 유니크한 이름으로 진행
insert into emp_const values('S003', '이영희', 1000, now());
select * from emp_const;

-- emp_name에 null값 추가
-- 유니크 제약만 있기 때문에 null값 허용
insert into emp_const(emp_id, emp_name, hire_date, salary) values('S004', null, now(), 1000);
select * from emp_const;

-- emp_name 컬럼에 null은 중복 저장 가능 -> 오라클의 경우 null값도 중복을 체크함
insert into emp_const(emp_id, emp_name, hire_date, salary) values('S005', null, now(), 2000);
select * from emp_const;

desc emp_const;

-- 에러 발생. salary에는 유니크 제약이 있기 때문에 null값 저장 불가능
insert into emp_const(emp_id, emp_name, hire_date, salary) values('S006', '스미스', now(), null);
-- solution
insert into emp_const(emp_id, emp_name, hire_date, salary) values('S006', '스미스', now(), 2000);
select * from emp_const;

-- emp_const2 테이블 생성 
-- emp_id : primary key
-- emp_name : unique
create table emp_const2(
	emp_id char(4) primary key,
    emp_name varchar(10) unique
);
show tables;
desc emp_const2;

-- 25. 01. 03
-- 상품 테이블 생성 : product_test
-- 컬럼 : pid - int primary, pname - varchar(30) null 허용x, price - int null 허용, company - varchar(20) null 허용
-- **auto_increment : 자동 번호 생성 ==> 기본키
--   오라클 : sequence


-- 키보드, 100, 삼성 데이터 추가


-- 키보드, 200, 삼성 데이터 추가


-- 모니터, 1200, 엘지 데이터 추가

-- pid에 auto_increment를 설정했기 때문에 따로 작성하지 않아도 자동으로 생성, 등록됨 


-- 2. update : 데이터 수정
-- 형식 : update [테이블명] set [컬럼명='업데이트 데이터', ...] where [조건절];
-- 조건절이 생략될 경우 모든 테이블에 반영되므로 반드시 조건절을 작성해야 한다.


-- const_test 테이블에 홍길동 사원의 연봉 추가(업데이트) : 3500


-- 김철수 사원의 연봉 추가(업데이트) : 5000


show tables; 
-- employee 테이블을 복제하여 cp_employee 테이블 생성
-- emp_id 컬럼에 기본키 제약 추가
-- 기본키 제약을 줄 때 한글이나 유니코드는 사용하지 않는 것이 좋음 -> 데이터가 2바이트 혹은 3바이트이기 때문에 제대로 인식하지 못할 수 있음
-- 중복 없이 유니크하면서 null값이 허용되지 않는 컬럼에 기본키 제약을 추가

-- 복제한 테이블에 제약 사항 추가


-- phone, email 컬럼에 unique 제약 추가


-- cp_employee 테이블의 phone에 추가된 제약 사항 삭제


select * from cp_employee;
-- sys인 부서 아이디를 '정보'로 수정 

-- Error Code: 1175. You are using safe update mode -> 업데이트 방지 모드
-- safe update mode 설정 변경 필요 


-- 2016년도 입사한 사원들의 입사일을 현재 날짜로 수정


-- 강우동 사원의 영어 이름을 'kang', 퇴사일을 현재날짜로, 부서는 SYS로 수정

-- 트랜잭션 처리방식이 auto commit이 아닌 경우 
-- 작업 완료 : commit, 작업 취소 : rollback 


-- 3. delete : 데이터 삭제
-- 트랜잭션 관리법에 따라 삭제된 데이터를 복원할 수 있음. auto commit 상태에서는 불가능. 
-- 형식 : delete from [테이블명] where [조건절];
commit; -- 현재까지 진행한 모든 작업을 db에 반영. 여기서부터 트랜잭션을 시작 
select * from cp_employee;

-- 강우동 사원 삭제
delete from cp_employee where emp_id = 'S0003';

-- 김삼순 사원 삭제
commit;
delete from cp_employee where emp_id = 'S0004';
select * from cp_employee where emp_id = 'S0004';
rollback; -- commit 이후의 작업을 취소
/** 프로그램 개발을 통해 실시간 접속시에는 auto commit으로 실행됨 **/

-- 연봉이 7000 이상인 모든 사원 삭제

-- cp_employee 테이블에서 정보시스템 부서 직원들 모두 삭제

-- cp_employee 테이블에서 2017년 이후 입사자들을 모두 삭제(터미널)

/* 복습은 터미널창으로 할 것! */


/* 25. 01. 06 */
/*******************************************************
	하나 이상의 테이블 생성 및 연결, 조회
    - 생성 : create table
    - 연결 : foreign key(참조키) 제약 추가
    - 조회(select) : join, subquery
    ** 데이터베이스의 테이블 설계 과정 : 데이터베이스 모델링
       -> 데이터 정규화 -> ERD(Entity Relationship Diagram)
********************************************************/
show tables;
desc employee;

-- ERD : Database > Reverse Engeering ...
-- 정규화 : 데이터베이스 저장 효율성을 높이기 위한 방식 - 데이터 중복 배제, 테이블 분리...
-- 반정규화 : 분리된 테이블을 하나로 합치는 방식 

-- [kk전자의 인사관리 시스템 : 사원테이블 생성 - 정규화x]
-- 부서 테이블(kk_department) : 부서 아이디, 부서명, 부서위치 
show tables;


insert into kk_department(dept_id, dept_name, loc) values('SYS', '정보시스템', '서울시 서초구');
insert into kk_department(dept_id, dept_name, loc) values('HRD', '인사관리', '서울시 종로구');
insert into kk_department(dept_id, dept_name, loc) values('ACC', '회계관리', '서울시 강남구');
select * from kk_department;

-- 사원 테이블(kk_employee) 데이터 : 사원 아이디(kid, 기본키), 사원명, 주소, 입사일, 연봉, 부서 아이디
show tables;


-- 에러 발생
/* Error Code: 1452. Cannot add or update a child row: 
	a foreign key constraint fails 
    (`hrdb2019`.`kk_employee`, CONSTRAINT `fk_kk_employee` FOREIGN KEY (`dept_id`) REFERENCES `kk_department` (`dept_id`)) */
insert into kk_employee(kname, address, hire_date, salary, dept_id) values('스미스', '뉴욕', curdate(), '5000', 'HR');
-- 참조키 제약이 있는 경우 반드시 참조되는 테이블에 있는 데이터와 이름, 형식이 일치해야 한다. 그렇지 않으면 에러 발생

-- solution : 참조하는 kk_department 테이블의 dept_id 확인


/*
	[학사관리 시스템 설계]
    1. 과목(subject) 테이블은
		컬럼 : sid(과목 아이디), sname(과목명), sdate(등록일 : 년월일 시분초)
        sid는 기본키, 자동으로 생성한다.
	2. 학생(student) 테이블은 반드시 하나 이상의 과목을 수강해야 한다.
		컬럼 : stid(학생 아이디) 기본키, 자동생성
			  sname(학생명) null 허용x
              gender(성별) 문자 1자, null 허용x
              sid(과목 아이디)
              stdate(등록일자 : 년월일 시분초)
	3. 교수(professor) 테이블은 반드시 하나 이상의 과목을 강의해야 한다.
		컬럼 : pid(교수 아이디) 기본키, 자동 생성
			  name(교수명) null 허용x
              sid(과목 아이디)
              pdate(등록일자 : 년월일 시분초)
*/

-- 과목 테이블


-- 학생 테이블


-- 교수 테이블


-- 과목 데이터 추가
desc subject;
insert into subject(sname, sdate) values('HTML', now());
insert into subject(sname, sdate) values('JavaScript', now());
insert into subject(sname, sdate) values('MySQL', now());
select * from subject;

-- 학생 데이터 추가
desc student;
insert into student(sname, gender, sid, sdate) values('홍길동', 'M', '1', now());
insert into student(sname, gender, sid, sdate) values('김철수', 'M', '2', now());
insert into student(sname, gender, sid, sdate) values('이영희', 'F', '3', now());
insert into student(sname, gender, sid, sdate) values('테스트', 'F', '2', now());
select * from student;

-- 교수 데이터 추가
desc professor;
insert into professor(name, sid, pdate) values('이순신', '1', now());
insert into professor(name, sid, pdate) values('스미스', '2', now());
insert into professor(name, sid, pdate) values('강감찬', '3', now());
select * from professor;

-- HTML 과목의 정보를 조회
select * from subject where sname = 'HTML';

/************************************************************************
	join : 두 개 이상의 테이블을 연동 -> 테이블 갯수 제한x
    - 두 개 이상의 테이블을 조합하여 집합을 구성 
    - cross(catesian) join(합집합) 
		: 두 개 테이블이 독립적으로 생성된 경우, join 연결고리 x,
		  professor & student -> professor * student
	- inner(equi) join(교집합) -> 보통 그냥 join이라고 함
		: 두 개의 테이블을 join 연결고리를 통해 연동
*************************************************************************/
select * from professor;
select * from student;

-- 1. cross(catesian) join(합집합)  형식
-- select (컬럼리스트) from(테이블명1 [테이블 별칭], 테이블명2 [테이블 별칭], ...) where [조건절]


-- professor, student, department 조인하여 모든 데이트 조회


-- ansi sql 방식(sequl :: ms-sql)
select * from professor cross join student cross join department;


-- 2. inner join(교집합)  형식
-- select (컬럼리스트) from(테이블명1 [테이블 별칭], 테이블명2 [테이블 별칭], ...) 
-- where [테이블명1.조인컬럼 = 테이블명2.조인컬럼]
-- and [조건절 ~]
select * from subject;
select * from professor;
select * from subject s, professor p where s.sid = p.sid;

insert into professor(name, sid, pdate) values('안중근', 1, now());
insert into subject(sname, sdate) values('React', now());
select * from subject;

-- HTML 과목을 강의하는 모든 교수를 조회(mysql, 오라클 버전)

-- ncsql 버전 --> 표준이기 때문에 어떤 프로그램에서든 사용 가능


-- 이순신 교수가 강의하는 과목의 과목 아이디, 과목명, 교수 아이디, 교수명, 교수 등록일을 조회


-- HTML 과목을 수강하는 모든 학생을 조회


-- HTML 과목을 수강하는 모든 학생과 강의하는 모든 교수를 조회


-- employee, department, vacation, unit 테이블들의 erd 참조
-- 모든 사원들의 사원번호, 사원명, 성별, 부서명, 입사일 조회
-- 사원번호 기준으로 오름차순

    
-- 영업부에 속해있는 사원들의 사원번호, 사원명, 입사일, 급여, 부서 아이디, 부서명 조회

    
-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들의 리스트를 모두 조회







show databases; -- 모든 데이터베이스 목록을 출력
use hrdb2019;
select database();
show tables;
select * from employee;
select * from department;
select * from unit;
select * from vacation;