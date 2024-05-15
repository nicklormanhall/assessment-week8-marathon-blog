import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Posts({ searchParams }) {
  const result = await sql`
    SELECT m.id, p.id, m.marathon_name, p.username, p.content, p.date_posts_added
    FROM marathons m
    INNER JOIN posts p ON m.id = p.marathon_id;
  `;

  let posts = result.rows;

  if (searchParams.sort === "desc") {
    posts = posts.reverse();
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="link-container">
        <Link href="/posts">Sort Ascending</Link>
        <Link href="/posts?sort=desc">Sort Descending</Link>
      </div>

      {posts.map((post) => {
        return (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <div key={post.id} className="post-item">
              <h3>{post.marathon_name}</h3>
              <p>Runner's name: {post.username}</p>
              <p>{post.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
