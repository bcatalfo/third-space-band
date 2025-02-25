"use server";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { eq } from "drizzle-orm";
import { MailListState } from "./interface";
import { emailList } from "./database/schema";

const db = drizzle(process.env.DB_FILE_NAME!);
export async function addToMailList(_: MailListState, formData: FormData) {
  const emailAddress = formData.get("emailAddress")?.toString();

  if (emailAddress === undefined) {
    return MailListState.ErrorSigningUp;
  }
  console.log(`${emailAddress} signed up for the newsletter!`);

  const user: typeof emailList.$inferInsert = {
    email: emailAddress,
  };

  const alreadySignedUp =
    (await db.select().from(emailList).where(eq(emailList.email, emailAddress)))
      .length != 0;

  if (!alreadySignedUp) {
    await db.insert(emailList).values(user);
    return MailListState.SucessfullySignedUp;
  }
  return MailListState.AlreadySignedUp;
}
