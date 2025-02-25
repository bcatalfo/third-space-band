"use server";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { eq } from "drizzle-orm";
import { MailListState } from "./interface";
import { usersTable } from "./database/schema";

const db = drizzle(process.env.DB_FILE_NAME!);
export async function addToMailList(_: MailListState, formData: FormData) {
  const emailAddress = formData.get("emailAddress")?.toString();

  if (emailAddress === undefined) {
    return MailListState.ErrorSigningUp;
  }
  console.log(`${emailAddress} signed up for the newsletter!`);

  const user: typeof usersTable.$inferInsert = {
    email: emailAddress,
  };

  const alreadySignedUp =
    (
      await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.email, emailAddress))
    ).length != 0;

  if (!alreadySignedUp) {
    await db.insert(usersTable).values(user);
    return MailListState.SucessfullySignedUp;
  }
  return MailListState.AlreadySignedUp;
}
