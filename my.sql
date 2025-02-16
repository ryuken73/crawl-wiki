-- 전반적인 레코드 수

select primary_category, count(*) from person.contents group by 1;

SELECT * FROM person.backlink_count order by backlink_count desc;

select content_id, content_name, additional_info_raw, additional_info from person.contents

select to_tsvector('열혈사제2와 관련된 배우들')

select * from person.contents where content_name = '손흥민'

select content_id,content_url from person.contents
where content_id in (
select content_id from person.backlink_count
where backlink_count = 0)

delete from person.backlink_count where backlink_count=0


select b.backlink_text
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
where c.content_name = '박원순' 

-- backlinkId from contentId
select backlink_id from person.backlinks b
join person.contents c on c.content_url = b.backlink_url
where c.content_id ='가수_한국_C_004301_유재석'

-- contents 중에서 backlinks로 등록되지 않은 것들 조회
select c.content_id, c.content_name, b.backlink_id from person.contents c
left join person.backlinks b on b.backlink_url = c.content_url
where b.backlink_url is null

-- update content_url
update person.contents c set content_url = (
	select substr(content_url, 18) from person.contents cc
	where c.content_id = cc.content_id
) where content_url like 'https://%'


-- 신민아 node 눌렀을 때 관련된 backlinks 리턴 (각 backlink가 person인지 표시)
select b.backlink_text, b.backlink_url, b.forwardlink_count,
case when exists(
	select 1 from person.contents cc 
	where cc.content_url = b.backlink_url
) then 'Y' else 'N'
end as isContent
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
-- where c.content_name = '신민아' -- content_id로 고쳐야겠지? 
-- where c.content_id = '가수_한국_C_004301_유재석
where c.content_id = '정치인_한국_C_007345_박정희'
order by forwardlink_count desc

-- 신민아 node 눌렀을 때 관련된 backlinks들의 text, url 그리고 backlink들의 
-- forwardlink 갯수(만약 있다면)를 리턴
select b.backlink_text, b.backlink_url, b.forwardlink_count,
(select backlink_count 
 from person.contents cc, person.backlink_count bc 
 where cc.content_id = bc.content_id
 and cc.content_url = b.backlink_url
 )
 as backink_count
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
where c.content_name = '신민아'

-- backlink가 person이라면 backlink count도 같이 리턴
select b.backlink_text, b.backlink_url,
case when exists(
	select 1 from person.contents cc 
	where cc.content_url = b.backlink_url
) then (
	select backlink_count
	from person.backlink_count bc, person.contents cc 
	where cc.content_id = bc.content_id
) else 0
end as backlinkCount
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
where c.content_name = '신민아' 

-- subquery를 사용한 버전 (backlink의 content_id도 같이 리턴)

    WITH backlink_counts AS (
        SELECT cc.content_url, bc.content_id, cc.primary_category,
              COALESCE(bc.backlink_count, 0) AS backlink_count
        FROM person.contents cc
        LEFT JOIN person.backlink_count bc 
        ON cc.content_id = bc.content_id
    )

    SELECT b.backlink_id,
          b.backlink_text, 
          b.backlink_url,
          COALESCE(bc.backlink_count, 0) AS backlink_count,
          bc.content_id,
          bc.primary_category,
          b.forwardlink_count
    FROM person.backlinks b
    JOIN person.contents_backlinks cb 
        ON b.backlink_id = cb.backlink_id
    JOIN person.contents c 
        ON cb.content_id = c.content_id
    LEFT JOIN backlink_counts bc 
        ON b.backlink_url = bc.content_url
	where c.content_id = '가수_한국_C_004301_유재석'


-- 1984년이라는 node 눌렀을 때 그것과 연결된 person return
select c.content_name
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
where b.backlink_text = '1984년' -- backlink_id로 고쳐야겠지?

select count(*)
from person.contents c, person.contents_backlinks cb
where c.content_id = cb.content_id and c.content_name = '이일화'



-- backlink incremental crawling 시 대상 조회: backlink_count에 없는 contents가져오기
select c.content_id
from person.contents c left outer join person.backlink_count bc
on c.content_id = bc.content_id
where bc.backlink_count is null


-- backlink별 backlink 카운트 조회 (live)
select  cb.backlink_id, b.backlink_text, count(1) as count 
from person.contents_backlinks cb 
join person.backlinks b
on cb.backlink_id = b.backlink_id
group by 1,2 
order by count desc

-- backlink별 forwardlink 카운트 조회 (집계)
select backlink_text, forwardlink_count from person.backlinks
order by 2 desc

-- forwardlink_count update
update person.backlinks b set forwardlink_count = (
	select count(*) 
	from person.contents_backlinks cb 
	where b.backlink_id = cb.backlink_id
)

-- content_id from backlink_id-
select c.content_id
from person.contents c
join person.backlinks b
on c.content_url = b.backlink_url
where b.backlink_id='1311'

-- backlink_id from content_id
select c.content_name, b.backlink_id
from person.backlinks b
right outer join person.contents c
on c.content_url = b.backlink_url
where c.content_id ='배우_한국_C_002147_김정현_1990년생'

---- 개념 ----------------------------------------------------------------
---- backlink 개념
 -- 김정현의 backlink들 구하기 == 136개
 select b.backlink_text, b.backlink_url
 from person.backlinks b
 join person.contents_backlinks cb
 on cb.backlink_id = b.backlink_id
 where cb.content_id = '배우_한국_C_002147_김정현_1990년생'
 
 -- 김정현의 backlink들 중에 content_id를 가지고 있는 것들만 리턴 == 11개
  select c.content_id, b.backlink_text, b.backlink_url
  from person.backlinks b
  join person.contents_backlinks cb
  on cb.backlink_id = b.backlink_id
  right join person.contents c
  on c.content_url = b.backlink_url
  where cb.content_id = '배우_한국_C_002147_김정현_1990년생'

---- forwardlink 개념
 -- 김정현의 forwardlink들 구하기 == 21개
 select cb.content_id
 from person.contents_backlinks cb
 where cb.backlink_id = '1311'
---------------------------------------------------------------------------


-- 김정현을 언급한 사람들 (backlink) => return content_id
-- select * from person.contents where content_id='배우_한국_C_002147_김정현_1990년생'
  select c.content_id, b.backlink_text, b.backlink_url
  from person.backlinks b
  join person.contents_backlinks cb
  on cb.backlink_id = b.backlink_id
  right join person.contents c
  on c.content_url = b.backlink_url
  where cb.content_id = '배우_한국_C_002147_김정현_1990년생'

-- 김정현이 언급한 사람들 (forward link: 본문 링크) => return content_id
-- select * from person.backlinks where backlink_id='1311'
-- get content_id for forward link
  select b.backlink_text, b.backlink_url, cb.content_id
  from person.backlinks b
  join person.contents_backlinks cb
  on b.backlink_id = cb.backlink_id 
  where b.backlink_id='1311'

-- subquery version
  with forward_content as (
	  select b.backlink_id, b.backlink_text, b.backlink_url, cb.content_id
	  from person.backlinks b
	  join person.contents_backlinks cb
	  on b.backlink_id = cb.backlink_id 
  ) 
  select * 
  from forward_content fc
  where fc.backlink_id = '1311'

-- 확장 using subquery
  with forward_content as (
	  select b.backlink_id, b.backlink_text, b.backlink_url, cb.content_id
	  from person.backlinks b
	  join person.contents_backlinks cb
	  on b.backlink_id = cb.backlink_id 
  ) 
  select b.backlink_id, 
  	b.backlink_text,
	b.backlink_url,
	COALESCE(bc.backlink_count, 0) AS backlink_count,
	fc.content_id, 
	c.primary_category,
	b.forwardlink_count
  from forward_content fc
  join person.contents c
  on fc.content_id = c.content_id
  join person.backlinks b
  on b.backlink_url = c.content_url
  join person.backlink_count bc
  on fc.content_id = bc.content_id
  -- where fc.backlink_id = '1311'
  where fc.backlink_id = '3548'

-- 1) forward link 가장 많이 가진 순서...
select backlink_text, forwardlink_count 
from person.backlinks 
where forwardlink_count > 10
order by forwardlink_count desc

-- 2) contents_backlinks 테이블에서 backlink_id기준으로 backlink 갯수 조회
--    이것은 각 backlink의 forward link 갯수와 같다.
--    이 값은 위 1)과 동일해야하는데, 만약 다르면 다시 집계를 해야한다.
select  cb.backlink_id, b.backlink_text, count(1) as count 
from person.contents_backlinks cb 
join person.backlinks b
on cb.backlink_id = b.backlink_id
group by 1,2 
having count(*) > 10
order by count desc


-- 검색엔진관련 Query
-- 대상: contents와 backlinks 모두가 검색 대상
-- 제공 필드:
--- id:, text:, primary_category:
--- * id는 contents라면 content_id, backlink라면 backlink_id 사용
--- * text는 contents라면 content_name, backlink라면 backlink_text
--- * primary_category는 contents는 그대로, backlink는 "-"
select c.content_id as id, c.content_name as text, c.primary_category, c.content_url as url, b.backlink_id as backlink_id
from person.contents c
join person.backlinks b
on c.content_url = b.backlink_url
union
select b.backlink_id as id, b.backlink_text as text, '-' as primary_category, b.backlink_url as url, b.backlink_id as backlink_id
from person.backlinks b
left join person.contents c
on b.backlink_url = c.content_url
where c.content_url is null
order by text desc

-- select node info by content_id
-- return 
-- node_text (== content_name)
-- node_url (== content_url)
-- backlink_id
-- backlink_count
-- content_id,
-- primary_category
-- forwardlink_count

with forward_content as (
  select b.backlink_id, b.backlink_text, b.backlink_url, cb.content_id
  from person.backlinks b
  join person.contents_backlinks cb
  on b.backlink_id = cb.backlink_id 
)

select c.content_name as node_text,
	c.content_url as node_url,
	case when exists (
		select 1 from person.backlinks b
		where b.backlink_url = c.content_url
	) then (
		select backlink_id from person.backlinks b
		where b.backlink_url = c.content_url
	) else '-' end as backlink_id,
	c.content_id,
	c.primary_category,
	bc.backlink_count,
	(
		select count(*) as forwardlink_count 
		from forward_content fc 
		where fc.backlink_url = c.content_url
	)
from person.contents c
join person.backlink_count bc
on c.content_id = bc.content_id
where c.content_id = '정치인_한국_C_007373_윤석열'
	

-- select node info by backlink_id
-- return 
-- node_text (== baclink_text)
-- node_url (== backlink_url)
-- backlink_id
-- backlink_count
-- content_id,
-- primary_category
-- forwardlink_count

WITH backlink_counts AS (
	SELECT cc.content_url, bc.content_id, cc.primary_category, 
		  bb.backlink_id,
		  COALESCE(bc.backlink_count, 0) AS backlink_count
	FROM person.contents cc
	LEFT JOIN person.backlink_count bc 
	ON cc.content_id = bc.content_id
	LEFT JOIN person.backlinks bb
	on bb.backlink_url = cc.content_url
), forward_content as (
  select b.backlink_id, b.backlink_text, b.backlink_url, cb.content_id
  from person.backlinks b
  join person.contents_backlinks cb
  on b.backlink_id = cb.backlink_id 
)

select 
	b.backlink_text as node_text,
	b.backlink_url as node_url,
	b.backlink_id,
	-- bc.backlink_count,
	case when exists (
		select 1 from person.contents c
		where b.backlink_url = c.content_url
	) then (
		select content_id from person.contents c
		where b.backlink_url = c.content_url
	) else '-' end as content_id,
	case when exists (
		select 1 from person.contents c
		where b.backlink_url = c.content_url
	) then (
		select primary_category from person.contents c
		where b.backlink_url = c.content_url
	) else '-' end as primary_category,
	bc.backlink_count,
	(select count(*) as forwardlink_count from forward_content fc
	 where fc.backlink_id = b.backlink_id)
	
from person.backlinks b
join person.contents c
on b.backlink_url = c.content_url
join backlink_counts bc
on b.backlink_id = bc.backlink_id
where b.backlink_id='125604'



    WITH backlink_counts AS (
      SELECT cc.content_url, bc.content_id, cc.primary_category, 
          bb.backlink_id,
          COALESCE(bc.backlink_count, 0) AS backlink_count
      FROM person.contents cc
      LEFT JOIN person.backlink_count bc 
      ON cc.content_id = bc.content_id
      LEFT JOIN person.backlinks bb
      on bb.backlink_url = cc.content_url
    ), forward_content as (
      select b.backlink_id, b.backlink_text, b.backlink_url, cb.content_id
      from person.backlinks b
      join person.contents_backlinks cb
      on b.backlink_id = cb.backlink_id 
    )

    select 
      b.backlink_text as node_text,
      b.backlink_url as node_url,
      b.backlink_id,
      -- bc.backlink_count,
      case when exists (
        select 1 from person.contents c
        where b.backlink_url = c.content_url
      ) then (
        select content_id from person.contents c
        where b.backlink_url = c.content_url
      ) else '-' end as content_id,
      case when exists (
        select 1 from person.contents c
        where b.backlink_url = c.content_url
      ) then (
        select primary_category from person.contents c
        where b.backlink_url = c.content_url
      ) else '-' end as primary_category,
      bc.backlink_count,
      (select count(*) from forward_content fc
      where fc.backlink_id = b.backlink_id)
      
    from person.backlinks b
    left join person.contents c
    on b.backlink_url = c.content_url
    left join backlink_counts bc
    on b.backlink_id = bc.backlink_id
	where b.backlink_id='124345'
