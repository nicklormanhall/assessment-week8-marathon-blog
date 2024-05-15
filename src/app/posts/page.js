import { sql } from "@vercel/postgres";

export default async function Posts() {
  const posts =
    await sql`SELECT m.marathon_name, p.username, p.content, p.date_posts_added
  FROM marathons m
  INNER JOIN posts p ON m.id = p.marathon_id;`;

  return (
    <div>
      <h2>Posts</h2>
      <div className="post-container">
        {posts.rows.map((posts) => {
          return (
            <div key={posts.id} className="post-item">
              <h3>{posts.marathon_name}</h3>
              <p>Runners name: {posts.username}</p>
              <p>{posts.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
