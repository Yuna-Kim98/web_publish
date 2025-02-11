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

-- 테스트용 임시 데이터 
insert into shoppy_member(id, pwd, name, phone, emailname, emaildomain, zipcode, address, mdate)
values('test1234', '1234', '김철수', '010-1234-5678', 'hong1234', 'gmail.com', null, null, now());

--  login
select count(*) as result_rows from shoppy_member where id = 'test1' and pwd = '2222';

-- shoppy_product
use hrdb2019;
select * from information_schema.tables where table_name like 'shoppy%';
drop table shoppy_product;
create table shoppy_product(
	pid		int				primary key			auto_increment,
    pname	varchar(50)		not null,
    price	int,
    description		varchar(200),
    upload_file		json,
    source_file		json, -- 다른 db 프로그램에서는 json 타입으로 설정되지 않을 수 있음
    pdate			datetime
);

show tables;
desc shoppy_product;
select * from shoppy_product;
desc shoppy_product;
select pid,
		pname as name,
        price,
        description as info,
        upload_file as image
from shoppy_product;

select pid,
            pname as name,
            price,
            description as info,
            concat('http://localhost:9000/', upload_file) as image,
            source_file,
            pdate
        from shoppy_product;
        
set sql_safe_updates = 0; -- 해제 : 0, 설정: 1
delete from shoppy_product;
commit;
select * from shoppy_product;
select upload_file from shoppy_product;

select pid,
            pname as name,
            price,
            description as info,
            concat('http://localhost:9000/', upload_file->> '$[0]') as image, -- 번지수를 지정. 데이터 타입이 json일 때만 사용 가능.
            source_file,
            pdate
        from shoppy_product;
desc shoppy_product;
select * from shoppy_product where pid = 3; -- 컬럼명을 명확하게 주는 것이 유지보수 관점에서 효율적임
select pid,
		pname,
        price, 
        description,
        upload_file as uploadFile,
        source_file as sourceFile,
        pdate,
        concat('http://localhost:9000/', upload_file->> '$[0]') as image
from shoppy_product
where pid = 4;