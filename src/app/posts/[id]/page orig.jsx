import { sql } from "@vercel/postgres";

export default async function IndividualPost({ params }) {
  const result =
    await sql`SELECT m.id, p.id, m.marathon_name, p.username, p.content, p.date_posts_added
  FROM marathons m
  INNER JOIN posts p ON m.id = p.marathon_id WHERE p.id = ${params.id}`;
  const posts = result.rows[0];

  console.log(params);
  return (
    <div>
      <h1> Add a comment</h1>
      <div className="post-item">
        <h3>{posts.marathon_name}</h3>
        <p>Runners name: {posts.username}</p>
        <p>{posts.content}</p>
      </div>
    </div>
  );
}
