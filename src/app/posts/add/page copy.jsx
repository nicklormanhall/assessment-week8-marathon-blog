import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComment({ params }) {
  async function handleAddComment(formData) {
    "use server";

    const username = formData.get("username");
    const content = formData.get("content");

    await sql`INSERT INTO post_comments (post_id, username, content) VALUES (${params.id}, ${username}, ${content})`;

    revalidatePath("/posts");
    revalidatePath("/posts/${params.id}");

    // redirect(`/posts/${params.id}`);

    redirect("/posts/");
  }

  return (
    <div className="add-comment-container">
      <h2>Add Comment</h2>
      <form action={handleAddComment}>
        <label htmlFor="username">User Name</label>
        <input name="username" id="username" placeholder="User Name" />
        <label htmlFor="content">Content</label>
        <input name="content" id="content" placeholder="Content" />

        <button type="submit">Add a Comment</button>
      </form>
    </div>
  );
}
