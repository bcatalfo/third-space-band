import "dotenv/config";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { eq } from "drizzle-orm";
import { usersTable } from "./database/schema";

const db = drizzle(process.env.DB_FILE_NAME!);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    email: "john@example.com",
  };

  await db.insert(usersTable).values(user);
  console.log("New user created!");

  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(usersTable)
    .set({
      email: "john@google.com",
    })
    .where(eq(usersTable.email, user.email));
  console.log("User info updated!");

  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log("User deleted!");
}

main();
