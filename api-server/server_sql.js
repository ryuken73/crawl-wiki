module.exports = {
  backlinks: `
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
  getAllContentsNBacklinks:`
    select c.content_id as id, c.content_name as text, c.primary_category, c.content_url as url
    from person.contents c
    union
    select b.backlink_id as id, b.backlink_text as text, '-' as primary_category, b.backlink_url as url
    from person.backlinks b
    left join person.contents c
    on b.backlink_url = c.content_url
    where c.content_url is null
    order by text desc
  `
}