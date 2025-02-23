const USE_LIVE_COUNT = false;
const subquery_for_node_slow = `
  WITH node AS (
    select 
      b.backlink_id,
      c.content_id,
      case when b.backlink_text is null then c.content_name
        when c.content_name is null then b.backlink_text
        else b.backlink_text
      end as node_text,
      b.backlink_url as node_url,
      c.primary_category,
      c.additional_info_raw,
      bc.backlink_count as saved_backlink_count,
      b.forwardlink_count as saved_forwardlink_count,
      (select count(*) from person.contents_backlinks cb where cb.content_id = c.content_id) as backlink_count,
      (select count(*) from person.contents_backlinks cb where cb.backlink_id = b.backlink_id) as forwardlink_count,
      (select count(*) from person.contents_backlinks cb 
	      join person.backlinks bb
		    on cb.backlink_id = bb.backlink_id
		    right join person.contents cc
  	    on cc.content_url = bb.backlink_url
		    where cb.content_id = c.content_id
	    ) as backlink_count_from_content,
      i.image_subdir,
      i.image_name
    from person.backlinks b
    full outer join person.contents c
    on c.content_url = b.backlink_url
    left join person.backlink_count bc
    on c.content_id = bc.content_id
    left join person.images i
    on c.content_id = i.content_id
  )
`
const subquery_for_node = `
  WITH node AS (
    select 
      b.backlink_id,
      c.content_id,
      case when b.backlink_text is null then c.content_name
        when c.content_name is null then b.backlink_text
        else b.backlink_text
      end as node_text,
      b.backlink_url as node_url,
      c.primary_category,
      c.additional_info_raw,
      bc.backlink_count as backlink_count,
      bc.backlink_count_from_content as backlink_count_from_content,
      b.forwardlink_count as forwardlink_count,
      b.forwardlink_count as forwardlink_count_to_content,
      i.image_subdir,
      i.image_name
    from person.backlinks b
    full outer join person.contents c
    on c.content_url = b.backlink_url
    left join person.backlink_count bc
    on c.content_id = bc.content_id
    left join person.images i
    on c.content_id = i.content_id
  )
`
const subquery = USE_LIVE_COUNT ? subquery_for_node_slow : subquery_for_node;
module.exports = {
  subquery,
  backlinksByContentId: `
    ${subquery}
    select 
    n.* 
    from person.contents_backlinks cb
    join node n
    on cb.backlink_id = n.backlink_id
  `,
  backlinksByBacklinkId:`
    ${subquery}
		select 
		n.*
		from person.backlinks b
		join person.contents c
		on b.backlink_url = c.content_url
		join person.contents_backlinks cb
		on cb.content_id = c.content_id
		join node n
		on cb.backlink_id = n.backlink_id
  `,
  forwardlinkByContentId:`
    ${subquery}
    select n.*
    from person.backlinks b
    join person.contents c
    on b.backlink_url = c.content_url
    join person.contents_backlinks cb
    on cb.backlink_id = b.backlink_id
    join node n
    on n.content_id = cb.content_id
  `,
  forwardlinkByBacklinkId:`
    ${subquery}
    select n.*
    from person.backlinks b
    join person.contents_backlinks cb
    on cb.backlink_id = b.backlink_id
    join node n
    on n.content_id = cb.content_id
  `,
  backlinks: `
    WITH backlink_counts AS (
        SELECT cc.content_url, bc.content_id, cc.primary_category,
              COALESCE(bc.backlink_count, 0) AS backlink_count
        FROM person.contents cc
        LEFT JOIN person.backlink_count bc 
        ON cc.content_id = bc.content_id
    )

    SELECT b.backlink_id,
          b.backlink_text as node_text, 
          b.backlink_url as node_url,
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
  `,
  content: `
    Select c.content_id, c.content_name, c.additional_info, i.image_subdir, i.image_name, c.primary_category
    from person.contents c
    JOIN person.images i on c.content_id = i.content_id
  `,
  forwardlinks: `
    with forward_content as (
      select b.backlink_id, b.backlink_text, b.backlink_url, cb.content_id
      from person.backlinks b
      join person.contents_backlinks cb
      on b.backlink_id = cb.backlink_id 
    ) 
    select b.backlink_id, 
      b.backlink_text as node_text,
    b.backlink_url as node_url,
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
  `,
  backlinkIdFromContentId: `
    select b.backlink_id
    from person.backlinks b
    join person.contents c
    on c.content_url = b.backlink_url
  `,
  contentIdFromBacklinkId: `
    select c.content_id
    from person.contents c
    join person.backlinks b
    on c.content_url = b.backlink_url
  `,
  allNodes: `
    select 
      b.backlink_id,
      c.content_id,
      case when b.backlink_id is null then c.content_id
        when c.content_id is null then b.backlink_id
        else c.content_id
      end as id,
      case when b.backlink_text is null then c.content_name
        when c.content_name is null then b.backlink_text
        else b.backlink_text
      end as text,
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
  `,
  getAllContentsNBacklinks:`
    select c.content_id as id, c.content_name as text, c.primary_category, c.content_url as url, b.backlink_id as backlink_id, c.content_id
    from person.contents c
    join person.backlinks b
    on c.content_url = b.backlink_url
    union
    select b.backlink_id as id, b.backlink_text as text, null as primary_category, b.backlink_url as url, b.backlink_id as backlink_id, null as content_id
    from person.backlinks b
    left join person.contents c
    on b.backlink_url = c.content_url
    where c.content_url is null
    order by text desc
  `,
  nodeByContentId:`
    ${subquery}
    select n.*
    from person.contents c
    join node n
    on n.content_id = c.content_id
  `,
  nodeByBacklinkId:`
    ${subquery}
    select n.*
    from person.backlinks b
    join node n
    on n.backlink_id = b.backlink_id
  `,
  getImageByContentId: `
    select image_subdir, image_name from person.images 
  `,
  getNodeByContentId:`
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
  `,
  getNodeByBacklinkId:`
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
      ) else null end as content_id,
      case when exists (
        select 1 from person.contents c
        where b.backlink_url = c.content_url
      ) then (
        select primary_category from person.contents c
        where b.backlink_url = c.content_url
      ) else '-' end as primary_category,
      COALESCE(bc.backlink_count, 0) as backlink_count,
      (select count(*) from forward_content fc
      where fc.backlink_id = b.backlink_id) as forwardlink_count
      
    from person.backlinks b
    left join person.contents c
    on b.backlink_url = c.content_url
    left join backlink_counts bc
    on b.backlink_id = bc.backlink_id
  `

}