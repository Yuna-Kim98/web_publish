show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from customer;
desc cutomer;

-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from employee;
desc employee;

-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from product;
desc product;

-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_header;
desc order_header;

-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
select * from order_detail;
desc order_detail;

-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
select customer_id, customer_name, city, gender, email, phone from customer;

-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
select employee_name, employee_id, gender, hire_date, phone from employee;

-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where customer_name = '홍길동';

-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where gender = 'F';

-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where city = '울산';

-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where point >= 500000;

-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where customer_name like '% %';

-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer where phone not like '010%';
select customer_name, customer_id, gender, city, phone, point from customer where left(phone, 3) != '010';

-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer
	where point >= 500000 and city = '서울';
    
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point from customer
	where point >= 500000 and city != '서울';
    
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point
    from customer
    where point >= 400000 and city = '서울' and gender = 'M';

-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point
    from customer
    where city = '강릉' or '원주';
select customer_name, customer_id, gender, city, phone, point
    from customer
    where city in ('강릉', '원주');

-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point
    from customer
    where city = '서울' or city = '부산' or city ='제주' or city = '인천';
select customer_name, customer_id, gender, city, phone, point
    from customer
    where city in ('서울', '부산', '제주', '인천');
    
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, point
    from customer
    where point between 400000 and 500000;

-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, birth_date, point
    from customer
    where left(birth_date, 4) = '1990';
    
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, birth_date, point
    from customer
    where left(birth_date, 4) = '1990' and gender = 'F';

-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_name, customer_id, gender, city, phone, birth_date, point
    from customer
    where left(birth_date, 4) = '1990'
    and city in ('대구', '경주')
    and gender = 'M';

-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
select concat(customer_name, '(', customer_id, ')') as customer_name, gender, city, phone, birth_date, point
    from customer
    where left(birth_date, 4) = '1990' and gender = 'M';

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date
    from employee
    where retire_date is null;
    
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date
    from employee
    where retire_date is null and gender = 'M';
    
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date, retire_date
    from employee
    where retire_date is not null;

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
select *
    from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by customer_id;
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
select *
    from order_header
    where order_date between '2019-01-01' and '2019-01-07'
	order by total_due desc;

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
select *
    from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by employee_id asc, order_date desc;

/**
	그룹함수
**/
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.
select concat(format(sum(point), 0), '점') from customer;

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
select concat(format(sum(point), 0), '점') as 포인트합계 from customer where city = '서울';

-- Q03) '서울' 지역 고객의 수를 조회하세요.
select concat(count(customer_id), '명') '서울 거주 고객수'
    from customer
    where city = '서울';

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
select concat(format(sum(point), 0), '점') 포인트합계, concat(format(avg(point), 0), '점') 평균포인트
    from customer
    where city = '서울';
     
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
select city, 
	   concat(format(sum(point), 0), '점') as 포인트합,
	   concat(format(avg(point), 0), '점') as 평균포인트,
	   concat(format(max(point), 0), '점') as 최대포인트,
	   concat(format(min(point), 0), '점') as 최소포인트
    from customer
	where city = '서울';

-- Q06) 남녀별 고객의 수를 조회하세요.
select gender as 성별,
       concat(count(*), '명') as 고객수
	from customer
    group by gender;

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city as 지역,
       concat(count(*), '명') as 고객수
	from customer
    group by city
    order by city asc;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city,
       concat(count(*), '명') count
	from customer
    group by city
    having count >= 10
    order by city asc;
    
-- Q09) 남녀별 포인트 합을 조회하세요.
select gender,
       concat(format(sum(point), 0), '점') 포인트합계
	from customer
    group by gender;
    
 select gender,
		concat(count(gender), '명') as count,
		concat(format(sum(point), 0), '점') as sum,
		concat(format(avg(point), 0), '점') as avg,
		concat(format(max(point), 0), '점') as max,
		concat(format(min(point), 0), '점') as min
	from customer
    group by gender;
    
-- gender에서 F, M으로 나오는 명칭이 직관적이지 않으므로 이름을 바꾸도록 함 -> js의 ifelse문과 비슷함
/*
	case 컬럼명
		when 'F' then '여자'
        else '남자'
    end
*/
select case gender when 'F' then '여자' else '남자' end as gender,
	   count(gender) count,
       sum(point) sum,
       avg(point) avg,
       max(point) max,
       min(point) min
	from customer
    group by gender;
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, sum(point) from customer group by city order by city asc;
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city, sum(point) sum, format(avg(point), 0) avg
	from customer
    group by city
    having sum >= 1000000
    order by sum desc;
    

      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city, sum(point) sum, format(avg(point), 0) avg
	from customer
    group by city
    order by sum desc;

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, count(*), sum(point)
from customer
group by city
order by city;

-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city,
       format(sum(point), 0) as sum,
       format(avg(point), 1) as avg
	from customer
    where point is not null
    group by city;

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
select city, gender,
	   sum(point) sum, avg(point) avg
	from customer
    where city in ('서울', '부산', '대구') -- where절로 조건을 최대한 좁혀야 속도와 효율성이 올라감(having은 그에 비해 속도가 느리다)
    group by city, gender
    order by city asc, gender desc;

/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
select customer_id,
       count(*) count, format(sum(total_due), 0) sum
	from order_header
    where left(order_date, 7) = '2019-01'
    group by customer_id
    with rollup;

-- Q17) 주문연도별 전체금액 합계를 조회하세요.
select left(order_date, 4),
       concat(format(sum(total_due), 0), '만원') sum
    from order_header
	group by left(order_date, 4);

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
select left(order_date, 4) year, substring(order_date, 6, 2) month,
	   concat(format(sum(total_due), 0), '만원') sum
	from order_header
    where left(order_date, 7) between '2019-01' and '2019-06'
    group by left(order_date, 4), substring(order_date, 6, 2);

-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
select left(order_date, 4) year, substring(order_date, 6, 2) month,
	   concat(format(sum(total_due), 0), '만원') sum,
	   concat(format(avg(total_due), 0), '만원') avg
	from order_header
    where left(order_date, 7) between '2019-01' and '2019-06'
    group by left(order_date, 4), substring(order_date, 6, 2);

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.
-- 1. 주문연도, 주문월만 가져오는 쿼리 -> 인라인뷰로 사용
select left(order_date, 4) year, substring(order_date, 6, 2) month,
	   total_due
	 from order_header;

-- 2. 1번의 쿼리를 가져와 데이터 조회
select if(grouping(year), '년도별 총합계', ifnull(year, '-')) as year,
	   if(grouping(month), '월별 총합계', ifnull(year, '-')) as month,
       count(*) count,
       sum(total_due) sum,
       avg(total_due) avg
	from (select left(order_date, 4) year, substring(order_date, 6, 2) month,
			     total_due
			from order_header) t1
	group by year, month
    with rollup;

/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문수량, 주문일시, 전체금액을 조회하세요.
select oh.order_id, 
	   oh.customer_id, 
       oh.employee_id, 
       od.order_qty, 
       oh.order_date, 
       oh.total_due
    from order_header oh, order_detail od
    where oh.order_id = od.order_id
	and total_due >= 8500000;

select distinct oh.order_id,
       oh.customer_id,
       oh.employee_id,
       od.order_qty,
       oh.order_date,
       oh.total_due
    from order_detail od,
		(select order_id, customer_id, employee_id, order_date, total_due
			from order_header
			where total_due >= 8500000) oh
    where od.order_id = oh.order_id;
    
-- order_header 테이블 : order_id, customer_id, order_date, total_due
select count(*) from order_header; -- 903
select count(*) from order_header where total_due >= 8500000;

select order_id,
	   customer_id,
       employee_id,
       order_date,
       total_due
	from order_header
    where total_due >= 8500000
    order by total_due desc;

    
-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
select distinct oh.order_id,
       oh.customer_id,
       c.customer_name,
       oh.employee_id,
       e.employee_id,
       od.order_qty,
       oh.total_due
	from order_header oh, employee e, order_detail od, customer c
    where oh.employee_id = e.employee_id
		and oh.customer_id = c.customer_id
		and oh.order_id = od.order_id
    and oh.total_due >= 8500000;

--

select oh.order_id,
	   oh.customer_id,
       c.customer_name,
       oh.employee_id,
       oh.order_date,
       oh.total_due
	from order_header oh, customer c
    where oh.customer_id = c.customer_id 
		and total_due >= 8500000
    order by total_due desc;


-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
select distinct oh.order_id,
       oh.customer_id,
       oh.employee_id,
       e.employee_name,
       od.order_qty,
       oh.total_due
	from order_header oh, employee e, order_detail od
    where oh.employee_id = e.employee_id
		and oh.order_id = od.order_id
    and oh.total_due >= 8500000;
    
--

select oh.order_id,
	   oh.customer_id,
       c.customer_name,
       oh.employee_id,
       e.employee_id,
       oh.order_date,
       oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id 
		and oh.employee_id = e.employee_id
		and total_due >= 8500000
    order by total_due desc;
-- 4번 예제의 결과

    
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
select distinct oh.order_id,
       oh.customer_id,
       c.customer_name,
       oh.employee_id,
       e.employee_id,
       e.employee_name,
       od.order_qty,
       oh.total_due
	from order_header oh, employee e, order_detail od, customer c
    where oh.employee_id = e.employee_id
		and oh.customer_id = c.customer_id
		and oh.order_id = od.order_id
    and oh.total_due >= 8500000;

-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
select distinct oh.order_id,
       oh.customer_id,
       c.customer_name,
       oh.employee_id,
       e.employee_id,
       e.employee_name,
       od.order_qty,
       oh.total_due, 
       c.city
    from order_header oh, employee e, order_detail od, customer c
    where oh.employee_id = e.employee_id
		and oh.customer_id = c.customer_id
		and oh.order_id = od.order_id
    and oh.total_due >= 8500000
		and c.city = '서울';

--

select oh.order_id,
	   oh.customer_id,
       c.customer_name,
       oh.employee_id,
       e.employee_id,
       oh.order_date,
       oh.total_due,
       c.city
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id 
		and oh.employee_id = e.employee_id
		and oh.total_due >= 8500000
        and c.city = '서울'
    order by total_due desc;
-- ansi sql
select oh.order_id,
	   oh.customer_id,
       c.customer_name,
       oh.employee_id,
       e.employee_id,
       oh.order_date,
       oh.total_due,
       c.city
	from order_header oh inner join customer c inner join employee e
    on oh.customer_id = c.customer_id 
		and oh.employee_id = e.employee_id
	where oh.total_due >= 8500000
        and c.city = '서울'
    order by oh.total_due desc;


-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
select distinct oh.order_id,
       oh.customer_id,
       c.customer_name,
       c.city,
       c.gender,
       oh.employee_id,
       e.employee_id,
       e.employee_name,
       od.order_qty,
       oh.total_due
    from order_header oh, employee e, order_detail od, customer c
    where oh.employee_id = e.employee_id
		and oh.customer_id = c.customer_id
		and oh.order_id = od.order_id
    and oh.total_due >= 8500000
		and c.city = '서울'
        and c.gender = 'M'
	order by total_due desc;
-- 뷰를 생성할 때는 조건절에 세부조건을 생성하지 않고 전체 데이터를 가지고 생성한다.


-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
-- 테이블 컬럼명 수정 : alter table [테이블명] rename column [기존 컬럼명] to [변경할 컬럼명];
desc order_detail;
alter table order_detail change drder_detail_id order_detail_id int;

select order_id,
	   order_detail_id,
	   product_id,
	   order_qty,
       unit_price,
       line_total
	from order_detail
    where order_qty >= 30;


-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
select od.order_id,
	   od.order_detail_id,
	   od.product_id,
       p.product_name,
	   od.order_qty,
       od.unit_price,
       od.line_total
	from order_detail od, product p
    where od.product_id = p.product_id
		and order_qty >= 30;

-- ansi sql
select od.order_id,
	   od.order_detail_id,
	   od.product_id,
       p.product_name,
	   od.order_qty,
       od.unit_price,
       od.line_total
	from order_detail od inner join product p
		on od.product_id = p.product_id
	where order_qty >= 30;


-- Q09) 상품코드, 상품이름, 소분류아이디(카테고리 아이디)를 조회하세요.
select count(*) from product; -- 41
select product_id, product_name, sub_category_id from product;

-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- oracle
desc sub_category;
select * from sub_category;
select p.product_id,
	   p.product_name,
       s.sub_category_name,
       p.sub_category_id,
       s.category_id
	from product p, sub_category s
    where p.sub_category_id = s.sub_category_id;
    
-- ansi sql
select s.category_id 대분류아이디,
       p.sub_category_id 소분류아이디,
       s.sub_category_name 소분류명,
       p.product_id 상품아이디,
       p.product_name 상품명
	from product p inner join sub_category s
		on p.sub_category_id = s.sub_category_id;

-- 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 대분류 이름을 추가해서 조회되게 수정하세요.
-- oracle
desc category; -- category_id, category_name
select sc.category_id 대분류아이디,
	   c.category_name 대분류명,
       p.sub_category_id 소분류아이디,
       sc.sub_category_name 소분류명,
       p.product_id 상품아이디,
       p.product_name 상품명
	from product p, sub_category sc, category c
    where p.sub_category_id = sc.sub_category_id
		and sc.category_id = c.category_id;

-- ansi sql
select sc.category_id 대분류아이디,
	   c.category_name 대분류명,
       p.sub_category_id 소분류아이디,
       sc.sub_category_name 소분류명,
       p.product_id 상품아이디,
       p.product_name 상품명
	from product p inner join sub_category sc inner join category c
    on p.sub_category_id = sc.sub_category_id
		and sc.category_id = c.category_id;

-- 대분류, 소분류 별 상품갯수, 총 상품가격 합계, 상품가격 평균
select category_name,
	   sub_category_name,
       count(product_id) count,
       format(sum(unit_price), 0) sum,
       format(avg(unit_price), 0) avg
	from (select distinct sc.category_id,
				 c.category_name,
				 p.sub_category_id,
				 sc.sub_category_name,
			     p.product_id,
			     p.product_name,
                 od.unit_price
			from product p, sub_category sc, category c, order_detail od
			where p.sub_category_id = sc.sub_category_id
				and sc.category_id = c.category_id
                and p.product_id = od.product_id) t1
    group by category_name, sub_category_name;


-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- employee, order_header, order_detail, product
-- oracle
select e.employee_name,
	   oh.order_date,
       p.product_name,
       oh.order_id,
       od.order_detail_id
	from employee e, order_header oh, order_detail od, product p
    where e.employee_id = oh.employee_id
		and oh.order_id = od.order_id
        and od.product_id = p.product_id
	and employee_name = '다정한'
		and left(oh.order_date, 4) = '2019';

-- ansi sql
select e.employee_name,
	   oh.order_date,
       p.product_name,
       oh.order_id,
       od.order_detail_id
	from employee e inner join order_header oh inner join order_detail od inner join product p
		on e.employee_id = oh.employee_id
			and oh.order_id = od.order_id
			and od.product_id = p.product_id
	where employee_name = '다정한'
		and left(oh.order_date, 4) = '2019';

-- 2019년도 1월의 주문 아이디별 다정한 사원의 주문 건수 조회
select order_id,
	   count(order_id)
	from (select e.employee_name,
			     oh.order_date,
			     p.product_name,
			     oh.order_id,
			     od.order_detail_id
			from employee e, order_header oh, order_detail od, product p
				where e.employee_id = oh.employee_id
					and oh.order_id = od.order_id
					and od.product_id = p.product_id
			and employee_name = '다정한'
				and left(oh.order_date, 7) = '2019-01') t1
	group by order_id;

-- 주문년도별, 주문월별,  주문아이디별 주문 아이디별 다정한 사원의 주문 건수 조회
-- 2019년도만 조회 
select left(order_date, 4) as year,
	   substring(order_date, 6, 2) as month,
       -- order_id,
       count(order_id)
	from (select e.employee_name,
			     oh.order_date,
			     p.product_name,
			     oh.order_id,
			     od.order_detail_id
			from employee e, order_header oh, order_detail od, product p
				where e.employee_id = oh.employee_id
					and oh.order_id = od.order_id
					and od.product_id = p.product_id
			and employee_name = '다정한') t1
	group by left(order_date, 4), substring(order_date, 6, 2) -- , order_id
    having year = '2019'; -- having절은 group 작업까지 끝난 후 실행되므로 별칭을 설정했을 경우 반드시 별칭으로 실행해야 한다.


-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
-- 행번호 추가
select * from product where product_name like '%청소기%';
desc order_header;
select row_number() over(order by oh.order_date desc) as no,
	   oh.customer_id, 
	   oh.employee_id, 
       oh.order_id, 
       oh.order_date, 
       p.product_name
	from product p, order_detail od, order_header oh
    where p.product_id = od.product_id
		and oh.order_id = od.order_id
	and product_name like '%청소기%';
    

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'soyoukim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
select * from order_header;
select order_id,
	   customer_id,
       order_date,
       total_due
    from order_header
    where customer_id in ('mtkim', 'soyoukim');

-- 김마트, 김소유 고객의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
select * from customer where customer_id in ('mtkim', 'soyoukim');  
select order_id,
	   customer_id,
       order_date,
       total_due
    from order_header
    where customer_id in (select customer_id 
							from customer 
                            where customer_name in ('김마트', '김소유'));

desc customer;
select customer_id from customer where customer_name in ('김마트', '김소유');


-- Q14) '전주' 지역 고객의 아이디, 고객명, 고객의 생일을조회하세요.
select customer_id, 
	   customer_name,
       birth_date
	from customer
    where city = '전주';

-- '전주' 지역 고객의 주문번호 조회
desc order_header;
select * -- order_id
	from order_header
    where customer_id in (select customer_id from customer where city = '전주');


-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 만약 고객명을 함께 출려하고 싶다면 order_header & customer 조인 해야 함
select order_id,
       customer_id,
       order_date,
       total_due
	from order_header
    where customer_id in (select customer_id from customer where city = '전주');


-- Q16) 고객의 포인트 최댓값을 조회하세요.
select max(point) from customer;


-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
desc customer;
select customer_name, 
	   customer_id, 
       register_date,
       point
	from customer
	where point = (select max(point) from customer);


-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
select point from customer where customer_name = '홍길동';

select customer_name,
	   customer_id, 
       register_date, 
       point
	from customer
    where point > (select point from customer where customer_name = '홍길동');


-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city from customer where customer_name = '홍길동';

select customer_name,
	   customer_id,
       city,
       register_date,
       point
	from customer
    where city = (select city from customer where customer_name = '홍길동')
    order by customer_name;


-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
select point from customer where customer_name = '홍길동';

select row_number() over(order by point desc) as no,
	   customer_name,
       customer_id,
       register_date,
       point
	from customer
    where point > (select point from customer where customer_name = '홍길동');

-- 2016 ~ 2019년도까지 주문한 고객의 아이디, 이름, 주문 번호, 주문 총 금액을 조회 
show tables;
desc customer;
desc order_header;

select left(oh.order_date, 4) as year,
	   oh.customer_id,
	   c.customer_name,
       oh.order_id,
       oh.total_due
	from customer c, (
			select * from order_header2016 -- 596
			union all
			select * from order_header2017 -- 561
			union all
			select * from order_header -- 903
		) oh
	where c.customer_id = oh.customer_id;

-- 년도별 주문건수 조회, 총판매합계 조회. 년도 기준 오름차순 정렬 
-- 년도 : year, 건수 : count, 합계 : sum
-- '년도', '건', '원'
select concat(left(oh.order_date, 4), '년도') as year,
	   concat(count(order_id), '건') as count,
       concat(format(sum(total_due), 0), '원') as sum
	from customer c, (
			select * from order_header2016 -- 596
			union all
			select * from order_header2017 -- 561
			union all
			select * from order_header -- 903
		) oh
	where c.customer_id = oh.customer_id
    group by year
    order by year asc;

-- view를 이용하여 order_header_total (2016 ~ 2019) 생성
select * from information_schema.views where table_schema = 'myshop2019';
create view order_header_total
as
select * from order_header2016
union all
select * from order_header2017
union all
select * from order_header;

--

select concat(left(t.order_date, 4), '년도') as year,
	   concat(count(order_id), '건') as count,
       concat(format(sum(total_due), 0), '원') as sum
	from customer c, order_header_total t
	where c.customer_id = t.customer_id
    group by year
    order by year asc;

-- 주문년도별, 주문월별,  주문아이디별 주문 아이디별 다정한 사원의 주문 건수 조회
-- 2016 ~ 2019 : order_header_total (view)
-- 2016 ~ 2019 detail : order_detail_total (view)
create view order_detail_total
as
select * from order_detail2016 -- 1582
union all
select * from order_detail2017 -- 1479
union all
select * from order_detail; -- 2425
-- 총 5486

select * from information_schema.views where table_schema = 'myshop2019';
select * from order_detail_total; -- 5468






 
select left(order_date, 4) as year,
	   substring(order_date, 6, 2) as month,
       -- order_id,
       count(order_id)
	from (select e.employee_name,
			     oh.order_date,
			     p.product_name,
			     oh.order_id,
			     od.drder_detail_id
			from employee e, order_header_total oh, order_detail_total od, product p
				where e.employee_id = oh.employee_id
					and oh.order_id = od.order_id
					and od.product_id = p.product_id) t1
	group by left(order_date, 4), substring(order_date, 6, 2) -- , order_id
	order by year asc;


-- 카테고리 활용 : 서브쿼리
-- 대분류로 '가전제품' 선택 후 소분류 값 가져오기
select sub_category_name
	from sub_category
    where category_id in (select category_id from category where category_name = '가전제품');

-- 소분류에서 대형을 선택한 후 상품명 가져오기
select product_name 
	from product
    where sub_category_id = (select sub_category_id from sub_category where sub_category_name = '대형');