import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddComments() {
  return (
    <div>
      <h1>Comments</h1>
      <h2>I am the comments page</h2>
    </div>
  );
}
