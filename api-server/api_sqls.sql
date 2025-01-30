
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
		(select count(*) from person.contents_backlinks cb where cb.content_id = c.content_id)
	from person.backlinks b
	full outer join person.contents c
	on c.content_url = b.backlink_url
	left join person.backlink_count bc as backlink_count,
		(select count(*) from person.contents_backlinks cb where cb.backlink_id = b.backlink_id) as forwardlink_count,
		i.image_subdir,
		i.image_name
	on c.content_id = bc.content_id
	left join person.images i
	on c.content_id = i.content_id
)

-- node subquery를 활용하여 content_id로 backlink node정보 select
	-- select 
	-- n.* 
	-- from person.contents_backlinks cb
	-- join node n
	-- on cb.backlink_id = n.backlink_id
	-- where cb.content_id = '가수_한국_C_004301_유재석';

-- -- node subquery를 활용하여 backlink_id로 backlink node정보 select
	-- select 
	-- n.*
	-- from person.backlinks b
	-- join person.contents c
	-- on b.backlink_url = c.content_url
	-- join person.contents_backlinks cb
	-- on cb.content_id = c.content_id
	-- join node n
	-- on cb.backlink_id = n.backlink_id
	-- where b.backlink_id = '3548';
-- node subquery를 활용해서 content_id로 forwardlink node정보 select
	-- select n.*
	-- from person.backlinks b
	-- join person.contents c
	-- on b.backlink_url = c.content_url
	-- join person.contents_backlinks cb
	-- on cb.backlink_id = b.backlink_id
	-- join node n
	-- on n.content_id = cb.content_id
	-- where c.content_id = '가수_한국_C_004301_유재석'
-- node subquery를 활용해서 backlink_id로 forwardlink node정보 selec
	-- select n.*
	-- from person.backlinks b
	-- join person.contents_backlinks cb
	-- on cb.backlink_id = b.backlink_id
	-- join node n
	-- on n.content_id = cb.content_id
	-- where b.backlink_id = '3548';

-- node by contentId
	-- select n.*
	-- from person.contents c
	-- join node n
	-- on n.content_id = c.content_id
	-- where c.content_id = '가수_한국_C_004301_유재석'

-- node by backlinkId
	-- select n.*
	-- from person.backlinks b
	-- join node n
	-- on n.backlink_id = b.backlink_id
	-- where b.backlink_id = '3548'

-- get all links (for indexing search engine)
	select 
		b.backlink_id,
		c.content_id,
		case when b.backlink_id is null then c.content_id
			 when c.content_id is null then b.backlink_id
			 else c.content_id
		end as id,
		b.backlink_text as text,
		b.backlink_url as url,
		c.primary_category,
		bc.backlink_count as backlink_count,
		b.forwardlink_count as forwardlink_count
	from person.backlinks b
	full outer join person.contents c
	on c.content_url = b.backlink_url
	left join person.backlink_count bc
	on c.content_id = bc.content_id
	order by text

