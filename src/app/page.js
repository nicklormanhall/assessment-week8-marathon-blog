import { sql } from "@vercel/postgres";

export default async function Home() {
  const marathons = await sql`SELECT * FROM marathons`;

  return (
    <div>
      <h1> World Top Marathon</h1>
      <div className="grid-container">
        {marathons.rows.map((marathons) => {
          return (
            <div key={marathons.id} className="grid-item">
              <h3>{marathons.marathon_name}</h3>
              <p>City: {marathons.city}</p>
              <p>Country: {marathons.country}</p>
              <p>Average Attendance: {marathons.estimated_attendance}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
