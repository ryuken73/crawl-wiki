SELECT * FROM person.backlink_count order by backlink_count desc;

select content_id, content_name, additional_info_raw, additional_info from person.contents

select to_tsvector('열혈사제2와 관련된 배우들')



select b.backlink_text
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
where c.content_name = '신민아' 

-- backlinkId from contentId
select backlink_id from person.backlinks b
join person.contents c on c.content_url = b.backlink_url
where c.content_id ='가수_한국_C_004301_유재석'

-- contents 중에서 backlinks에 수집되지 않은 것들 조회
select c.content_id, c.content_name, b.backlink_id from person.contents c
left join person.backlinks b on b.backlink_url = c.content_url
where b.backlink_url is null

-- update primary_category of content
select substring(content_id, 1,5) from person.contents_clone;

update person.contents set primary_category = (
select substring(content_id, 1,5) from person.contents co
where co.content_id = person.contents.content_id
)

-- 신민아 node 눌렀을 때 관련된 backlinks 리턴 (각 backlink가 person인지 표시)
select b.backlink_text, b.backlink_url, b.content_ref_count,
case when exists(
	select 1 from person.contents cc 
	where cc.content_url = b.backlink_url
) then 'Y' else 'N'
end as isPerson
from person.backlinks b
join person.contents_backlinks cb on b.backlink_id = cb.backlink_id
join person.contents c on cb.content_id = c.content_id
-- where c.content_name = '신민아' -- content_id로 고쳐야겠지? 
where c.content_id = '가수_한국_C_004301_유재석'
order by content_ref_count desc

-- 신민아 node 눌렀을 때 관련된 backlinks들의 text, url 그리고 backlink들의 backlink 갯수(만약 있다면)를 리턴
select b.backlink_text, b.backlink_url, b.content_ref_count,
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
    SELECT cc.content_url, bc.content_id,
           COALESCE(bc.backlink_count, 0) AS backlink_count
    FROM person.contents cc
    LEFT JOIN person.backlink_count bc 
    ON cc.content_id = bc.content_id
)

SELECT b.backlink_id,
       b.backlink_text, 
       b.backlink_url,
       COALESCE(bc.backlink_count, 0) AS count,
	   bc.content_id
FROM person.backlinks b
JOIN person.contents_backlinks cb 
    ON b.backlink_id = cb.backlink_id
JOIN person.contents c 
    ON cb.content_id = c.content_id
LEFT JOIN backlink_counts bc 
    ON b.backlink_url = bc.content_url
-- WHERE c.content_name = '신민아';
where c.content_id = '배우_한국_C_000001_감우성'



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


-- backlink별 역참조 카운트 조회 (live)
select  cb.backlink_id, b.backlink_text, count(1) as count 
from person.contents_backlinks cb 
join person.backlinks b
on cb.backlink_id = b.backlink_id
group by 1,2 
order by count desc

-- backlink별 역참조 카운트 조회 (집계)
select backlink_text, content_ref_count from person.backlinks
order by 2 desc

-- backlinks count update
update person.backlinks b set content_ref_count = (
	select count(*) 
	from person.contents_backlinks cb 
	where b.backlink_id = cb.backlink_id
)

-- 가장 역참조가 많은 backlink 조회
select  cb.backlink_id, b.backlink_text, count(1) as count 
from person.contents_backlinks cb 
join person.backlinks b
on cb.backlink_id = b.backlink_id
group by 1,2 
having count(*) > 1000
order by count desc
