
-- node subquery = backlinks 기준으로 모든 정보 select
-- backlink_id, content_id, node_text, node_url, primary_category, 
-- additional_info_raw, backlink_count, forwardlink_count
-- image_subdir, image_name
WITH node AS (
	select 
		b.backlink_id,
		c.content_id,
		b.backlink_text as node_text,
		b.backlink_url as node_url,
		c.primary_category,
		c.additional_info_raw,
		bc.backlink_count as saved_backlink_count,
		b.forwardlink_count as saved_forwardlink_count,
		(select count(*) from person.contents_backlinks cb where cb.content_id = c.content_id) as backlink_count,
		(select count(*) from person.contents_backlinks cb where cb.backlink_id = b.backlink_id) as forwardlink_count,
		i.image_subdir,
		i.image_name
	from person.backlinks b
	left join person.contents c
	on c.content_url = b.backlink_url
	left join person.backlink_count bc
	on c.content_id = bc.content_id
	left join person.images i
	on c.content_id = i.content_id
)

-- node subquery를 활용하여 content_id 로 backlink node정보 select

	-- select 
	-- n.* 
	-- from person.contents_backlinks cb
	-- join node n
	-- on cb.backlink_id = n.backlink_id
	-- where cb.content_id = '가수_한국_C_004301_유재석';

-- node subquery를 활용하여 backlink_id 로 backlink node정보 select

	select 
	n.*
	from person.backlinks b
	join person.contents c
	on b.backlink_url = c.content_url
	join person.contents_backlinks cb
	on cb.content_id = c.content_id
	join node n
	on cb.backlink_id = n.backlink_id
	where b.backlink_id = '3548';
-- backlink_count and forwardlink_count by backlinkid



-- backlinks by content_id
	WITH backlink_counts AS (
        SELECT 
			cc.content_url, 
			bc.content_id, 
			cc.primary_category,
			-- COALESCE(bc.backlink_count, 0) AS backlink_count,
			(select count(*) from person.contents_backlinks cbb where cbb.content_id = bc.content_id ) as backlink_count,
			i.image_subdir,
			i.image_name
        FROM person.contents cc
        LEFT JOIN person.backlink_count bc 
        ON cc.content_id = bc.content_id
		LEFT JOIN person.images i
		ON cc.content_id = i.content_id
    )

    SELECT 
		b.backlink_id,
		b.backlink_text as node_text, 
		b.backlink_url as node_url,
		COALESCE(bc.backlink_count, 0) AS backlink_count,
		bc.content_id,
		bc.primary_category,
		-- b.forwardlink_count,
		(select count(*) from person.contents_backlinks cbb where cbb.backlink_id = b.backlink_id) as forwardlink_count,
		bc.image_subdir,
		bc.image_name
    FROM person.backlinks b
    JOIN person.contents_backlinks cb 
        ON b.backlink_id = cb.backlink_id
    JOIN person.contents c 
        ON cb.content_id = c.content_id
    LEFT JOIN backlink_counts bc 
        ON b.backlink_url = bc.content_url
	where c.content_id = '가수_한국_C_004301_유재석'

-- forwardlinks by baclink_id

    SELECT 
		b.backlink_id,
		b.backlink_text as node_text, 
		c.content_url as node_url,		
		(select count(*) from person.contents_backlinks cbb where cbb.content_id = cb.content_id) as backlink_count,
		cb.content_id,
		c.primary_category,
		b.forwardlink_count,
		i.image_subdir,
		i.image_name
    FROM person.contents_backlinks cb
	JOIN person.contents c
	on c.content_id = cb.content_id
	JOIN person.images i
	on c.content_id = i.content_id
	LEFT JOIN person.backlinks b
	on b.backlink_url = c.content_url
	where cb.backlink_id = '3548' 
