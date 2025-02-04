/**
	Shoppy 테이블 정의
**/
-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables where table_name like 'shoppy%';
-- shoppy_member 테이블 생성
use hrdb2019;
select database();
show tables;
create table shoppy_member(
	id				varchar(30)		primary key,
    pwd				varchar(50)		not null,
    name			varchar(10)		not null,
    phone			char(13)		not null,
    emailname		varchar(20)		not null,
    emaildomain		varchar(20)		not null,
    zipcode			char(5),
    address			varchar(80),
    mdate			datetime
);
desc shoppy_member;

select * from shoppy_member;

-- 'test1' 아이디 중복체크 : count 함수로 결과 반환
select count(id) as result from shoppy_member where id = 'test1';