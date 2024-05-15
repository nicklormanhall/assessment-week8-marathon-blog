import { sql } from "@vercel/postgres";

export default async function Home() {
  const marathons = await sql`SELECT * FROM marathons`;
  console.log(marathons);

  return (
    <div>
      <h1> World Top Marathon</h1>
      {marathons.rows.map((marathons) => {
        return (
          <div key={marathons.id}>
            <h3>{marathons.marathon_name}</h3>
            <p>{marathons.city}</p>
            <p>{marathons.country}</p>
            <p>{marathons.estimated_attendance}</p>
          </div>
        );
      })}
    </div>
  );
}
