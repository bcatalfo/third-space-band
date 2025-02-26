"use server";

import { drizzle } from "drizzle-orm/better-sqlite3";
import { emailList } from "./database/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

export default async function EmailList() {
  const emails = await db.select().from(emailList);
  return (
    <table>
      <caption>List of emails for the newsletter.</caption>
      <tbody>
        {emails.map(({ id, email }) => (
          <tr key={id}>
            <td>{email}</td>
          </tr>
        ))}
        <tr>
          <td>bcatalfo@gmail.com</td>
        </tr>
        <tr>
          <td>scatalfo@gmail.com</td>
        </tr>
      </tbody>
    </table>
  );
}
