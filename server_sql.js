module.exports = {
  backlinks: `
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
  `,
  content: `
    Select c.content_id, c.content_name, c.additional_info, i.image_subdir, i.image_name
    from person.contents c
    JOIN person.images i on c.content_id = i.content_id
  `
}