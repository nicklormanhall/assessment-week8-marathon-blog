import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Comments({ params }) {
  const comments =
    await sql`SELECT pc.id AS comment_id, pc.content AS comment_content, pc.date_added AS comment_date,
    m.marathon_name, pc.username AS comment_username, p.id AS post_id
FROM post_comments pc
JOIN posts p ON pc.post_id = p.id
JOIN marathons m ON p.marathon_id = m.id
WHERE post_id = ${params.id}`;

  // const comments = result.rows[0];

  return (
    <div>
      <h1>Comments</h1>
      <div className="link-container">
        <Link href={`./add/`}>Add comment</Link>
      </div>
      {comments.rows.map((comments) => {
        return (
          <div key={comments.id} className="post-item">
            <h4>{comments.comment_content}</h4>
            <p>
              {comments.marathon_name} | Commented by:
              {comments.comment_username}
            </p>
          </div>
        );
      })}
    </div>
  );
}
